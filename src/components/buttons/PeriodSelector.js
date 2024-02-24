import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function PeriodSelector({ onChange }) {
    const [period, setPeriod] = React.useState(5);

    function onPeriodChange(val) {
        setPeriod(val);
        onChange(val);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderRadius: 1, bgcolor: 'background.gray', width: 'fit-content', padding: '5px' }}>
            <Button sx={{ padding: '10px 3px', color: period == 5 ? 'primary' : 'gray', borderRadius: 1 }} variant={period == 5 ? "contained" : "text"} disableTouchRipple={period == 5} onClick={() => onPeriodChange(5)}>5D</Button>
            <Button sx={{ padding: '10px 3px', color: period == 10 ? 'primary' : 'gray', borderRadius: 1 }} variant={period == 10 ? "contained" : "text"} disableTouchRipple={period == 10} onClick={() => onPeriodChange(10)}>10D</Button>
            <Button sx={{ padding: '10px 3px', color: period == 30 ? 'primary' : 'gray', borderRadius: 1 }} variant={period == 30 ? "contained" : "text"} disableTouchRipple={period == 30} onClick={() => onPeriodChange(30)}>30D</Button>
        </Box>
    )
}