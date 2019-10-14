import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class MainForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    city: '',
    bio: ''
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
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            handleNextStep={this.nextStep}
            handlePrevStep={this.prevStep}
            onFieldChange={this.fieldChange}
            inputValue={this.state}
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
