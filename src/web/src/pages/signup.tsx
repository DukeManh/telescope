import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';

import useAuth from '../hooks/use-auth';
import Overview from '../components/SignUp/Forms/Overview';
import BasicInfo from '../components/SignUp/Forms/BasicInfo';
import GitHubAccount from '../components/SignUp/Forms/GitHubAccount';
import RSSFeeds from '../components/SignUp/Forms/RSSFeeds';
import Review from '../components/SignUp/Forms/Review';
import DynamicImage from '../components/DynamicImage';

import formModels from '../components/SignUp/FormSchema/FormModel';
import formSchema from '../components/SignUp/FormSchema/FormSchema';

const {
  firstName,
  lastName,
  displayName,
  githubUserName,
  github,
  blogUrl,
  feeds,
  email,
} = formModels;

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
      fontSize: '1.1rem',
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
    buttonsWrapper: {
      margin: '0 auto',
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: '4rem',
      width: '40%',
      fontSize: '1.1em',
      padding: '0.7em',
      margin: '5px',
      background: '#E0C05A',
      '&:hover': {
        color: 'black',
        background: '#EBD898',
      },
    },
    text: {
      textAlign: 'center',
      fontSize: '0.9em',
      color: '#474747',
    },
  })
);

const SignUpPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentSchema = formSchema[activeStep];
  const { user, login } = useAuth();

  if (!user) {
    login();
  }

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
        return <BasicInfo />;
      case 2:
        return <GitHubAccount />;
      case 3:
        return <RSSFeeds />;
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
          onSubmit={(values, actions) => {
            if (activeStep === 4) {
              console.log(values);
            }
            handleNext();
            actions.setTouched({});
            actions.setSubmitting(false);
          }}
          validationSchema={currentSchema}
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
          {({ values }) => (
            <>
              <Form autoComplete="off" className={classes.infoContainer}>
                {renderForm()}
                <div className={classes.text}>
                  <h3>Click NEXT to continue</h3>
                </div>
                <div className={classes.buttonsWrapper}>
                  {activeStep > 0 && (
                    <Button className={classes.button} onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  {activeStep < 4 && (
                    <Button className={classes.button} type="submit">
                      {activeStep === 4 ? 'Confirm' : 'Next'}
                    </Button>
                  )}
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
