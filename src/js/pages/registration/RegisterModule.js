import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import LayoutHero from '../../components/LayoutHero';
import RegisterCopy from './RegisterCopy';
import RegistrationForm from './RegistrationForm';

export default class RegisterModule extends Component {
  render() {
    return(
      <Box>
        <LayoutHero navtitle="Back to Choose Portal" navlink="http://www.google.com" image="/img/HP_Contact_background.jpg" bgcolor="brand" title="Create Your Account">
          Create an HP Passport account. This account can be used for many HP websites and services
        </LayoutHero>
        <RegisterCopy />
        <RegistrationForm />
      </Box>
    );
  };
};
