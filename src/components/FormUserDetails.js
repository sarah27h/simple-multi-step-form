import React, { Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from '../css/styles';

function FormUserDetails({
  handleNextStep,
  onFieldChange,
  inputValue,
  onFieldFocus,
  onFieldBlur,
  formErrors
}) {
  const classes = useStyles();

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = () => {
    handleNextStep();
  };

  // on change, pass input value to <MainForm />
  const handleChange = e => {
    e.preventDefault();
    onFieldChange(e.target);
    console.log(formErrors);
  };

  const handleFocus = e => {
    onFieldFocus(e.target);
  };

  const handleBlur = e => {
    onFieldBlur(e.target);
  };
  console.log(formErrors);

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h1" className={classes.formTitle} align="center">
          Enter User Details <span>(Step {inputValue.step} of 3)</span>
        </Typography>
      </AppBar>

      <TextField
        id="name"
        label="Name"
        type="text"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={inputValue.name}
        error={formErrors.name.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="name-error"
      />
      {formErrors.name.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="name-error"
          aria-live="assertive"
        >
          Error: name require {formErrors.name}
        </Typography>
      )}

      <TextField
        id="email"
        label="Email"
        type="email"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={inputValue.email}
        error={formErrors.email.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="email-error"
      />

      {formErrors.email.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="email-error"
          aria-live="assertive"
        >
          Error: email require {formErrors.email}
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
