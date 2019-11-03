import React, { Fragment } from 'react';
import { AppBar, Typography, List, ListItemText, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from '../css/styles';

function Confirm({ handleNextStep, handlePrevStep, enteredValues, inputValue }) {
  const classes = useStyles();

  const userInfo = [];
  for (let field in enteredValues) {
    userInfo.push(field);
  }
  const summaryList = userInfo.map((info, index) => {
    return (
      <ListItem key={index}>
        <ListItemText className="listText" primary={info} secondary={enteredValues[info]} />
      </ListItem>
    );
  });

  console.log(userInfo);

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = e => {
    e.preventDefault();
    // process form
    // send your data to your API (flux, python php)

    if (inputValue.validate) {
      handleNextStep();
    }
  };

  const handlePrevBtnClick = () => {
    handlePrevStep();
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h1" className={classes.formTitle} align="center">
          Confirm <span>(Step {inputValue.step} of 3)</span>
        </Typography>
      </AppBar>

      <div className={`${classes.center} ${classes.confirmList}`}>
        <List>{summaryList}</List>
        {/* <List>{generate(<ListItem>{listSummary}</ListItem>)}</List> */}
      </div>
      {inputValue.validate === false && (
        <div className={classes.messageContainer}>
          <Typography
            variant="h2"
            className={`${classes.title} ${classes.errorMessage}`}
            align="center"
            role="alert"
          >
            Errors! - There are errors in this form, please go back to fix them
          </Typography>
        </div>
      )}
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
          type="submit"
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
