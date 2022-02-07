import SelectLanguage from './SelectLanguage';
import TextField from './TextField';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    borderRadius: '10px',
  },
});

const List = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      sx={{
        mx: { xs: '0', sm: '0', md: '48px', lg: '48px' },
        boxShadow: 2,
      }}
    >
      <SelectLanguage />
      <TextField />
    </Box>
  );
};

export default List;
