import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const Sidebar = ({ sidebarValue, closeToggleDrawer }) => {
  const btns = ['Privacy policy', 'Guides', 'send feedback', 'Google info'];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={closeToggleDrawer}
      onKeyDown={closeToggleDrawer}
    >
      <Typography variant='h6' sx={{ mt: 2, ml: 2, mb: 3, color: 'orange' }}>
        Google Translate
      </Typography>
      <Button
        sx={{
          width: '100%',
          height: '48px',
          '&:hover': { bgcolor: '#e7e3e367' },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            mr: '60px',
            textDecoration: 'underline',
            color: 'black',
            textTransform: 'capitalize',
          }}
        >
          Google Translate Info
        </Typography>
      </Button>
      <Divider sx={{ mt: 3 }} />
      <Box sx={{ mt: 1, display: 'grid', textAlign: 'left' }}>
        {btns.map((btn, i) => (
          <Button
            key={i}
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
              height: '48px',
              '&:hover': { bgcolor: '#e7e3e367' },
            }}
          >
            <Typography
              variant='body2'
              sx={{
                ml: 3,
                textTransform: 'capitalize',
                color: 'black',
              }}
            >
              {btn}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer anchor='left' open={sidebarValue} onClose={closeToggleDrawer}>
        {list()}
      </Drawer>
    </>
  );
};

export default Sidebar;
