import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SwapHorizSharpIcon from '@mui/icons-material/SwapHorizSharp';

import {
  Box,
  IconButton,
  MenuItem,
  Select,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  valueToPercent,
} from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    borderRadius: '10px',
  },
  langContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  inputBorder: {
    borderColor: 'blue',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
      outline: 'none',
    },
    '& .MuiSelect-select': {
      padding: 0,
    },
  },
  textArea: {
    width: '170px',
    padding: '50px',
    fontSize: '18px',
    borderBottomRightRadius: '10px',
  },
  textActive: {
    borderBottom: '2px solid #1a73e8',
    color: '#1a73e8',
  },
});
const words = [
  { fa: 'سلام', en: 'hi' },
  { fa: 'خوش آمدید', en: 'welcome' },
  { fa: 'همیشه', en: 'always' },
  { fa: 'پیشنهاد', en: 'suggestion' },
  { fa: 'امروز', en: 'today' },
  { fa: 'شب', en: 'night' },
  { fa: 'شام', en: 'dinner' },
  { fa: 'ناهار', en: 'launch' },
  { fa: 'جدید', en: 'new' },
  { fa: 'کار', en: 'work' },
];
const trnsLang = {
  en: 'fa',
  fa: 'en',
};
const List = () => {
  const classes = useStyles();
  const languageBtns = ['ENGLISH', 'PERSIAN'];
  const [inputLang, setInputLang] = useState('english');
  const [outputLang, setOutputLang] = useState('persian');
  const [selected, setSelected] = useState(false);
  const [selectOutputLang, setSelectOutputLang] = useState('');
  const [selectInputLang, setSelectInputLang] = useState('');
  const [typed, setTyped] = useState('');

  const [trns, setTrns] = useState([]);
  const [fromLang, setFromLang] = useState('en');


  // lang btns handler
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

    outputLang === 'english'
      ? setOutputLang('persian')
      : setOutputLang('english');

    setFromLang(trnsLang[fromLang]);
    let target = {
      id: trnsLang[fromLang],
      value: trns,
    };
    inputHandleChange({ target });
  };

  const inputHandleChange = (e) => {
    setTrns('');
    let { id, value } = e.target;
    setTyped(value);
    let transTo = trnsLang[id];
    let transList = words?.find((word) => word[id] == value)?.[transTo];
    if (transList) setTrns(transList);
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
        }}
      >
        {/*  Top Left Lang Box */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}
        >
          {/* detected Lang button */}
          <ToggleButton
            value='detectedLang'
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            color='primary'
            sx={{
              pr: 4,
              pl: 3,
              color: '#3c4043',
              borderColor: 'transparent',
            }}
          >
            <Typography className={selected ? `${classes.textActive} ` : ''}>
              DETECTED LANGUAGE
            </Typography>
          </ToggleButton>

          {/* input Btns  */}
          <ToggleButtonGroup
            value={inputLang}
            exclusive
            onChange={inputLangHandler}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              ml: 1,
              '&:hover': { bgcolor: '#e7e3e367' },
            }}
          >
            <ToggleButton
              value='persian'
              onClick={() => setFromLang(trnsLang[fromLang])}
            >
              <Typography
                className={
                  inputLang === 'persian' ? `${classes.textActive}` : ''
                }
              >
                PERSIAN
              </Typography>
            </ToggleButton>

            <ToggleButton
              value='english'
              onClick={() => setFromLang(trnsLang[fromLang])}
            >
              <Typography
                className={
                  inputLang === 'english' ? `${classes.textActive}` : ''
                }
              >
                ENGLISH
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>

          {/* select Lang */}
          <Select
            className={classes.inputBorder}
            value={selectInputLang}
            onChange={selectInputLangHandler}
            sx={{
              ml: 5,
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
          >
            {languageBtns.map((btn, i) => (
              <MenuItem key={i} value={btn}>
                {btn}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <IconButton onClick={() => switchHandler()}>
          <SwapHorizSharpIcon />
        </IconButton>

        {/* output lang Box  */}
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
              display: { xs: 'none', sm: 'none', md: 'flex' },
              ml: 1,
              '&:hover': { bgcolor: '#e7e3e367' },
            }}
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
          {/* select Lang */}
          <Select
            className={classes.inputBorder}
            value={selectOutputLang}
            onChange={selectOutputLangHandler}
            sx={{ ml: 5, display: { xs: 'none', sm: 'none', md: 'flex' } }}
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
      {/* TextArea */}
      <Box
        sx={{
          display: 'flex',
          height: { xs: '250px', md: '170px' },
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
        }}
      >
        <TextareaAutosize
          className={classes.textArea}
          placeholder='Type something ...'
          onChange={inputHandleChange}
          value={typed}
          id={fromLang}
          style={{
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: '10px',
          }}
        >
          {typed}
        </TextareaAutosize>
        <TextareaAutosize
          className={classes.textArea}
          placeholder='Translation'
          style={{ width: '100%', height: '100%' }}
          disabled
          id={trnsLang[fromLang]}
          value={trns}
        />
      </Box>
    </Box>
  );
};

export default List;
