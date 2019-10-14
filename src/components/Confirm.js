import React, { Fragment } from 'react';
import { AppBar, Typography, List, ListItemText, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from '../css/styles';

function Confirm(props) {
  const classes = useStyles();

  const userInfo = [];
  for (let field in props.enteredValues) {
    userInfo.push(field);
  }
  const summaryList = userInfo.map((info, index) => {
    return (
      <ListItem key={index}>
        <ListItemText className="listText" primary={info} secondary={props.enteredValues[info]} />
      </ListItem>
    );
  });
  // for (let value of props.enteredValues) {
  //   <ListItemText primary="ddd" />;
  // }

  console.log(userInfo);

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = e => {
    console.log(props);
    // e.preventDefault();
    // process form
    // send your data to your API (flux, python php)
    props.handleNextStep();
  };

  const handlePrevBtnClick = () => {
    props.handlePrevStep();
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h6" className={classes.title} align="center">
          Confirm
        </Typography>
      </AppBar>

      <div className={`${classes.center} ${classes.confirmList}`}>
        <List>{summaryList}</List>
        {/* <List>{generate(<ListItem>{listSummary}</ListItem>)}</List> */}
      </div>

      <div className={classes.controlBtns}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.alignLeft}`}
          onClick={handlePrevBtnClick}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={`${classes.button} ${classes.alignRigth}`}
          onClick={handleNextBtnClick}
        >
          Confirm & Next
        </Button>
      </div>
    </Fragment>
  );
}

export default Confirm;
// export { Confirm as default };
