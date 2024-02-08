import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LineChart } from "@mui/x-charts";
import React from "react";
import ShadowBox from "../components/box/ShadowBox";

export default function Home() {
    return (
        <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5" sx={{ mb: 4 }}>Popular rates</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={2}>
                        <Box sx={{ p: 4, borderRadius: 1 }} bgcolor="background.gray">
                            <Box sx={{ display: 'flex', gap: 5 }}>
                                <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" style={{ width: 30, height: 30, borderRadius: '100%', objectFit: 'cover' }}/>
                                <div>
                                    <Typography variant="subtitle2">USD</Typography>
                                    <Typography variant="h6">3500 Ks</Typography>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={2}>
                        <Box sx={{ p: 4, borderRadius: 1 }} bgcolor="background.gray">
                            <Box sx={{ display: 'flex', gap: 5 }}>
                                <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg" style={{ width: 30, height: 30, borderRadius: '100%', objectFit: 'cover' }}/>
                                <div>
                                    <Typography variant="subtitle2">EUR</Typography>
                                    <Typography variant="h6">3860 Ks</Typography>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={2}>
                        <Box sx={{ p: 4, borderRadius: 1 }} bgcolor="background.gray">
                            <Box sx={{ display: 'flex', gap: 5 }}>
                                <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" style={{ width: 30, height: 30, borderRadius: '100%', objectFit: 'cover' }}/>
                                <div>
                                    <Typography variant="subtitle2">JPY</Typography>
                                    <Typography variant="h6">20 Ks</Typography>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={2}>
                        <Box sx={{ p: 4, borderRadius: 1 }} bgcolor="background.gray">
                            <Box sx={{ display: 'flex', gap: 5 }}>
                                <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg" style={{ width: 30, height: 30, borderRadius: '100%', objectFit: 'cover' }}/>
                                <div>
                                    <Typography variant="subtitle2">THB</Typography>
                                    <Typography variant="h6">30 Ks</Typography>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ShadowBox>
                    <LineChart
                        xAxis={[{ data: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'], scaleType: 'point' }]}
                        series={[{ data: [2500, 2100, 3100, 2900, 3000, 2800, 2700], showMark: false, curve: "catmullRom", color: "#23CE6B" }]}
                        height={300}
                    />
                </ShadowBox>
            </Grid>
        </Grid>
    )
}