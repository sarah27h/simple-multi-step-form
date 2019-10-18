import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

// using validation outside state isn't optimal because we are putting the validation logic into render method,
//  which will turn the method into spaghetti real fast when we are validating lots of data.
// It also run even before we do anything with the textbox.
// That's not good.
// const formErrors = {
//   name: '',
//   email: '',
//   city: '',
//   bio: ''
// };

class MainForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    city: '',
    bio: '',
    formErrors: {
      name: '',
      email: '',
      city: '',
      bio: ''
    }
  };

  // go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // update state due to user inputs
  fieldChange = target => {
    this.setState({ [target.id]: target.value });
  };

  // hides the error message (on blur it will be checked again)
  fieldFocus = target => {
    // update nested react nested state properties
    let formErrors = { ...this.state.formErrors };
    formErrors[target.id] = '';
    this.setState({ formErrors });
    or using
    // this.setState(state => (state.formErrors[target.id] = ''));
  };

  // checks if the field is valid, and if not – shows an error
  fieldBlur = target => {
    let formErrors = { ...this.state.formErrors };
    switch (target.id) {
      case 'name':
        formErrors[target.id] = target.value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'email':
        formErrors[target.id] = !target.value.includes('@')
          ? 'minimum 3 characaters, contain @ required'
          : '';
        break;
      case 'city':
        formErrors[target.id] = target.value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'bio':
        formErrors[target.id] = 250 <= target.value.length ? 'maximum 250 character required' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  };

  render() {
    const { step, name, email, city, bio } = this.state;

    // to store user inputs to use in <Confirm />
    const enteredValues = { name, email, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleNextStep={this.nextStep}
            onFieldChange={this.fieldChange}
            inputValue={this.state}
            onFieldFocus={this.fieldFocus}
            onFieldBlur={this.fieldBlur}
            formErrors={this.state.formErrors}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            handleNextStep={this.nextStep}
            handlePrevStep={this.prevStep}
            onFieldChange={this.fieldChange}
            inputValue={this.state}
            onFieldFocus={this.fieldFocus}
            onFieldBlur={this.fieldBlur}
            formErrors={this.state.formErrors}
          />
        );
      case 3:
        return (
          <Confirm
            handleNextStep={this.nextStep}
            handlePrevStep={this.prevStep}
            enteredValues={enteredValues}
          />
        );
      case 4:
        return <Success />;
      default:
        break;
    }
  }
}

export default MainForm;
