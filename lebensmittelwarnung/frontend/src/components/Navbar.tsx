import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import {useNavigate} from 'react-router-dom';

const pages = ['Usage', 'API Documentation'];
function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: "black", height: '10vh' }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="https://lebensmittelwarnung.api.bund.dev/"
                target="_blank"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none !important'
                }}
            >
                Lebensmittelwarnung
            </Typography>

            <Box sx={{ flex: 1 }}/>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                    key='search'
                    sx={{ 
                        my: 2, 
                        color: 'white', 
                        display: 'block', 
                        fontFamily: 'monospace',
                        ':hover': {
                            bgcolor: '#383838'
                        }
                    }}
                    onClick={() => navigate('/')}
                >
                    Search
                </Button>

                <Button
                    key='API Documentation'
                    sx={{ 
                        my: 2, 
                        color: 'white', 
                        display: 'block', 
                        fontFamily: 'monospace',
                        ':hover': {
                            bgcolor: '#383838'
                        }
                    }}
                    onClick={() => navigate('/documentation')}
                >
                    API Documentation
                </Button>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default Navbar;