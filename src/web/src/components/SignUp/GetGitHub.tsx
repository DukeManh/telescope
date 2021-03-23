import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import PostAvatar from '../Posts/PostAvatar';

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
      backgroundColor: 'yellow',
    },
    infoContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
    },
    inputsContainer: {
      width: '100%',
    },
    avatarPreview: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
    },
  })
);

const GetGitHub = () => {
  const classes = useStyles();
  const [gitHub, setGitHub] = useState('');
  const [displayName, setDisplayName] = useState('');

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>GitHub and Display Name</h1>
        <h2>Enter your GitHub user name and your display name.</h2>
        <h2>
          Your display name will be your name on Telescope System.
          <br /> It will be displayed in all of your posts and interactions with other users inside
          Telescope’s ecosystem.{' '}
        </h2>
        <div className={classes.infoContainer}>
          <div className={classes.inputsContainer}>
            <TextField fullWidth id="standard-basic" label="GitHub Username" />
            <TextField fullWidth id="standard-basic" label="Display Name" />
          </div>
          <div className={classes.avatarPreview}>
            <h1>Avatar Preview</h1>
            <PostAvatar name={displayName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetGitHub;
