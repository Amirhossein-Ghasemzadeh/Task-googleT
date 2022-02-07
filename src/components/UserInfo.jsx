import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  menu: {
    '& .MuiPaper-root': {
      marginTop: '50px',
      width: '356px',
      textAlign: 'center',
    },
  },
  cameraButton: {
    '&:hover': {
      color: '#2962ff',
    },
  },
  addAccount: {
    border: '1px solid #e8eaed',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: '20px',
  },
});

const UserInfo = () => {
  const classes = useStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, my: '10px' }}>
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
            mt: '10px',
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
        <Typography variant='body2'>amirghasemzadeh17@gmail.com</Typography>
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
        <Box className={classes.addAccount}>
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
    </>
  );
};

export default UserInfo;
