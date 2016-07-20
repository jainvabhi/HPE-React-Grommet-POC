import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import UserIcon from 'grommet/components/icons/base/User';


export default class ContactList extends Component {
  render() {
    return(
      <Box appCentered={true} direction="column" align="center" pad={{"vertical": "large"}}>
        <Box size="large" direction="row" >
          <Tiles fill={true} align='start' pad={{"between": "small"}}>
            {this.props.cdata.map(function(contact) {
              return (
                <Tile separator={contact.separator}>
                  <Header direction="column" align="start">
                    <Box >
                      <UserIcon colorIndex="brand" size="large"/>
                    </Box>
                    <Box>
                      <Heading tag="h3" strong={true}>
                        {contact.title}
                      </Heading>
                    </Box>
                  </Header>
                  <Paragraph>
                    {contact.copy}<br/>
                    Email: <a href={"mailto:" + contact.email}>{contact.email}</a>
                  </Paragraph>
                </Tile>
                );
            })}
          </Tiles>
        </Box>
      </Box>
    );
  };
};
