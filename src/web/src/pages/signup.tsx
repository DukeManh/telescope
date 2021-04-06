import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';

import useAuth from '../hooks/use-auth';
import Overview from '../components/SignUp/Overview';
import DisplayName from '../components/SignUp/DisplayName';
import GetGitHub from '../components/SignUp/GetGitHub';
import GetBlogRSS from '../components/SignUp/GetBlogRSS';
import Review from '../components/SignUp/Review';
import DynamicImage from '../components/DynamicImage';

import formFields from '../components/SignUp/formFields';
import formSchema from '../components/SignUp/formSchema';

const {
  firstName,
  lastName,
  displayName,
  githubUserName,
  github,
  blogUrl,
  feeds,
  email,
} = formFields;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      position: 'relative',
    },
    imageContainer: {
      minHeight: '100vh',
      width: '100vw',
      position: 'absolute',
      top: '0',
      bottom: '0',
      zIndex: -1,
      [theme.breakpoints.down(600)]: {
        display: 'none',
      },
    },
    signUpContainer: {
      margin: '1% 0 1% 0',
      display: 'grid',
      gridTemplateRows: '10% auto 13%',
      gridGap: '2%',
      justifyItems: 'center',
      fontFamily: 'Spartan',
      height: '480px',
      width: '510px',
      padding: '1%',
      borderRadius: '5px',
      boxShadow: '2px 4px 4px 1px rgba(0, 0, 0, 0.1)',
      background: '#ECF5FE',
      '@media (max-height: 500px) and (max-width: 1024px)': {
        margin: '0 0 65px 0',
      },
      [theme.breakpoints.down(600)]: {
        background: 'none',
        boxShadow: 'none',
        minHeight: '650px',
        height: '600px',
        position: 'absolute',
        top: '0px',
        width: '100%',
        margin: '0',
        padding: '0',
        gridTemplateRows: '8% auto 17%',
      },
    },
    title: {
      color: '#121D59',
      fontSize: '22px',
    },
    infoContainer: {
      width: '100%',
      position: 'relative',
    },
    formContainer: {},
    buttonsWrapper: {
      display: 'flex',
    },
    button: {
      fontSize: '1.1em',
      padding: '1em',
      margin: '5px 10px',
      background: '#E0C05A',
      '&:hover': {
        color: 'black',
        background: '#EBD898',
      },
    },
  })
);

const SignUpPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const { user, login } = useAuth();

  if (!user) {
    login();
  }

  const handleSubmit = () => {};

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <Overview />;
      case 1:
        return <DisplayName />;
      case 2:
        return <GetGitHub />;
      case 3:
        return <GetBlogRSS />;
      case 4:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <DynamicImage />
      </div>
      <div className={classes.signUpContainer}>
        <h1 className={classes.title}>Telescope Account</h1>
        <Formik
          className={classes.root}
          onSubmit={handleSubmit}
          validationSchema={formSchema[activeStep]}
          initialValues={{
            [firstName.name]: '',
            [lastName.name]: '',
            [displayName.name]: '',
            [email.name]: user?.email || '',
            [githubUserName.name]: '',
            [github.name]: {
              username: '',
              avatarUrl: '',
            },
            [blogUrl.name]: 'https:://',
            [feeds.name]: [] as Array<string>,
          }}
        >
          <Form autoComplete="off" className={classes.infoContainer}>
            {renderForm()}
          </Form>
        </Formik>
        <div className={classes.formContainer}>
          <div>
            <div className={classes.buttonsWrapper}>
              {activeStep > 0 && (
                <Button className={classes.button} onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {activeStep === 0 && (
                <Button className={classes.button} onClick={handleNext}>
                  Start
                </Button>
              )}
              {activeStep < 4 && activeStep > 0 && (
                <Button className={classes.button} onClick={handleNext}>
                  Next
                </Button>
              )}
              {activeStep === 4 && (
                <Button className={classes.button} type="submit">
                  Confirm
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
