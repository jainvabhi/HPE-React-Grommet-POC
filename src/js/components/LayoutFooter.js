import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

export default class LayoutFooter extends Component {
  render() {
    return(
      <Footer primary={true}  appCentered={true} direction="column" align="center" pad="small" colorIndex="light-2">
        <Box size="large" direction="row" pad={{"between": "small"}}>

          <Box size='small'>
              <Heading tag="h6" strong={true}>Corporate</Heading>
              <Menu>
                <Anchor href="#">Accessibility</Anchor>
                <Anchor href="#">Careers</Anchor>
                <Anchor href="/">Contact Us</Anchor>
                <Anchor href="#">Corporate Responsibility</Anchor>
                <Anchor href="#">Event</Anchor>
                <Anchor href="#">Hewlett Packard Labs</Anchor>
                <Anchor href="#">Investor Relations</Anchor>
                <Anchor href="#">Leadership</Anchor>
                <Anchor href="#">Newsroom</Anchor>
                <Anchor href="#">Sitemap</Anchor>
            </Menu>
          </Box>
          <Box size='small'>
              <Heading tag="h6" strong={true}>Partners</Heading>
              <Menu>
                <Anchor href="#">Find a Partner</Anchor>
                <Anchor href="#">Partner Programs</Anchor>
            </Menu>
          </Box>
          <Box size='small'>
              <Heading tag="h6" strong={true}>Social</Heading>
              <Menu>
                <Anchor href="#">LinkedIn</Anchor>
                <Anchor href="#">Facebook</Anchor>
                <Anchor href="#">Twitter</Anchor>
                <Anchor href="#">Youtube</Anchor>
            </Menu>
          </Box>
          <Box size='small'>
              <Heading tag="h6" strong={true}>Communities</Heading>
              <Menu>
                <Anchor href="#">Developer Forums</Anchor>
                <Anchor href="#">Enterprise Business</Anchor>
            </Menu>
          </Box>
          <Box size='small'>
              <Heading tag="h6" strong={true}>Customer Resources</Heading>
              <Menu>
                <Anchor href="#">Enterprise Store</Anchor>
                <Anchor href="#">Public Sector Store</Anchor>
                <Anchor href="#">Education and Training</Anchor>
                <Anchor href="/register">Email Singup</Anchor>
            </Menu>
          </Box>
          <Box size='small'>
              <Heading tag="h6" strong={true}>Legal</Heading>
              <Menu>
                <Anchor href="#">Privacy</Anchor>
                <Anchor href="#">Terms of Use</Anchor>
                <Anchor href="#">Cookies</Anchor>
            </Menu>
          </Box>

        </Box>
        <Box size="large" direction="row">
          <Paragraph size="small">© Copyright 2016 Hewlett Packard Enterprise Development LP</Paragraph>
        </Box>
      </Footer>
    );
  };
};
