import { List, ListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const hoverStyle = { "&:hover": { opacity: '0.7' } };

export default function Menu() {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <List role="menubar" sx={!smallScreen ? { display: 'flex', flexDirection: 'row' } : {}}>
                <Link to="/"><ListItem role="none" sx={hoverStyle}>Home</ListItem></Link>
                <Link to="/currency-converter"><ListItem sx={hoverStyle}>Converter</ListItem></Link>
                <Link to="/articles"><ListItem sx={hoverStyle}>Articles</ListItem></Link>
            </List>
        </Box>
    )
}