import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';

export default class SecondaryNav extends Component {
  render() {
    return(
      <Box colorIndex="grey-1" appCentered={true} direction="column" align="center">
        <Box size="large" align="center" justify="between" direction="row">
          <Menu>
            <Anchor href={this.props.link}>
              {this.props.title}
            </Anchor>
          </Menu>
          <Menu direction="row">
            <Menu label="English">
              <Anchor href="http://www.google.com" className="active">English</Anchor>
              <Anchor href="http://www.google.com">日本語</Anchor>
            </Menu>
            <Anchor href="http://www.google.com">Feedback</Anchor>
            <Menu label="Help">
              <Anchor href="http://www.google.com" className="active">Help</Anchor>
              <Anchor href="http://www.google.com">Quick Start Guide</Anchor>
              <Anchor href="http://www.google.com">FAQs</Anchor>
              <Anchor href="/">Contact US</Anchor>
            </Menu>
          </Menu>
        </Box>
      </Box>
    );
  };
};
