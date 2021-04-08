import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Spinner from '../../Spinner';
// import PostAvatar from '../Posts/PostAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      width: '100%',
      position: 'relative',
      minHeight: '100%',
    },
    container: {
      display: 'grid',
      gridTemplateRows: '10% auto 10%',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      minHeight: '100%',
      [theme.breakpoints.down(600)]: {
        width: '90%',
        marginLeft: '5%',
      },
    },
    titlePage: {
      fontSize: '1.5em',
    },
    contentContainer: {
      width: '90%',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'auto auto',
      alignSelf: 'start',
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
        height: '100%',
        alignItems: 'center',
      },
    },
    avatar: {
      height: '110px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      padding: '6%',
      fontSize: '0.7em',
      [theme.breakpoints.down(600)]: {
        height: '85px',
        padding: '0',
      },
    },
    gitHubInfo: {
      marginTop: '8%',
      [theme.breakpoints.down(600)]: {
        marginTop: '0',
        textAlign: 'start',
      },
    },
    senecaBlogInfo: {
      textAlign: 'start',
    },
    blogUrl: {
      textAlign: 'start',
    },
    titleRss: {
      textAlign: 'start',
    },
    blogRss: {
      textAlign: 'start',
      border: '1px solid #474747',
      width: '80%',
      padding: '1%',
      minHeight: '60px',
      maxHeight: '60px',
      overflowY: 'auto',
      [theme.breakpoints.down(600)]: {
        width: '90%',
      },
    },
    text: {
      fontSize: '0.9em',
      alignSelf: 'end',
      color: '#474747',
    },
  })
);

const Review = () => {
  const classes = useStyles();
  const loading = false;
  const rssExample = ['www.test1.feed.com', 'www.test2.feed.com', 'www.test3.feed.com'];

  return (
    <div className={classes.root}>
      {loading ? (
        <>
          <h1>Processing your information.</h1>
          <Spinner />
        </>
      ) : (
        <div className={classes.container}>
          <h1 className={classes.titlePage}>Review your Information</h1>
          <div className={classes.contentContainer}>
            {/* <div className={classes.avatar}>
              <PostAvatar name={userInfo.displayName} blog="test" />
              <h2>
                Display Name:
                <p>{userInfo.displayName}</p>
              </h2>
            </div> */}
            <div className={classes.senecaBlogInfo}>
              <h3>From seneca:</h3>
              <p>Full Name: test name example</p>
              <p>Email : test@example.com</p>
              <h3>Blog URL:</h3>
              <p>exampleBlog.com</p>
            </div>
            <div>
              <div className={classes.gitHubInfo}>
                <h3>GitHub Account:</h3>
                <p>GitHubName</p>
              </div>
            </div>
            <div>
              <h3 className={classes.titleRss}>Blog RSS:</h3>
              <div className={classes.blogRss}>
                <div>
                  {rssExample.map((rss) => (
                    <p key={rss}>{rss}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
