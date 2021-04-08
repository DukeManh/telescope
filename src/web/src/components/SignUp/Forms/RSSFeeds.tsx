import { useState, useEffect } from 'react';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { TextInput, CheckBoxInput } from '../FormFields';
import { feedDiscoveryServiceUrl } from '../../../config';
import formModels from '../Schema/FormModel';
import { SignUpForm } from '../../../interfaces';

const { blogUrl, blogOwnership } = formModels;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      position: 'relative',
      width: '100%',
      minHeight: '100%',
    },
    container: {
      display: 'grid',
      gridTemplateAreas: '1fr',
      textAlign: 'center',
      justifyItems: 'center',
      alignItems: 'center',
      position: 'absolute',
      minHeight: '100%',
      width: '100%',
      [theme.breakpoints.down(600)]: {
        width: '95%',
        marginLeft: '2.5%',
      },
    },
    blogPageTitle: {
      fontSize: '1.5em',
    },
    helpText: {
      fontSize: '1.1em',
      lineHeight: '1.8em',
    },
    infoContainer: {
      display: 'grid',
      gridTemplateColumns: '55% 45%',
      textAlign: 'center',
      gridGap: '2%',
      justifyItems: 'center',
      alignItems: 'center',
      width: '90%',
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
        gridGap: '8%',
      },
    },
    inputsContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '75% 25%',
      '& .MuiFormHelperText-root': {
        fontSize: '0.9em',
        color: 'black',
      },
      '& .MuiFormLabel-root': {
        color: 'black',
      },
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '80% 20%',
      },
    },
    helpMessage: {
      fontSize: '.9em',
      color: 'black',
    },
    button: {
      height: '35px',
      width: '50%',
      alignSelf: 'center',
      fontSize: '0.8em',
      marginLeft: '5%',
      background: '#121D59',
      color: '#A0D1FB',
      '&:hover': {
        color: 'black',
        border: '1px solid #121D59',
      },
    },
    RssButtonContainer: {
      width: '90%',
      display: 'grid',
    },
    infoRSSContainer: {
      minHeight: '120px',
      maxHeight: '120px',
      width: '100%',
      overflowY: 'auto',
    },
    noBlogMessage: {
      fontSize: '1em',
      color: '#474747',
      marginTop: '40px',
    },
    text: {
      fontSize: '0.9em',
      alignSelf: 'end',
      color: '#474747',
    },
    RssButtonWrapper: {
      width: '100%',
    },
    RssButton: {
      width: '101%',
      borderRadius: '0',
      background: '#121D59',
      color: '#A0D1FB',
      '&:hover': {
        color: 'black',
        border: '1px solid #121D59',
      },
    },
    agreeMessage: {
      [theme.breakpoints.down(600)]: {
        alignSelf: 'end',
      },
    },
    formControlLabel: {
      fontSize: '.9em',
      height: '10px',
      color: '#474747',
    },
  })
);

const RSSFeeds = connect<{}, SignUpForm>((props) => {
  const classes = useStyles();

  const [feedUrls, setFeedUrls] = useState<Array<string>>([]);

  const { values, errors, setFieldValue } = props.formik;

  const [blogUrlError, setBlogUrlError] = useState<string>('');

  const validateBlog = async () => {
    if (!errors.blogUrl && feedDiscoveryServiceUrl) {
      try {
        const response = await fetch(feedDiscoveryServiceUrl, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            blogUrl: values.blogUrl,
          }),
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const res = await response.json();
        setBlogUrlError('');
        setFeedUrls(res.feedUrls);
      } catch (err) {
        setBlogUrlError(`Failed to fetch RSS feed at ${values.blogUrl}`);
        setFeedUrls([], true);
      }
    } else {
      setBlogUrlError('');
      setFeedUrls([], true);
    }
  };

  const handleCheck = (url: string) => {
    const selectedFeeds = values.feeds.includes(url)
      ? values.feeds.filter((val: string) => val !== url)
      : [...values.feeds, url];

    setFieldValue('feeds', selectedFeeds, true);
  };

  useEffect(() => {
    validateBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.blogPageTitle}>Blog and RSS</h1>
        <h2 className={classes.helpText}>
          Enter your blog URL and select the RSS you want to use in Telescope ecosystem.
        </h2>
        <div className={classes.infoContainer}>
          <div className={classes.inputsContainer}>
            <TextInput
              name={blogUrl.name}
              label={blogUrl.label}
              helperText={blogUrlError || 'Validate your Blog URL'}
              error={!!blogUrlError}
            />
            <Button className={classes.button} onClick={validateBlog}>
              Validate Blog
            </Button>
          </div>
          <div className={classes.RssButtonContainer}>
            <div className={classes.infoRSSContainer}>
              {feedUrls.length ? (
                <FormControl required component="fieldset">
                  <FormGroup>
                    {feedUrls.map((url) => (
                      <FormControlLabel
                        key={url}
                        control={
                          <Checkbox
                            checked={values.feeds.includes(url)}
                            onChange={() => handleCheck(url)}
                          />
                        }
                        label={<h1 className={classes.formControlLabel}>{url}</h1>}
                      />
                    ))}
                  </FormGroup>
                  <FormHelperText className={classes.helpMessage} error>
                    {errors.feeds || ''}
                  </FormHelperText>
                </FormControl>
              ) : (
                <h3 className={classes.noBlogMessage}>Please validate your blog URL</h3>
              )}
            </div>
          </div>
        </div>
        <CheckBoxInput
          label={blogOwnership.label}
          name={blogOwnership.name}
          checked={values.blogOwnership}
        />
      </div>
    </div>
  );
});

export default RSSFeeds;
