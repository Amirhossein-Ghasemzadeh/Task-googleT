import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { makeStyles } from '@mui/styles';
import shadows from '@mui/material/styles/shadows';

import AppsIcon from '@mui/icons-material/Apps';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const useStyles = makeStyles({
  menu: {
    '& .MuiPaper-root': {
      marginTop: '50px',
      width: '356px',
      textAlign: 'center',
    },
  },
  menuApps: {
    '& .MuiPaper-root': {
      marginTop: '50px',
      width: '300px',
      height: '250px',
    },
    '& .MuiList-root': {
      display: 'grid',
      placeItems: 'center',
      gridTemplateColumns: 'auto auto auto',
    },
  },
  cameraButton: {
    '&:hover': {
      color: '#2962ff',
    },
  },
  addAcc: {
    border: '1px solid #e8eaed',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: '20px',
  },
});

const Navbar = ({ openToggleDrawer }) => {
  const classes = useStyles();
  const apps = [
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
    <YouTubeIcon sx={{ fontSize: '50px' }} />,
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorApp, setAnchorApp] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenAppMenu = (event) => {
    setAnchorApp(event.currentTarget);
  };

  const handleCloseAppMenu = () => {
    setAnchorApp(null);
  };

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
            >
              <MenuIcon
                onClick={openToggleDrawer}
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
          {/* ------ apss Menu ------ */}
          <Box sx={{ display: 'flex', flexGrow: 0 }}>
            <Tooltip title='Open Apps'>
              <IconButton
                onClick={handleOpenAppMenu}
                sx={{
                  mr: '10px',
                  my: '10px',
                }}
              >
                <AppsIcon
                  sx={{
                    color: 'gray',
                    fontSize: '30px',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              className={classes.menuApps}
              id='menu-appbar'
              anchorEl={anchorApp}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorApp)}
              onClose={handleCloseAppMenu}
            >
              {apps.map((app) => (
                <MenuItem
                  key={app}
                  onClick={handleCloseAppMenu}
                  sx={{ color: 'red' }}
                >
                  <Box sx={{ display: 'grid', placeItems: 'center' }}>
                    {app}
                    <Typography variant='body2'>youtube</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
            {/* ------ user Menu ------ */}
            <Tooltip title='Open settings'>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, my: '10px' }}
              >
                <Avatar alt='Amir Sharp' src={'A'} />
              </IconButton>
            </Tooltip>
            <Menu
              className={classes.menu}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box
                sx={{
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  alt='Amir Gh'
                  src={'A'}
                  sx={{
                    width: '80px',
                    height: '80px',
                  }}
                />
              </Box>
              <IconButton
                sx={{
                  p: 1,
                  '&:hover': { backgroundColor: 'transparent' },
                  ml: '60px',
                  mt: '-50px',
                }}
              >
                <CameraAltIcon
                  alt='camera'
                  src=''
                  sx={{
                    fontSize: '30px',
                    borderRadius: '50%',
                    bgcolor: 'white',
                    p: '4px',
                    boxShadow: 2,
                    position: 'absolute',
                  }}
                  className={classes.cameraButton}
                />
              </IconButton>
              <Typography variant='h6'>Amir Ghasemzadeh</Typography>
              <Typography variant='body2'>
                amirghasemzadeh17@gmail.com
              </Typography>
              <Button
                sx={{
                  color: '#3c4043',
                  textTransform: 'capitalize',
                  borderRadius: '50px',
                  mt: 2,
                  border: '1px solid #ede8e8',
                  '&:hover': { bgcolor: '#e7e3e367' },
                }}
                disableElevation
              >
                Manage your Google account
              </Button>
              <Box className={classes.addAcc}>
                <Button
                  sx={{
                    height: '50px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'start',
                    color: '#3c4043',
                    textTransform: 'capitalize',
                    '&:hover': { bgcolor: '#e7e3e367' },
                  }}
                >
                  <GroupAddIcon sx={{ color: 'gray', ml: '40px' }} />
                  <Typography variant='body1' sx={{ ml: '15px' }}>
                    Add another account
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '70px',
                  borderBottom: '1px solid #e8eaed',
                }}
              >
                <Button
                  sx={{
                    border: '1px solid #ede8e8',
                    color: '#3c4043',
                    textTransform: 'capitalize',
                    '&:hover': { bgcolor: '#e7e3e367' },
                  }}
                >
                  Sign out of all account
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '24px',
                  mt: '10px',
                  textTransform: 'capitalize',
                }}
              >
                <Typography variant='body2'>
                  Privacy Policy | Terms of Service
                </Typography>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
