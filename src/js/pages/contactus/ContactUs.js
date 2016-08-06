import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import ContentCopy from './ContentCopy';
import ContactList from './ContactList';
import LayoutHero from '../../components/LayoutHero';

export default class ContactUs extends Component {
  render() {
    return(
      <Box>
        <LayoutHero navtitle="Home" navlink="http://www.google.com" image="/img/HP_Contact_background.jpg" bgcolor="light-2" title="Create Your Account" />
        <ContentCopy />
        <ContactList cdata={cDataJSON} />
      </Box>
    );
  };
};

var cDataJSON = [
  {
    id: "0",
    title: "Americas",
    copy: 'Call: +1 (800) 538 1733 (English, Spanish) Hours: Mon to Fri, 8am - 8pm US Eastern',
    email: 'licensing.ams@hpe.com',
    separator: 'right'
  },
  {
    id: "1",
    title: "Europe, Middle-East, Africa",
    copy: 'Call: +44 203 450 5383 (English, German, French, Italian, Spanish, Russian) Hours: Mon to Fri, 8am - 4pm GMT',
    email: 'licensing.emea@hpe.com',
    separator: 'right'
  },
  {
    id: "2",
    title: "Asia-Pacific, Japan",
    copy: 'Japan: +81-36-743-9679 (Japanese Only) China North: 10800 7440572 (Chinese, English)  China South: 10800 4400552 (Chinese, English)  Call: +61 291 51 02 78 (English Only) Hours: Mon to Fri, 9am - 5pm Tokyo local Time ',
    email: 'licensing.apj@hpe.com',
    separator: ''
  }
];
