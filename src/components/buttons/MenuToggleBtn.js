import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeSetting } from "../../features";
import React from "react";

export default function MenuToggleBtn() {
    const { toggleNavDrawer } = useThemeSetting();
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleNavDrawer}
        >
            <MenuIcon/>
        </IconButton>
    )
}