import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SwapHorizSharpIcon from '@mui/icons-material/SwapHorizSharp';

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    borderRadius: '15px',
  },
  langContainer: {
    display: 'flex',
    background: 'gray',
    height: '48px',
    borderRadiusLeft: '25px',
  },
  header: {
    '& .MuiBox-root ': {
      // borderRadiusTopLeftL: '15px',
    },
  },
  inputBorder: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
      outline: 'none',
    },
  },
  textArea: {
    padding: '50px',
    fontSize: '18px',
    color: 'black',
  },
});

const List = () => {
  const [typed, setTyped] = useState('');
  const classes = useStyles();
  const languageBtns = ['ENGLISH', 'PERSIAN', 'GERMAN'];

  const words = [
    { fa: 'سلام', en: 'hi' },
    { fa: 'خوش آمدید', en: 'welcome' },
    { fa: 'همیشه', en: 'always' },
    { fa: 'پیشنهاد', en: 'suggestion'},
    { fa: 'امروز', en: 'today' },
    { fa: 'شب', en: 'night' },
    { fa: 'شام', en: 'dinner' },
    { fa: 'ناهار', en: 'launch'  },
    { fa: 'جدید', en: 'new' },
  ];

  const inputHandleChange = (e) => {
    setTyped(e.target.value);
    console.log(typed);
  };

  return (
    <Box
      className={classes.container}
      sx={{
        mx: { xs: '0', sm: '0', md: '48px', lg: '48px' },
        boxShadow: 2,
      }}
    >
      <Box
        className={classes.langContainer}
        sx={{
          width: { xs: '100%', lg: '100%' },
          justifyContent: 'center',
          alignItems: 'center',
          borderRadiusTopLeft: '30px',
        }}
      >
        {/*  Top BOx */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          {/* detected Lang button */}
          <Button sx={{ color: 'black', pr: 4, pl: 3 }}>
            DETECTED LANGUAGE
          </Button>
          {/* lang buttons left */}
          {languageBtns.map((btn) => (
            <Button
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, ml: 1 }}
            >
              <Typography variant='body2' color='black'>
                {btn}
              </Typography>
            </Button>
          ))}
          {/* select Lang */}
          <Select
            className={classes.inputBorder}
            value=''
            sx={{ ml: 5, display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            {languageBtns.map((btn) => (
              <MenuItem value={btn}>{btn}</MenuItem>
            ))}
          </Select>
        </Box>

        <IconButton>
          <SwapHorizSharpIcon />
        </IconButton>

        {/* Right Top Box  */}
        <Box
          className={classes.header}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
            pl: 2,
          }}
        >
          {languageBtns.map((btn) => (
            <Button
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, ml: 1 }}
            >
              <Typography variant='body2' color='black'>
                {btn}
              </Typography>
            </Button>
          ))}
          {/* select Lang */}
          <Select
            className={classes.inputBorder}
            value=''
            sx={{ ml: 5, display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            {languageBtns.map((btn) => (
              <MenuItem value={btn}>{btn}</MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      {/* TextArea */}
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
        }}
      >
        <TextareaAutosize
          className={classes.textArea}
          placeholder='Type something ...'
          onChange={inputHandleChange}
          value={typed}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <TextareaAutosize
          className={classes.textArea}
          placeholder='Translation'
          style={{ width: '100%', height: '100%', background: 'blue' }}
          disabled
        ></TextareaAutosize>
      </Box>
    </Box>
  );
};

export default List;
