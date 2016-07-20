import React, { Component } from 'react';

import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import RadioButton from 'grommet/components/RadioButton';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import DateTime from 'grommet/components/DateTime';
import moment from 'moment';
import { browserHistory } from 'react-router';

export default class RegistrationForm extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPassChange = this._onPassChange.bind(this);
    this._onConfPassChange = this._onConfPassChange.bind(this);
    this._onSecurityQuestion1Change = this._onSecurityQuestion1Change.bind(this);
    this._onSecurityAnswer1Change = this._onSecurityAnswer1Change.bind(this);
    this._onSecurityQuestion2Change = this._onSecurityQuestion2Change.bind(this);
    this._onSecurityAnswer2Change = this._onSecurityAnswer2Change.bind(this);
    this._onDateChange = this._onDateChange.bind(this);
    this._onRadioChange = this._onRadioChange.bind(this);

    this.state = {
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      securityQuestion1: undefined,
      securityAnswer1: undefined,
      securityQuestion2: undefined,
      securityAnswer2: undefined,
      date: moment().format("M/D/YYYY"),
      byEmail: 'Yes'
    };
  }

  _onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  _onCancel(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  _onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  _onPassChange(e) {
    this.setState({ password: e.target.value });
  }

  _onConfPassChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  _onSecurityQuestion1Change(e) {
    this.setState({ securityQuestion1: e.target.value });
  }

  _onSecurityAnswer1Change(e) {
    this.setState({ securityAnswer1: e.target.value });
  }

  _onSecurityQuestion2Change(e) {
    this.setState({ securityQuestion2: e.target.value });
  }

  _onSecurityAnswer2Change(e) {
    this.setState({ securityAnswer2: e.target.value });
  }

  _onDateChange(e) {
    this.setState({ date: e.format("M/D/YYYY") });
  }

  _onRadioChange(e) {
    this.setState({ byEmail: e.target.value });
  }

  render() {
    return(
      <Box appCentered={true} direction="column" align="center" pad="large">
        <Box size="large" direction="row">
          <Form>
            <FormFields>
              <fieldset>
                <FormField label="Email" htmlFor="email" >
                  <input id="email" type="email" value={this.state.email} onChange={this._onEmailChange} required />
                </FormField>
                <FormField label="Password" htmlFor="pass">
                  <input id="pass" type="password" value={this.state.password}  onChange={this._onPassChange} required />
                </FormField>
                <FormField label="Confirm Password" htmlFor="cpass">
                  <input id="cpass" type="password" value={this.state.confirmPassword} onChange={this._onConfPassChange} required />
                </FormField>
                <FormField label="Security Question 1" htmlFor="sq1">
                  <select name="sq1" id="sq1" value={this.state.securityQuestion1} onChange={this._onSecurityQuestion1Change} required >
                    <option value="">Select a security question</option>
                    <option value="3">Where was your first job? (full name of city only)</option>
                    <option value="2">What is the last name of your favorite teacher in school?</option>
                    <option value="1">What is the last name of your childhood best friend?</option>
                    <option value="7">What is the company name of your first employer?  </option>
                    <option value="6">Where did you meet your spouse for the first time? (full name of city only)</option>
                    <option value="5">In what city did you honeymoon? (full name of city only)</option>
                    <option value="4">What was your first pet's name?</option>
                    <option value="8">What was the last name of your first boyfriend/girlfriend?</option>
                  </select>
                </FormField>
                <FormField label="Security Question 1 Answer" htmlFor="sqAn1">
                  <input id="sqAn1" type="text" value={this.state.securityAnswer1} onChange={this._onSecurityAnswer1Change} required />
                </FormField>
                <FormField label="Security Question 2" htmlFor="sq2">
                  <select name="sq2" id="sq2" value={this.state.securityQuestion2} onChange={this._onSecurityQuestion2Change} required >
                    <option value="">Select a security question</option>
                    <option value="3">Where was your first job? (full name of city only)</option>
                    <option value="2">What is the last name of your favorite teacher in school?</option>
                    <option value="1">What is the last name of your childhood best friend?</option>
                    <option value="7">What is the company name of your first employer?  </option>
                    <option value="6">Where did you meet your spouse for the first time? (full name of city only)</option>
                    <option value="5">In what city did you honeymoon? (full name of city only)</option>
                    <option value="4">What was your first pet's name?</option>
                    <option value="8">What was the last name of your first boyfriend/girlfriend?</option>
                  </select>
                </FormField>
                <FormField label="Security Question 2 Answer" htmlFor="sqAn1">
                  <input id="sqAn1" type="text" value={this.state.securityAnswer2} onChange={this._onSecurityAnswer2Change} required />
                </FormField>
                <FormField label="Select Date" htmlFor="dateID">
                  <DateTime id="dateID" name="SelectDate" format="M/D/YYYY" onChange={this._onDateChange} value={this.state.date} />
                </FormField>
                <FormField label="Contact by Email" help="May HP contact you with personalized offers, support updates, and event news? Please indicate below how HP may contact you.">
                  <RadioButton id="{choice1-1}" name="choice" label="Yes" value="Yes" defaultChecked={true} onChange={this._onRadioChange} />
                  <RadioButton id="{choice1-2}" name="choice" label="No" value="No" onChange={this._onRadioChange} />
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{"vertical": "small"}} justify="end">
              <Box pad={{"horizontal": "small"}}>
                <Button label="Cancel" onClick={this._onCancel} />
              </Box>
              <Box>
                <Button primary={true} label="Submit" onClick={this._onSubmit} />
              </Box>
            </Footer>
          </Form>
          <Box pad={{"horizontal": 'small'}}>
            <Box colorIndex="neutral-1" pad='large'>
              <Heading tag='h3' strong={true}>
                Get the from Response in JSON Format
              </Heading>
              <pre>
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
};
