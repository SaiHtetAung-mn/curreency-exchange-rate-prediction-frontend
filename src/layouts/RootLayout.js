import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system"
import TopNavigation from "../components/navigation/TopNavigation";
import { Outlet } from "react-router-dom";
import ScrollTopButton from "../components/buttons/ScrollTopBtn";
import CopyrightIcon from '@mui/icons-material/Copyright';

const RootLayout = () => {
    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            <ScrollTopButton/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TopNavigation/>
                <Box sx={{ padding: '30px 0', flexGrow: 100 }}>
                    <Container maxWidth="lg">
                        <Outlet/>
                    </Container>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: 5, gap: 1 }}>
                    <CopyrightIcon/> 
                    <Typography variant="subtitle1">Copyright 2024. All rights reserved.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RootLayout;