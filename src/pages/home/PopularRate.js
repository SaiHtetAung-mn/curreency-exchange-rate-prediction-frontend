import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMetaData } from "../../features";

const currencyToShow = ["USD", "EUR", "JPY", "THB"];

export default function PopularRate() {
    const { fetchLatestCurrencyRate, currencies, latestCurrencyRate } = useMetaData();

    React.useEffect(() => {
        fetchLatestCurrencyRate();
    }, []);
    
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                <Typography variant="h4" >Popular rates</Typography>
                <Typography variant="caption" color="gray">Feb 8, 2024 06:30 AM</Typography>
            </Box>
            <Grid container spacing={3}>
                {
                    currencyToShow.map(curCode => {
                        const currency = currencies.find(cur => cur.code == curCode);
                        const curRate = latestCurrencyRate.data.find(r => r.code == curCode);
                        return (
                            <Grid item xs={6} sm={6} md={4} lg={2}>
                            {
                                (currencies.length == 0 || latestCurrencyRate.isLoading) ? 
                                <Skeleton height={60} variant="rectangular"/> :
                                <Box sx={{ p: 4, borderRadius: 1 }} bgcolor="background.gray">
                                    <Box sx={{ display: 'flex', gap: 5 }}>
                                        <img src={currency.flagImgUrl} style={{ width: 30, height: 30, borderRadius: '100%', objectFit: 'cover' }}/>
                                        <div>
                                            <Typography variant="caption" sx={{margin: 0}}>{currency.name}</Typography>
                                            <Typography variant="h6" sx={{margin: 0}}>{curRate?.rate || '-'}</Typography>
                                        </div>
                                    </Box>
                                </Box>
                            }
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}