import { AppBar, Container, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import ThemeModeToggleBtn from "../buttons/ThemeModeToggle";
import NavDrawer from "./Drawer";
import MenuToggleBtn from "../buttons/MenuToggleBtn";
import Menu from "./Menu";

const TopNavigation = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box flexGrow={1}>
            <NavDrawer/>
            <AppBar position="sticky" elevation={0} color="default" sx={{ bgcolor: 'background.default', margin: 0 }}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "0 !important" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                            { smallScreen && <MenuToggleBtn/> }
                            <Typography variant="h6" color="inherit" sx={{ color: theme.palette.primary.main }}>
                                CURRENCYHUB
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            { !smallScreen && <Menu/> }
                            <ThemeModeToggleBtn/>   
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default TopNavigation;