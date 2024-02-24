import React from "react";
import '../../assets/css/LoadingWave.css';
import { Box } from "@mui/material";

export default function LoadingWave({ sx={} }) {
    return (
        <Box sx={{ ...sx, width: "85px", display: 'flex', justifyContent: 'space-around' }}>
            <div class="jump1"></div>
            <div class="jump2"></div>
            <div class="jump3"></div>
            <div class="jump4"></div>
            <div class="jump5"></div>
        </Box>
    )
}