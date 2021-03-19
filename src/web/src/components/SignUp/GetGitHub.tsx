import { createStyles, makeStyles, Theme } from '@material-ui/core';

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
  })
);

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
      </div>
    </>
  );
};

export default GetGitHub;
