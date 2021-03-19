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

const GetBlogRSS = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h1>MESSAGE 3</h1>
        <h2>
          GET BLOG RSS
          <br />
        </h2>
      </div>
    </>
  );
};

export default GetBlogRSS;
