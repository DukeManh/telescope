import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Spinner from '../Spinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
    container: {
      display: 'grid',
      gridTemplateAreas: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      color: theme.palette.text.primary,
      width: '100%',
      height: '50vh',
    },
  })
);

const Review = () => {
  const classes = useStyles();
  const loading = false;
  return (
    <div className={classes.container}>
      {loading ? (
        <>
          <h1>Processing your information.</h1>
          <Spinner />
        </>
      ) : (
        <h2>We will show all information here for reviewing</h2>
      )}
    </div>
  );
};

export default Review;
