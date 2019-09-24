import React, { Component, Fragment } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class MainForm extends Component {
  render() {
    return (
      <Fragment>
        <FormUserDetails />
        <FormPersonalDetails />
        <Confirm />
        <Success />
      </Fragment>
    );
  }
}

export default MainForm;
