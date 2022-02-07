import { makeStyles } from '@mui/styles';
import { Box, IconButton, TextareaAutosize } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import { changeLanguage } from './data';

const useStyles = makeStyles({
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

const TextField = ({ inputHandleChange, typed, fromLang, translate }) => {
  const classes = useStyles();
  return (
    <>
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
        />
        <IconButton
          sx={{ position: 'absolute', ml: 1, mt: { xs: 10, sm: 10, md: 15 } }}
        >
          <KeyboardVoiceIcon />
        </IconButton>
        <TextareaAutosize
          className={classes.textArea}
          placeholder='Translation'
          style={{ width: '100%', height: '100%' }}
          disabled
          id={changeLanguage[fromLang]}
          value={translate}
        />
      </Box>
    </>
  );
};

export default TextField;
