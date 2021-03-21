import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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

// type signUpFields = {
//   fields: Function;
//   setFields: Function;
// };

const GetGitHub = () => {
  const classes = useStyles();
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
        </div>
      </div>
    </>
  );
};

export default GetGitHub;
