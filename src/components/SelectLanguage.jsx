import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import SwapHorizSharpIcon from '@mui/icons-material/SwapHorizSharp';

import { changeLanguage } from './data';

const useStyles = makeStyles({
  langContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  inputBorder: {
    borderColor: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
      outline: 'none',
    },
    '& .MuiSelect-select': {
      padding: '0px',
      border: 'none',
    },
  },
  textActive: {
    borderBottom: '2px solid #1a73e8',
    color: '#1a73e8',
  },
  toggleLangBtn: {
    '& .MuiButtonBase-root': {
      borderColor: 'transparent',
    },
  },
});

const SelectLanguage = ({
  fromLang,
  setFromLang,
  translate,
  selected,
  setSelected,
  inputHandleChange,
}) => {
  const classes = useStyles();
  const languageBtns = ['ENGLISH', 'PERSIAN', 'Gerrman'];
  const [selectOutputLang, setSelectOutputLang] = useState('');
  const [selectInputLang, setSelectInputLang] = useState('');
  const [inputLang, setInputLang] = useState('english');

  const [outputLang, setOutputLang] = useState('persian');

  const inputLangHandler = (event, newLang) => {
    setInputLang(newLang);
  };

  const outputLangHandler = (event, newLang) => {
    setOutputLang(newLang);
  };

  // select drop down handler
  const selectInputLangHandler = (e) => {
    setSelectInputLang(e.target.value);
  };

  const selectOutputLangHandler = (e) => {
    setSelectOutputLang(e.target.value);
  };

  // switch handler
  const switchHandler = () => {
    inputLang === 'persian' ? setInputLang('english') : setInputLang('persian');

    outputLang === 'persian'
      ? setOutputLang('english')
      : setOutputLang('persian');

    setFromLang(changeLanguage[fromLang]);
    let target = {
      id: changeLanguage[fromLang],
      value: translate,
    };
    inputHandleChange({ target });
  };

  return (
    <Box
      className={classes.langContainer}
      sx={{
        width: { xs: '100%', lg: '100%' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        {/* --- detected Lang button --- */}
        <ToggleButton
          value='detectedLang'
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            pr: 4,
            pl: 3,
            color: '#3c4043',
            borderColor: 'transparent',
            '&:hover ': {
              bgcolor: '#a3a2a222',
            },
          }}
        >
          <Typography
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            className={selected ? `${classes.textActive} ` : ''}
          >
            DETECTED LANGUAGE
          </Typography>
        </ToggleButton>
        {/* --- input Btns --- */}
        <ToggleButtonGroup
          value={inputLang}
          exclusive
          onChange={inputLangHandler}
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'flex' },
          }}
          className={classes.toggleLangBtn}
        >
          <ToggleButton
            value='persian'
            onClick={() => {
              setFromLang(changeLanguage[fromLang]);
              setOutputLang('english');
              switchHandler();
            }}
          >
            <Typography
              className={inputLang === 'persian' ? `${classes.textActive}` : ''}
            >
              PERSIAN
            </Typography>
          </ToggleButton>

          <ToggleButton
            value='english'
            onClick={() => {
              setFromLang(changeLanguage[fromLang]);
              setOutputLang('persian');
              switchHandler();
            }}
          >
            <Typography
              className={inputLang === 'english' ? `${classes.textActive}` : ''}
            >
              ENGLISH
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        {/* --- select input Lang --- */}
        <Select
          className={classes.inputBorder}
          value={selectInputLang}
          onChange={selectInputLangHandler}
          sx={{ ml: 5, pl: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}
          style={{ color: '#433c3c' }}
        >
          {languageBtns.map((btn, i) => (
            <MenuItem key={i} value={btn}>
              {btn}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {/* --- switch button --- */}
      <IconButton onClick={() => switchHandler()}>
        <SwapHorizSharpIcon />
      </IconButton>
      {/* --- output lang Btns --- */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          pl: 2,
        }}
      >
        <ToggleButtonGroup
          value={outputLang}
          exclusive
          onChange={outputLangHandler}
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'flex' },
            ml: 1,
          }}
          className={classes.toggleLangBtn}
        >
          <ToggleButton value='persian'>
            <Typography
              className={
                outputLang === 'persian' ? `${classes.textActive}` : ''
              }
            >
              PERSIAN
            </Typography>
          </ToggleButton>

          <ToggleButton value='english'>
            <Typography
              className={
                outputLang === 'english' ? `${classes.textActive}` : ''
              }
            >
              ENGLISH
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        {/* --- select output Lang --- */}
        <Select
          className={classes.inputBorder}
          value={selectOutputLang}
          onChange={selectOutputLangHandler}
          sx={{ ml: 5, pl: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}
          style={{ color: '#433c3c' }}
        >
          {languageBtns.map((btn, i) => (
            <MenuItem key={i} value={btn}>
              {btn}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default SelectLanguage;
