import React, { Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from '../css/styles';

function FormPersonalDetails(props) {
  const classes = useStyles();

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = () => {
    props.handleNextStep();
  };

  const handlePrevBtnClick = () => {
    props.handlePrevStep();
  };

  // on change, pass input value to <MainForm />
  const handleChange = e => {
    e.preventDefault();
    props.onFieldChange(e.target);
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h6" className={classes.title} align="center">
          Enter Personal Details
        </Typography>
      </AppBar>
      <TextField
        id="city"
        label="City"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={props.inputValue.city}
        onChange={handleChange}
      />
      <TextField
        id="bio"
        label="Bio"
        placeholder="Placeholder"
        multiline
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        margin="normal"
        value={props.inputValue.bio}
        onChange={handleChange}
      />

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
          Next
        </Button>
      </div>
    </Fragment>
  );
}

export default FormPersonalDetails;
