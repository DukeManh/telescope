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

const WelcomeMessage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h1>MESSAGE 1</h1>
        <h2>
          YOU NEED A GITHUB AND A BLOG. AND SO ON.
          <br />
        </h2>
      </div>
    </>
  );
};

export default WelcomeMessage;
