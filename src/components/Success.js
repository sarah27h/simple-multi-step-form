import React, { Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { useStyles } from '../css/styles';

function Success() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h1" className={classes.formTitle} align="center">
          Success <span>(Finished)</span>
        </Typography>
      </AppBar>
      <div className={classes.messageContainer}>
        <Typography
          variant="h2"
          className={`${classes.title} ${classes.successMessage}`}
          align="center"
        >
          Thank you for your submission!
        </Typography>
        <Typography variant="h2" className={classes.title} align="center">
          you will get an email with further instructions
        </Typography>
      </div>
    </Fragment>
  );
}

export default Success;
