import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { LightMode as LightIcon, DarkMode as DarkIcon } from "@mui/icons-material";
import { useThemeSetting } from "../../features";

const ThemeModeToggleBtn = () => {
    const { themeMode, toggleThemeMode } = useThemeSetting();
    return (
        <Tooltip title={ themeMode == "light" ? "Change to Dark Mode" : "Change to Light Mode" }>
            <IconButton color="inherit" onClick={ toggleThemeMode }>
                {
                    themeMode == "light" ? <LightIcon/> : <DarkIcon/>
                }
            </IconButton>
        </Tooltip>
    )
}

export default ThemeModeToggleBtn;