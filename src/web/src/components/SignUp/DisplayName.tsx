import { createStyles, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useAuth from '../../hooks/use-auth';

const useStyles = makeStyles((theme) =>
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
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      minHeight: '100%',
      [theme.breakpoints.down(600)]: {
        width: '95%',
        marginLeft: '2.5%',
      },
    },
    helloMessage: {
      fontSize: '0.8em',
    },
    userInfo: {
      color: '#292929',
      margin: '0',
      padding: '.5%',
      width: '90%',
      height: '80%',
      fontSize: '0.8em',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #C5EB98',
      background: 'rgba(197, 235, 152, 0.2)',
      borderRadius: '5px',
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
      },
    },
    userInfoLabel: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      [theme.breakpoints.down(600)]: {
        gridColumnStart: '1',
        gridColumnEnd: '2',
      },
    },
    userInfoType: {
      color: '#525252',
    },
    inputContainer: {
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'center',
      width: '90%',
      gridTemplateColumns: '80% 20%',
      '& .MuiFormHelperText-root': {
        fontSize: '0.9em',
        color: 'black',
      },
      '& .MuiFormLabel-root': {
        color: 'black',
      },
      '& .MuiInput-root': {
        borderBottom: '1px solid black',
      },
    },
    displayNameTitle: {
      fontSize: '0.85em',
    },
    formInput: {
      fontSize: '1.1em',
      color: 'black',
    },
    formInputLabel: {
      fontSize: '1.4em',
      color: 'black',
    },
    button: {
      fontSize: '0.8em',
      height: '35px',
      width: '50%',
      background: '#121D59',
      color: '#A0D1FB',
      marginLeft: '5%',
      '&:hover': {
        color: 'black',
        border: '1px solid #121D59',
      },
    },
    displayNameInfo: {
      textAlign: 'start',
      gridColumnStart: '1',
      gridColumnEnd: '3',
      fontSize: '1em',
    },
    text: {
      fontSize: '0.9em',
      alignSelf: 'end',
      color: '#474747',
    },
  })
);

const DisplayName = () => {
  const classes = useStyles();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.helloMessage}>
          <h1>Hello {user.name}</h1>
        </div>
        <div className={classes.userInfo}>
          <h2 className={classes.userInfoLabel}>
            The following information is what we already have:
          </h2>
          <h2>
            <b>Full Name: </b>
            <span className={classes.userInfoType}>{user.name}</span>
          </h2>
          <h2>
            <b>Email: </b>
            <span className={classes.userInfoType}>{user.email}</span>
          </h2>
        </div>
        <div className={classes.displayNameTitle}>
          <h2>Choose your Display Name:</h2>
        </div>
        <div className={classes.inputContainer}>
          <TextField
            fullWidth
            disabled
            id="email"
            placeholder={user.email}
            name="email"
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.formInputLabel,
              },
            }}
          />
        </div>
        <div className={classes.inputContainer}>
          <TextField
            fullWidth
            id="displayName"
            label="Display Name (optional)"
            helperText="Will be displayed in all your interactions within Telescope"
            name="displayName"
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.formInputLabel,
              },
            }}
          />
          <Button className={classes.button}>Validate Name</Button>
        </div>
        <div className={classes.inputContainer}>
          <TextField
            fullWidth
            required
            label="First name"
            id="firstName"
            name="Fist Name"
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.formInputLabel,
              },
            }}
          />
        </div>
        <div className={classes.inputContainer}>
          <TextField
            fullWidth
            label="Last name"
            required
            id="lastName"
            name="Last Name"
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.formInputLabel,
              },
            }}
          />
        </div>
        <div className={classes.text}>
          <h3>Click NEXT to continue:</h3>
        </div>
      </div>
    </div>
  );
};

export default DisplayName;
