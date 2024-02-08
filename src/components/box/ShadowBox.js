import { Box } from "@mui/system";
import React from "react";

export default function ShadowBox({ children }) {
    return (
        <Box sx={{ p: 5, boxShadow: "0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);", width: '100%' }}>
            { children }
        </Box>
    )
}