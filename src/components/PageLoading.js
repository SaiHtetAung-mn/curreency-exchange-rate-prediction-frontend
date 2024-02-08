import { Box } from '@mui/system';
import { Typography } from '@mui/material';


export default () => {
    return (
        <Box sx={{ width: '100vh', height: '100vh', display: 'flex', alignItems: 'centere', justifyContent: 'center' }}>
            <Typography color="primary">Loading...</Typography>
        </Box>
    )
}