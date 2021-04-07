import { useState } from 'react';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import formModels from '../FormSchema/FormModel';
import { TextInput, CheckBoxInput } from '../FormComponents';

const { blogUrl } = formModels;

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
      border: '1px solid rgba(71, 71, 71, 0.5)',
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
  })
);

const RSSFeeds = () => {
  const classes = useStyles();
  const [validateBlog, setValidateBlog] = useState(false);
  const [validateConfirm, setValidateConfirm] = useState(false);
  const rssExample = ['www.test1.feed.com', 'www.test2.feed.com', 'www.test3.feed.com'];

  const dumbHandleChange = () => {
    setValidateBlog(!validateBlog);
    setValidateConfirm(!validateConfirm);
    console.log(validateBlog);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.blogPageTitle}>Blog and RSS</h1>
        <h2 className={classes.helpText}>
          Please enter your blog URL and select the RSS that you want to use in Telescope ecosystem.
        </h2>
        <div className={classes.infoContainer}>
          <div className={classes.inputsContainer}>
            <TextInput
              required
              name={blogUrl.name}
              label={blogUrl.label}
              helperText="Verify your Blog URL"
            />
            <Button className={classes.button} onClick={dumbHandleChange}>
              Validate Blog
            </Button>
          </div>
          <div className={classes.RssButtonContainer}>
            <div className={classes.infoRSSContainer}>
              {validateBlog ? (
                <FormControl required component="fieldset">
                  <FormHelperText className={classes.helpMessage}>
                    *You must select at least one RSS
                  </FormHelperText>
                  <FormGroup>
                    {rssExample.map((rss) => (
                      <FormControlLabel
                        key={rss}
                        control={<Checkbox checked name={rss} onChange={dumbHandleChange} />}
                        label={<h1>{rss}</h1>}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              ) : (
                <h3 className={classes.noBlogMessage}>Please validate your blog</h3>
              )}
            </div>
            <div className={classes.RssButtonWrapper}>
              {validateConfirm === true && (
                <Button className={classes.RssButton} onClick={dumbHandleChange}>
                  Confirm RSS
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* <div className={classes.agreeMessage}>
          <FormControl required component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreement}
                    name="blogOwnership"
                    onChange={(e) => handleChange(e)}
                  />
                }
                label={
                  <h1 className={classes.formControlLabel}>
                    I declare that I am the owner and the maintainer of this Blog
                  </h1>
                }
              />
            </FormGroup>
          </FormControl>
        </div> */}
        <div className={classes.text}>
          <h3>Click NEXT to continue</h3>
        </div>
      </div>
    </div>
  );
};

export default RSSFeeds;
