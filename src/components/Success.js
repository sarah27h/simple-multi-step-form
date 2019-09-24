import React, { Fragment } from 'react';
import { AppBar, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  title: {
    flexGrow: 1
  },
  controlBtns: {
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  center: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  successMessage: {
    marginTop: 16,
    marginBottom: 16
  },
  button: {
    margin: theme.spacing(2)
  }
}));

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
