import React, { Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from '../css/styles';

function FormUserDetails(props) {
  const classes = useStyles();

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = () => {
    props.handleNextStep();
  };

  // on change, pass input value to <MainForm />
  const handleChange = e => {
    e.preventDefault();
    props.onFieldChange(e.target);
    console.log(props.formErrors);
  };

  const handleFocus = e => {
    props.onFieldFocus(e.target);
  };

  const handleBlur = e => {
    props.onFieldBlur(e.target);
  };
  console.log(props.formErrors);

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h1" className={classes.formTitle} align="center">
          Enter Personal Details
        </Typography>
      </AppBar>

      <TextField
        id="name"
        label="Name"
        type="text"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={props.inputValue.name}
        error={props.formErrors.name.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="name-error"
      />
      {props.formErrors.name.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="name-error"
          aria-live="assertive"
        >
          Error: name require {props.formErrors.name}
        </Typography>
      )}

      <TextField
        id="email"
        label="Email"
        type="email"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={props.inputValue.email}
        error={props.formErrors.email.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="email-error"
      />

      {props.formErrors.email.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="email-error"
          aria-live="assertive"
        >
          Error: email require {props.formErrors.email}
        </Typography>
      )}

      <div className={classes.controlBtns}>
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

export default FormUserDetails;
