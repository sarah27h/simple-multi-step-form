import React, { Fragment } from 'react';
import { AppBar, makeStyles, Typography, List, ListItemText, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 250
  },
  focused: {},

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
  confirmList: {
    maxWidth: 250,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing(2)
  }
}));

function generate(element) {
  return [0, 1, 2, 3].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

function Confirm() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h6" className={classes.title} align="center">
          Confirm
        </Typography>
      </AppBar>

      <div className={`${classes.center} ${classes.confirmList}`}>
        <List>
          {generate(
            <ListItem>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </div>

      <div className={classes.controlBtns}>
        <Button variant="contained" className={classes.button}>
          Back
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          Confirm & Next
        </Button>
      </div>
    </Fragment>
  );
}

export default Confirm;
