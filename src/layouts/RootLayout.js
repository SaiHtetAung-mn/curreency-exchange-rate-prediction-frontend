import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system"
import TopNavigation from "../components/navigation/TopNavigation";
import { Outlet } from "react-router-dom";
import ScrollTopButton from "../components/buttons/ScrollTopBtn";

const RootLayout = () => {
    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            <ScrollTopButton/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TopNavigation/>
                <Box sx={{ bgcolor: 'background.default', padding: '30px 0', flexGrow: 100 }}>
                    <Container maxWidth="lg">
                        <Outlet/>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default RootLayout;