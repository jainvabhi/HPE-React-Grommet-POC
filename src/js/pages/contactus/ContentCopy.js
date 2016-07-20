import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';


export default class ContentCopy extends Component {
  render() {
    return(
      <Box appCentered={true} direction="column" align="center" primary={true} >
        <Box size="large" align="center" direction="row">
          <Article full="horizontal">
            <Paragraph size="large">
              If you need assistance, please contact the Licensing Support Center listed below for your region.
            </Paragraph>
            <Paragraph size="large">
              If your request is an emergency and the time is outside normal business hours, please contact one of the other regional licensing support centers listed.
            </Paragraph>
          </Article>
        </Box>
      </Box>
    );
  };
};
