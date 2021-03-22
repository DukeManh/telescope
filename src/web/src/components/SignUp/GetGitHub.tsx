import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
    container: {
      textAlign: 'center',
      color: theme.palette.text.primary,
      width: '50vw',
      height: '50vh',
      background: 'white',
    },
    inputContainer: {
      width: '50%',
      marginLeft: '28%',
    },
  })
);

const GetGitHub = () => {
  const classes = useStyles();
  const [gitHub, setGitHub] = useState('');

  return (
    <>
      <div className={classes.container}>
        <h1>MESSAGE 2</h1>
        <h2>
          ENTER GITHUB AND VALIDATE.
          <br />
        </h2>
        <div className={classes.inputContainer}>
          <TextField fullWidth id="standard-basic" label="Standard" />
          <p>{gitHub}</p>
        </div>
      </div>
    </>
  );
};

export default GetGitHub;
