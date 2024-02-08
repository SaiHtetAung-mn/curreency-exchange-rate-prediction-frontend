import { Button, CircularProgress, Typography } from "@mui/material";
import React from "react";

/**
 * @param {Object} props 
 * @param {Boolean} props.isLoading
 * @param {Boolean} props.fullWidth
 * @returns 
 */
export default function LoadingButton(props) {
    const { isLoading=false, fullWidth=false, children, onClick } = props;

    return (
        <Button variant="contained" sx={{ bgcolor: "primary" }} fullWidth={fullWidth} disabled={isLoading} onClick={onClick}>
            <CircularProgress size={20} color="secondary" sx={{ visibility: isLoading ? 'visible' : 'hidden' }}/> 
            <Typography variant="button" sx={{ ml: 2, fontWeight: 600 }}>{children}</Typography>
        </Button>
    )
}