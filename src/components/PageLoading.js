import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import PageLoadingGif from '../assets/gifs/pageLoading.gif';

export default () => {
    return (
        <Box sx={{ bgcolor: "#18191a", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(0.1) brightness(0.8)', flexDirection: 'column', gap: 2 }}>
            <img src={PageLoadingGif} width={50} height={50}/>
            <Typography variant='h6' sx={{ color: 'white' }}>Loading...</Typography>
        </Box>
    )
}