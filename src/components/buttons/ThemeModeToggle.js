import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { WbSunny, ModeNight } from "@mui/icons-material";
import { useThemeSetting } from "../../features";

const ThemeModeToggleBtn = () => {
    const { themeMode, toggleThemeMode } = useThemeSetting();
    return (
        <Tooltip title={ themeMode == "light" ? "Dark" : "Light" }>
            <IconButton color="inherit" onClick={ toggleThemeMode }>
                {
                    themeMode == "light" ? <WbSunny/> : <ModeNight/>
                }
            </IconButton>
        </Tooltip>
    )
}

export default ThemeModeToggleBtn;