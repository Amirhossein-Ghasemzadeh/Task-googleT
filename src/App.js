import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TextField from './components/TextField';
import SelectLanguage from './components/SelectLanguage';
import { words } from './components/data';
import { changeLanguage } from './components/data';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import Footer from './components/Footer';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    borderRadius: '10px',
  },
});

function App() {
  const classes = useStyles();
  const [sidebarValue, setSidebarValue] = useState(false);
  const [typed, setTyped] = useState('');
  const [translate, setTranslate] = useState([]);
  const [fromLang, setFromLang] = useState('en');
  const [selected, setSelected] = useState(false);

  // sidebar
  const openToggleDrawer = () => {
    setSidebarValue(true);
  };

  const closeToggleDrawer = () => {
    setSidebarValue(false);
  };

  const inputHandleChange = (e) => {
    setTranslate('');
    let { id, value } = e.target;
    setTyped(value);
    let transTo = changeLanguage[id];
    let transList = words?.find((word) => word[id] == value)?.[transTo];
    if (transList) setTranslate(transList);
  };

  return (
    <div>
      <Navbar openToggleDrawer={openToggleDrawer} />
      <Sidebar
        sidebarValue={sidebarValue}
        closeToggleDrawer={closeToggleDrawer}
      />
      <Box
        className={classes.container}
        sx={{
          mx: { xs: '0', sm: '0', md: '48px', lg: '48px' },
          boxShadow: 2,
        }}
      >
        <SelectLanguage
          typed={typed}
          setTyped={setTyped}
          fromLang={fromLang}
          setFromLang={setFromLang}
          translate={translate}
          setTranslate={setTranslate}
          selected={selected}
          setSelected={setSelected}
          inputHandleChange={inputHandleChange}
        />
        <TextField
          typed={typed}
          fromLang={fromLang}
          translate={translate}
          inputHandleChange={inputHandleChange}
        />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
