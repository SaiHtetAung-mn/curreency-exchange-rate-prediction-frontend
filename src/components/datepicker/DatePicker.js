import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import  { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from "react";

export default function DefaultDatePicker({ label , defaultDate=null, onChange }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker label={label} onChange={onChange}/>
        </LocalizationProvider>
    )
}