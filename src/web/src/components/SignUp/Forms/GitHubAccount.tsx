import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// import PostAvatar from '../Posts/PostAvatar';

import formModels from '../FormSchema/FormModel';
import { TextInput } from '../FormComponents';

const { githubUserName } = formModels;

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
      gridTemplateAreas: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'start',
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
    subtitlePage: {
      fontSize: '1.1em',
      lineHeight: '1.8em',
    },
    infoContainer: {
      display: 'grid',
      gridTemplateColumns: '65% 35%',
      gridGap: '1%',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      width: '90%',
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
      },
    },
    inputsContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '80% 20%',
      '& .MuiFormHelperText-root': {
        fontSize: '0.9em',
        color: 'black',
      },
      '& .MuiFormLabel-root': {
        color: 'black',
      },
    },
    button: {
      height: '35px',
      width: '50%',
      alignSelf: 'center',
      fontSize: '0.8em',
      background: '#121D59',
      color: '#A0D1FB',
      marginLeft: '5%',
      '&:hover': {
        color: 'black',
        border: '1px solid #121D59',
      },
    },
    avatarPreview: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      justifySelf: 'end',
      padding: '6%',
      border: '1px solid rgba(71, 71, 71, 0.5)',
      borderRadius: '5px',
      [theme.breakpoints.down(600)]: {
        justifySelf: 'center',
        padding: '3%',
        marginTop: '5%',
      },
    },
    avatarTitle: {
      fontSize: '1.2em',
    },
    username: {
      fontSize: '1.1em',
    },
    text: {
      fontSize: '0.9em',
      alignSelf: 'end',
      color: '#474747',
    },
  })
);

const GitHubAccount = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.titlePage}>GitHub Account</h1>
        <h2 className={classes.subtitlePage}>
          Please provide your GitHub username and preview you avatar image
        </h2>
        <div className={classes.infoContainer}>
          <div className={classes.inputsContainer}>
            <TextInput label={githubUserName.label} name={githubUserName.name} />
            <Button className={classes.button}>Validate Git</Button>
          </div>
          {/* <div className={classes.avatarPreview}>
            <h1 className={classes.avatarTitle}>Avatar Preview</h1>
            <PostAvatar name={userInfo.displayName} blog="test" />
            <h2 className={classes.username}>{userInfo.displayName}</h2>
          </div> */}
        </div>
        {/* <FormControl required component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreement}
                  name="githubOwnership"
                />
              }
              label={
                <h1 className={classes.formControlLabel}>
                  I declare that I’m the owner and the maintainer of this GitHub account
                </h1>
              }
            />
          </FormGroup>
        </FormControl> */}
      </div>
    </div>
  );
};

export default GitHubAccount;
