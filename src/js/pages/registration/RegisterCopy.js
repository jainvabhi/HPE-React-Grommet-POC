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
              The information collected below enables HPE to properly set up and enable <strong>Support and Subscription Services</strong> for the end customer, where applicable.
            </Paragraph>
          </Article>
        </Box>
      </Box>
    );
  };
};
