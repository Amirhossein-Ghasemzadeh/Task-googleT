import { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import { appIcons } from './data';

const useStyles = makeStyles({
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
});

const AppsMenu = () => {
  const classes = useStyles();
  const [anchorApp, setAnchorApp] = useState(null);

  const handleOpenAppMenu = (event) => {
    setAnchorApp(event.currentTarget);
  };

  const handleCloseAppMenu = () => {
    setAnchorApp(null);
  };

  return (
    <div>
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
        {appIcons.map((app, i) => {
          const { title, icon } = app;
          return (
            <MenuItem
              key={i}
              onClick={handleCloseAppMenu}
              sx={{ color: 'red' }}
            >
              <Box sx={{ display: 'grid', placeItems: 'center' }}>
                {icon}
                <Typography variant='body2'>{title}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default AppsMenu;
