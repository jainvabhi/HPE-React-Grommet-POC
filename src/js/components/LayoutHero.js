import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import SecondaryNav from './SecondaryNav';

export default class LayoutHero extends Component {
  render() {
    return(
      <Box texture={this.props.image}  colorIndex={this.props.bgcolor} >
        <SecondaryNav title={this.props.navtitle} link={this.props.navlink} />
        <Box direction="column" align="center">
          <Box size="large" pad={{"horizontal": "none", "vertical": "large"}}>
            <Heading>{this.props.title}</Heading>
            {this.props.children ? <Paragraph size="large">{this.props.children}</Paragraph> : null}
          </Box>
        </Box>
      </Box>
    );
  };
};
