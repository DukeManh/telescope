import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import FirstMessage from '../components/SignUp/WelcomeMessage';
import GetGitHub from '../components/SignUp/GetGitHub';
import GetBlogRSS from '../components/SignUp/GetBlogRSS';
import FinalMessage from '../components/SignUp/FinalMessage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0 10vw',
      backgroundColor: theme.palette.background.default,
      width: 'calc(100% - 20vw)',
      display: 'grid',
      justifyItems: 'center',
    },
    stepper: {
      width: '50%',
      height: '150px',
      margin: '5px 0',
    },
    button: {
      padding: '10px',
      margin: '5px 0',
      background: '#DDDBCB',
    },
  })
);

const SignUpPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [userInfo, setUserInfo] = useState({ email: '', name: '' });
  const [userGitHub, setUserGitHub] = useState('');
  const [userRSS, setUserRSS] = useState('');
  const steps = ['Start', 'Get GitHub', 'Get Blog', 'End'];

  const handleNext = () => {
    setActiveStep(activeStep < 3 ? activeStep + 1 : 3);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep > 0 ? activeStep - 1 : 0);
  };

  return (
    <>
      <div className={classes.root}>
        {activeStep === 0 && <FirstMessage />}
        {activeStep === 1 && <GetGitHub setFields={setUserInfo} />}
        {activeStep === 2 && <GetBlogRSS />}
        {activeStep === 3 && <FinalMessage />}
        <Button className={classes.button} onClick={handleNext}>
          {activeStep < 3 ? 'Next' : 'Finish'}
        </Button>
        <Button className={classes.button} onClick={handlePrevious}>
          Previous
        </Button>
        <div className={classes.stepper}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <p>{userInfo}</p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
