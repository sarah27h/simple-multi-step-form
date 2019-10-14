import React, { Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { useStyles } from '../css/styles';

function Success() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h6" className={classes.title} align="center">
          Success
        </Typography>
      </AppBar>
      <div className={classes.successMessage}>
        <Typography variant="body1" className={classes.title} align="center">
          Thank you for your submission!
        </Typography>
        <Typography variant="body2" className={classes.title} align="center">
          you will get an email with further instructions
        </Typography>
      </div>
    </Fragment>
  );
}

export default Success;
