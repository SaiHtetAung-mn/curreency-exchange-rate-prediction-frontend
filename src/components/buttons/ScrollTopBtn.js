import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTopButton() {
    const [isScrollDown, setScrollDown] = React.useState(false);

    function toggleButton() {
        const verticalPosition = window.scrollY;
        const shouldShow = window.scrollY > 200;

        setScrollDown(shouldShow);
    }

    function toTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    React.useEffect(() => {
        window.addEventListener('scroll', toggleButton);

        return toggleButton;
    }, []);

    return (
        <Box sx={{ position: 'fixed', bottom: 20, right: 25, zIndex: 5, opacity: isScrollDown ? 1 : 0 }}>
            <Fab size="small" color="primary" onClick={toTop} sx={{ transition: 'opacity .4s' }}>
                <UpIcon/>
            </Fab>
        </Box>
    )
}