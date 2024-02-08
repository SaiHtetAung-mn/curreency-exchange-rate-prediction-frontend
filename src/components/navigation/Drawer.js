import { Drawer, IconButton } from "@mui/material";
import React from "react";
import { useThemeSetting } from "../../features";
import { Box } from "@mui/system";
import Menu from "./Menu";

export default function NavDrawer() {
    const { isDrawerOpen, toggleNavDrawer } = useThemeSetting();
    return (
        <div>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleNavDrawer}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleNavDrawer}
                >
                   <Menu/>
                </Box>
            </Drawer>
        </div>
    )
}