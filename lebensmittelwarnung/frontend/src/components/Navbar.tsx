import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';

const pages = ['Usage', 'API Documentation'];

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
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
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block', 
                    fontFamily: 'monospace',
                    ':hover': {
                        bgcolor: '#383838'
                    }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;