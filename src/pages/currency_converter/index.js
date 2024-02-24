import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CurrencySelector from "../../components/dropdown/CurrencySelector";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { LineChart } from "@mui/x-charts";
import { useCurrencyConverter } from '../../features';
import dayjs from "dayjs";
import LoadingButton from "../../components/buttons/LoadingBtn";

const amountField = { FIRST: 'first', SECOND: 'second' };

export default function CurrencyConverter() {
    const { isLoading, historyData, convert, fetchHistoryData } = useCurrencyConverter();
    const [firstCurrency, setFirstCurrency] = React.useState("USD");
    const [secondCurrency, setSecondCurrency] = React.useState("MMK");
    const [firstAmount, setFirstAmount] = React.useState(1);
    const [secondAmount, setSecondAmount] = React.useState(null);
    const [converter, setConverter] = React.useState({ from: 'USD', to: 'MMK', fromVal: 1, toVal: '', resultField: amountField.SECOND, lastUpdatedAt: null });

    function onFirstCurrencyChange(code) {
        setFirstCurrency(code);
        setConverter(prevState => ({ ...prevState, from: code }));
    }

    function onSecondCurrencyChange(code) {
        setSecondCurrency(code);
        setConverter(prevState => ({ ...prevState, to: code }));
    }

    function onFirstCurrencyAmountChange(e) {
        const val = e.target.value;
        setFirstAmount(val);
        setConverter(prevState => (
            { ...prevState, from: firstCurrency, to: secondCurrency, fromVal: val, resultField: amountField.SECOND }
        ));
    }

    function onSecondCurrencyAmountChange(e) {
        const val = e.target.value;
        setSecondAmount(val);
        setConverter(prevState => (
            { ...prevState, from: secondCurrency, to: firstCurrency, fromVal: val, resultField: amountField.FIRST }
        ));
    }

    function convertCurrency() {
        setConverter(prevState => ({ ...prevState, toVal: '' }));

        convert(converter.from, converter.to, converter.fromVal)
        .then(({ lastUpdatedAt, resultVal }) => {
            setConverter(prevState => ({ ...prevState, toVal: resultVal, lastUpdatedAt }));
        });
    }

    React.useEffect(() => {
        const startDate = dayjs().subtract(7, 'day').format('YYYY-MM-DD');
        fetchHistoryData({ from: converter.from, to: converter.to, startDate: "2024-01-10" })
        if(converter.resultField == amountField.FIRST) {
            setFirstAmount(converter.toVal);
        }
        else {
            setSecondAmount(converter.toVal);
        }
    }, [converter.toVal]);

    return (
        <>
            <Typography variant="h3">Currency Converter</Typography>

            <Grid container spacing={10} sx={{ mt: 1 }}>
                <Grid item sm={12} md={12} lg={8}>
                    <Box sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", p: 10 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 5 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '100%', backgroundColor: '#00ff00' }}></div>
                            <Typography variant="caption" margin={0} color="gray">Last updated at: { converter.lastUpdatedAt && dayjs(converter.lastUpdatedAt).format("MMM DD, YYYY hh:mm A") }</Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 5, mb: 6 }}>
                            <Box>
                                <CurrencySelector fullWidth hasLabel hasFlag defaultCurrency="USD" onChange={onFirstCurrencyChange}/>
                                <TextField variant="filled" fullWidth hiddenLabel sx={{ mt: 6 }} inputProps={{ style: { fontSize: "140%" } }} onChange={onFirstCurrencyAmountChange} value={firstAmount} disabled={isLoading}/>
                            </Box>
                            <CompareArrowsIcon color="primary" sx={{ width: 30 }}/>
                            <Box>
                                <CurrencySelector fullWidth hasLabel hasFlag defaultCurrency="MMK" onChange={onSecondCurrencyChange}/>
                                <TextField variant="filled" fullWidth hiddenLabel sx={{ mt: 6}} inputProps={{ style: { fontSize: "140%" } }} onChange={onSecondCurrencyAmountChange} value={secondAmount} disabled={isLoading}/>
                            </Box>
                        </Box>

                        <LoadingButton isLoading={isLoading} fullWidth onClick={convertCurrency}>Convert</LoadingButton>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Box sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", p: "30px 10px", width: '100%' }}>
                        <Typography variant="body1" color="gray" pl={2}>{converter.from}/{converter.to} for past 7 days</Typography>
                        {
                            historyData.isLoading ? 
                                <Box height={250} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress size={25} color="secondary"/></Box> : 
                                <LineChart
                                    xAxis={[{ data: historyData.data.map(item => item.date), scaleType: 'point', tickInterval: (val, index) => index == 0 || index == parseInt(historyData.data.length/2) || index == historyData.data.length -1 }]}
                                    series={[{ data: historyData.data.map(item => item.value), showMark: false, curve: "catmullRom", color: "#23CE6B" }]}
                                    height={250}
                                />
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}