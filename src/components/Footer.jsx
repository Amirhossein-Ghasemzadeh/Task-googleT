import { useState } from 'react';
import { Box } from '@mui/system';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { footerIcons } from './data';

const useStyles = makeStyles({
  textActive: {
    color: '#1a73e8',
  },
});

const Footer = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState('');
  const toggleHandler = (event, newToggle) => {
    setToggle(newToggle);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 18,
      }}
    >
      <Box
        sx={{
          width: '400px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {footerIcons.map((btn, i) => {
          const { icon, title, value } = btn;
          return (
            <Box>
              <ToggleButtonGroup
                value={toggle}
                onChange={toggleHandler}
                exclusive
                sx={{
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <ToggleButton
                  key={i}
                  value={value}
                  sx={{ borderRadius: '50%' }}
                  color='primary'
                >
                  {icon}
                </ToggleButton>
                <Typography
                  variant='body2'
                  sx={{ mt: 1 }}
                  className={toggle === value ? `${classes.textActive} ` : ''}
                >
                  {title}
                </Typography>
              </ToggleButtonGroup>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Footer;
