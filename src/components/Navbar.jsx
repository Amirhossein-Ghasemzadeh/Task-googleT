import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import AppMenu from './AppsMenu';
import UserInfo from './UserInfo';

const Navbar = ({ openToggleDrawer }) => {
  return (
    <AppBar position='static' sx={{ background: 'white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex', bgcolor: 'white' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              sx={{
                p: 1,
                mr: 2,
              }}
              onClick={openToggleDrawer}
            >
              <MenuIcon
                sx={{
                  color: 'gray',
                }}
              />
            </IconButton>
            <Typography
              variant='h6'
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'orange',
              }}
            >
              Google Translate
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 0 }}>
            {/* --- AppsMenu component --- */}
            <AppMenu />
            {/* --- UserInfo component --- */}
            <UserInfo />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
