import React, { Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from '../css/styles';

function FormPersonalDetails({
  handleNextStep,
  handlePrevStep,
  onFieldChange,
  inputValue,
  onFieldFocus,
  onFieldBlur,
  formErrors,
  formValidate
}) {
  const classes = useStyles();

  // on click, update step state by calling handleNextStep
  const handleNextBtnClick = () => {
    handleNextStep();
    formValidate(inputValue);
  };

  const handlePrevBtnClick = () => {
    handlePrevStep();
  };

  // on change, pass input value to <MainForm />
  const handleChange = e => {
    e.preventDefault();
    onFieldChange(e.target);
  };

  const handleFocus = e => {
    onFieldFocus(e.target);
  };

  const handleBlur = e => {
    onFieldBlur(e.target);
  };

  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h1" className={classes.formTitle} align="center">
          Enter Personal Details <span>(Step {inputValue.step} of 3)</span>
        </Typography>
      </AppBar>

      <TextField
        id="city"
        label="City"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        value={inputValue.city}
        error={formErrors.city.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="city-error"
        aria-invalid="false"
      />

      {formErrors.city.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="city-erro"
          aria-live="assertive"
        >
          Error: city require {formErrors.city}
        </Typography>
      )}

      <TextField
        id="bio"
        label="Bio"
        placeholder="Placeholder"
        multiline
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
        margin="normal"
        value={inputValue.bio}
        helperText={`character Numbers ${inputValue.bio.length}`}
        error={formErrors.bio.length > 0 ? true : false}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby="bio-error"
        aria-invalid="false"
      />

      {formErrors.bio.length > 0 && (
        <Typography
          variant="body2"
          className={`${classes.title} ${classes.errorMessage}`}
          align="center"
          id="bio-error"
          aria-live="assertive"
        >
          Error: bio character Numbers {inputValue.bio.length} and {formErrors.bio}
        </Typography>
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
