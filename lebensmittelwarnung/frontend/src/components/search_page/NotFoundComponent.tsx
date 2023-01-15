import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NotFoundComponent() {
    return (
        <Box sx={{ height: '100%', width: '100%', textAlign: "center", marginTop: "70px"}}>
            <img style={{ height: "300px", borderRadius: "15%"}} src='../../static/frontend/giphy.gif'></img>
            
            <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "40px", fontFamily: 'monospace', fontWeight: 'bold' }}>
                Oops... I didn't find anything...
            </Typography>
        </Box>
    )
}

export default NotFoundComponent;