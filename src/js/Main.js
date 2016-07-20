import React, { Component } from 'react';

import App from 'grommet/components/App';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';

export default class Main extends Component {
  render () {
    return (
      <App centered={false} lang="en-US">
        <LayoutHeader />

        {this.props.children}

        <LayoutFooter items={MenuItems} />

      </App>
    );
  }
};


var MenuItems = [
  {
    name: 'Corporate',
    url: null,
    link: '0',
    sub: [
      {
        name: 'Accessibility',
        url: 'http://www8.hp.com/us/en/hpe/hp-information/accessibility-aging/index.html',
        link: '0-0',
        sub: null
      },
      {
        name: 'Careers',
        url: 'http://www8.hp.com/us/en/hpe/jobs/index.html',
        link: '0-1',
        sub: null
      },
      {
        name: 'Contact Us',
        url: '/',
        link: '0-2',
        sub: null
      },
      {
        name: 'Corporate Responsibility',
        url: 'http://www8.hp.com/us/en/hpe/hp-information/livingprogress/index.html',
        link: '0-3',
        sub: null
      }
    ]
  },
  {
    name: 'Partners',
    url: null,
    link: '1',
    sub: [
      {
        name: 'Find a Partner',
        url: 'https://findapartner.hpe.com/',
        link: '1-0',
        sub: null
      },
      {
        name: 'Partner Programs',
        url: 'http://www8.hp.com/us/en/solutions/partner-programs/partners.html',
        link: '1-1',
        sub: null
      }
    ]
  },
  {
    name: 'Social',
    url: null,
    link: '2',
    sub: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/hewlett-packard-enterprise',
        link: '2-0',
        sub: null
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/HPEnterpriseBusiness',
        link: '2-1',
        sub: null
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/hpe',
        link: '2-2',
        sub: null
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/hewlettpackardvideos',
        link: '2-3',
        sub: null
      }
    ]
  }
];
