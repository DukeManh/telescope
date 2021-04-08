/* eslint-disable camelcase */
import { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect } from 'formik';
import PostAvatar from '../../Posts/PostAvatar';

import useSWRWithTimeout from '../../../hooks/use-swr-with-timeout';
import formModels from '../Schema/FormModel';
import { TextInput, CheckBoxInput } from '../FormFields';
import { SignUpForm } from '../../../interfaces';

const { githubUsername, github: githubModel, githubOwnership } = formModels;

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
      gridTemplateColumns: '100%',
      '& .MuiFormHelperText-root': {
        fontSize: '0.9em',
        color: 'black',
      },
      '& .MuiFormLabel-root': {
        color: 'black',
      },
    },
    avatarPreview: {
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      justifySelf: 'end',
      padding: '6%',
      borderRadius: '5px',
      [theme.breakpoints.down(600)]: {
        justifySelf: 'center',
        padding: '3%',
        marginTop: '5%',
      },
    },
    username: {
      fontSize: '1.1em',
    },
  })
);

const gitHubApiUrl = 'https://api.github.com/users';

type GitHubData = {
  login: string;
  avatar_url: string;
};

const GitHubAccount = connect<{}, SignUpForm>((props) => {
  const classes = useStyles();

  const { values, setFieldValue } = props.formik;

  // We fetch user's github profile 1000ms after input change
  const { data: github, error } = useSWRWithTimeout<GitHubData>(
    values.githubUsername ? `${gitHubApiUrl}/${values.githubUsername}` : null,
    1000
  );

  useEffect(() => {
    if (error) {
      setFieldValue('github', {}, true);
    }

    if (github) {
      setFieldValue('github', {
        username: github.login,
        avatarUrl: github.avatar_url,
      });
    }
  }, [github, error, setFieldValue]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.titlePage}>GitHub Account</h1>
        <h2 className={classes.subtitlePage}>Enter Github username and verify your profile</h2>
        <div className={classes.infoContainer}>
          <div className={classes.inputsContainer}>
            <TextInput
              label={githubUsername.label}
              name={githubUsername.name}
              error={!!error}
              helperText={!!error && githubModel.invalidErrorMsg}
            />
          </div>
          {!error && github && (
            <div className={classes.avatarPreview}>
              <PostAvatar name={github.login} blog={github.avatar_url} img={github.avatar_url} />
              <h2 className={classes.username}>{github.login}</h2>
            </div>
          )}
        </div>
        <CheckBoxInput
          label={githubOwnership.label}
          name={githubOwnership.name}
          checked={values.githubOwnership}
        />
      </div>
    </div>
  );
});

export default GitHubAccount;
