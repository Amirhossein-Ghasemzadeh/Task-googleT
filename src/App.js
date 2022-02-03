import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import List from './components/List';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
   height: 'auto',
  //  background: 'blue',
  },
});

function App() {
  const classes = useStyles();
  const [sidebarValue, setSidebarValue] = useState(false);
  const openToggleDrawer = () => {
    setSidebarValue(true);
  };
  const closeToggleDrawer = () => {
    setSidebarValue(false);
  };

  return (
    <div className={classes.root}>
      <Navbar openToggleDrawer={openToggleDrawer} />
      <Sidebar
        sidebarValue={sidebarValue}
        closeToggleDrawer={closeToggleDrawer}
      />
      <List />
    </div>
  );
}

export default App;
