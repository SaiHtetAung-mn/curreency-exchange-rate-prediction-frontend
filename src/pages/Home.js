import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LineChart } from "@mui/x-charts";
import React from "react";
import ShadowBox from "../components/box/ShadowBox";
import CurrencySelector from "../components/dropdown/CurrencySelector";
import PeriodSelector from "../components/buttons/PeriodSelector";
import { useCurrencyConverter, useCurrencyPrediction } from "../features";
import DefaultDatePicker from '../components/datepicker/DatePicker';
import dayjs from "dayjs";
import ArrowIcon from '@mui/icons-material/ArrowForward';
import LoadingButton from '../components/buttons/LoadingBtn';
import LoadingWave from "../components/box/LoadingWave";
import PopularRate from "./home/PopularRate";

export default function Home() {
    const [historyCurrency, setHistoryCurrency] = React.useState("USD");
    const [period, setPeriod] = React.useState(5);
    const { historyData, fetchHistoryData } = useCurrencyConverter();
    const { predict, isLoading } = useCurrencyPrediction();
    const [prediction, setPreidction] = React.useState({ currency: null, date: null, result: '' });

    React.useEffect(() => {
        const startDate = dayjs().subtract(period, 'day').format('YYYY-MM-DD');
        fetchHistoryData({ from: historyCurrency, to: 'MMK', startDate });
    }, [historyCurrency, period]);

    const onPredictionCurrencyChange = (currency) => {
        setPreidction(prevState => ({ ...prevState, currency }));
    }

    const onPredictionDateChange = (date) => {
        setPreidction(prevState => ({ ...prevState, date }));
    }

    const onPredict = () => {
        if(prediction.currency && prediction.date) {
            predict(prediction.currency, prediction.date).then(result => {
                setPreidction(prevState => ({ ...prevState, result }));
            })
        }
    }

    return (
        <Grid container spacing={10} pb={10}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <PopularRate/>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ShadowBox>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h4">History data</Typography>
                        <Typography variant="h6">1 {historyCurrency} / MMK</Typography>
                        <CurrencySelector defaultCurrency={historyCurrency} onChange={(val) => setHistoryCurrency(val)} hasLabel hideBorder/>
                    </Box>

                    <PeriodSelector onChange={(val) => setPeriod(val)}/>

                    {
                        historyData.isLoading ? 
                            <Box height={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress size={30} color="secondary"/></Box> : 
                        <LineChart
                            xAxis={[{ data: historyData.data.map(item => item.date), scaleType: 'point', tickInterval: (val, index) => index%2 == 0 || index == historyData.data.length-1 }]}
                            series={[{ data: historyData.data.map(item => item.value), showMark: false, curve: "catmullRom", color: "#23CE6B" }]}
                            height={300}
                        />
                    }
                </ShadowBox>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ShadowBox>
                    <Typography variant="h4" sx={{ m: 0 }}>Currency Prediction</Typography>
                    <Typography variant="body1" color="gray" sx={{ mt: 2 }}>Forecast future Burmese MMK exchange rate against other currencies</Typography>
                    <Grid container sx={{ mt: 5 }} spacing={4} >
                        <Grid item lg={7}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 4, mb: 3 }}>
                                <CurrencySelector hasFlag hasLabel placeholder="Currency against" onChange={onPredictionCurrencyChange}/>
                                <DefaultDatePicker label="Future date" disablePast onChange={onPredictionDateChange} minDate={dayjs().add(1, 'day')}/>
                            </Box>
                            <LoadingButton fullWidth disabled={isLoading || !prediction.currency || !prediction.date } isLoading={isLoading} onClick={onPredict}>Predict</LoadingButton>
                        </Grid>
                        <Grid item lg={1} textAlign="center" color="primary" sx={{ alignSelf: 'center' }}>
                            <ArrowIcon sx={{ width: '80px' }}/>
                        </Grid>
                        <Grid item lg={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" margin={0}>Prediction Result</Typography>
                                <Typography variant="body2" marginTop={1} color="GrayText" sx={{ visibility: prediction.currency && prediction.date ? 'visible' : 'hidden' }}>1 USD per MMK for Feb 24, 2024</Typography>
                                <Box sx={{ height: '50px', mt: 7 }}>
                                    {
                                        isLoading && <LoadingWave/>
                                    }
                                    {
                                        Boolean(!isLoading & prediction.result) && <Typography variant="h1">{prediction.result} Ks</Typography>
                                    }
                                </Box>
                            </Box>
                        </Grid> 
                    </Grid>
                </ShadowBox>
            </Grid>
        </Grid>
    )
}