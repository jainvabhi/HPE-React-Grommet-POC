import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Link from 'grommet/components/Anchor';

import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import SVGIcon from 'grommet/components/SVGIcon';

import HeaderMenu from './HeaderMenu';


export default class LayoutHeader extends Component {
  render() {
    return (

      <Header appCentered={true} direction="column" align="center"  colorIndex="neutral-1" pad={{"horizontal": "medium"}}>
        <Box size="large" align="center" direction="row" justify="between">

            <Title responsive={true}>
              <Link href="/">
                <Box>
                  <SVGIcon viewBox="0 0 120 50" version="1.1" type="logo" a11yTitle="Logo - Hewlett Packard Enterprise" size="large">
                    <path id="path3346" fill="#04B188" d="M38.5 9.2H2.6V2.5h35.9V9.2L38.5 9.2zM41.1-0.1H0v11.8h41.1V-0.1z"/>
                    <polygon fill="#ffffff" points="2.6 26.3 7.2 26.3 7.2 31.2 9.7 31.2 9.7 19.4 7.2 19.4 7.2 24.1 2.6 24.1 2.6 19.4 0 19.4 0 31.2 2.6 31.2 "/>
                    <path fill="#ffffff" d="M15.6 31.4c1.2 0 2.1-0.2 2.8-0.7v-1.9h-0.1c-0.8 0.5-1.4 0.7-2.3 0.7 -1 0-2-0.3-2.3-1.6H19v-0.9c0-2.5-1.2-4.2-3.8-4.2 -2.3 0-4 1.8-4 4.4C11.2 29.8 12.9 31.4 15.6 31.4zM15.2 24.6c1 0 1.4 0.6 1.4 1.5h-3.1C13.8 24.9 14.5 24.6 15.2 24.6z"/>
                    <polygon fill="#ffffff" points="28 27.8 26.7 22.8 24.7 22.8 23.4 27.8 22 22.8 19.5 22.8 19.5 22.9 22.1 31.2 24.3 31.2 25.7 26.3 27 31.2 29.3 31.2 31.8 22.9 31.8 22.8 29.5 22.8 "/>
                    <path fill="#ffffff" d="M36 31.4c0.4 0 0.7-0.1 0.9-0.2v-2.1h0c-0.2 0.1-0.4 0.1-0.6 0.1 -0.5 0-0.7-0.2-0.7-0.8v-9.1h-2.5v9.3C33.1 30.6 34 31.4 36 31.4zM42 31.4c1.2 0 2.1-0.2 2.8-0.7v-1.9h-0.1c-0.8 0.5-1.4 0.7-2.3 0.7 -1 0-2-0.3-2.3-1.6h5.4v-0.9c0-2.5-1.2-4.2-3.8-4.2 -2.3 0-4 1.8-4 4.4C37.6 29.8 39.4 31.4 42 31.4zM41.7 24.6c1 0 1.4 0.6 1.4 1.5h-3.1C40.3 24.9 41 24.6 41.7 24.6zM55.7 20.5h-2.5v2.3H50v-2.3h-2.5v2.3h-1.3v2h1.3v3.5c0 2.1 0.8 3.1 2.8 3.1 0.7 0 1.2-0.1 1.5-0.2v-2h-0.1c-0.3 0.1-0.5 0.1-0.8 0.1 -0.8 0-1-0.3-1-1.1v-3.4h3.2v3.5c0 2.1 0.8 3.1 2.8 3.1 0.7 0 1.2-0.1 1.5-0.2v-2h-0.1c-0.3 0.1-0.5 0.1-0.8 0.1 -0.8 0-1-0.3-1-1.1v-3.4h1.8v-2h-1.8V20.5zM70.4 23.4c0-2.6-1.7-4-4.3-4h-4.4v11.8h2.6v-3.8h1.8C68.7 27.4 70.4 26 70.4 23.4zM64.3 25.2v-3.6h1.6c1.3 0 1.9 0.7 1.9 1.8 0 1.1-0.6 1.8-1.9 1.8H64.3zM74.5 22.6c-1.1 0-2.2 0.3-2.9 0.7v2h0.1c0.7-0.4 1.5-0.6 2.4-0.6 1.3 0 1.8 0.4 1.8 1.3v0.1c-0.6-0.2-1.3-0.3-1.9-0.3 -1.9 0-3.3 1.1-3.3 2.7 0 1.8 1.3 2.8 3 2.8 0.9 0 1.7-0.3 2.2-1v0.8h2.4V26C78.4 23.8 77 22.6 74.5 22.6zM75.9 28.6c-0.2 0.6-0.8 1-1.5 1 -0.7 0-1.2-0.3-1.2-1 0-0.7 0.5-1 1.3-1 0.5 0 1 0.1 1.4 0.3V28.6zM79.7 27c0 2.7 1.9 4.4 4.4 4.4 0.9 0 1.7-0.2 2.3-0.6v-2.1h-0.1c-0.5 0.4-1.2 0.7-1.9 0.7 -1.2 0-2.2-0.8-2.2-2.3s0.9-2.3 2.2-2.3c0.7 0 1.4 0.2 1.9 0.7h0.1v-2.1c-0.6-0.5-1.5-0.6-2.3-0.6C81.6 22.6 79.7 24.3 79.7 27z"/>
                    <polygon fill="#ffffff" points="90.4 26.1 90.4 19.4 88 19.4 88 31.2 90.4 31.2 90.4 27.4 92.9 31.2 95.8 31.2 95.8 31.1 92.8 26.7 95.8 22.9 95.8 22.8 93 22.8 "/>
                    <path fill="#ffffff" d="M100 22.6c-1.1 0-2.2 0.3-2.9 0.7v2h0.1c0.7-0.4 1.5-0.6 2.4-0.6 1.3 0 1.8 0.4 1.8 1.3v0.1c-0.6-0.2-1.3-0.3-1.9-0.3 -1.9 0-3.3 1.1-3.3 2.7 0 1.8 1.3 2.8 3 2.8 0.9 0 1.7-0.3 2.2-1v0.8h2.4V26C103.9 23.8 102.5 22.6 100 22.6zM101.4 28.6c-0.2 0.6-0.8 1-1.5 1 -0.7 0-1.2-0.3-1.2-1 0-0.7 0.5-1 1.3-1 0.5 0 1 0.1 1.4 0.3V28.6zM108.1 24.2v-1.4h-2.4v8.4h2.5v-4.8c0.2-0.9 0.8-1.3 1.6-1.3 0.5 0 0.8 0.1 1.1 0.2h0.1v-2.4c-0.1-0.1-0.5-0.2-0.8-0.2C109.2 22.7 108.5 23.3 108.1 24.2zM117.5 19.4v4.2c-0.5-0.6-1.3-1-2.4-1 -2.2 0-3.5 2-3.5 4.4 0 2.4 1.4 4.4 3.5 4.4 1.1 0 2-0.4 2.5-1.1v0.9h2.4V19.4H117.5zM117.5 28.4c-0.4 0.6-1 0.9-1.6 0.9 -1.1 0-1.8-0.8-1.8-2.2s0.7-2.2 1.8-2.2c0.6 0 1.2 0.3 1.6 0.9V28.4z"/>
                    <polygon fill="#ffffff" points="0 46.9 7.3 46.9 7.3 45.4 1.6 45.4 1.6 41.5 6.8 41.5 6.8 40.1 1.6 40.1 1.6 36.5 7.3 36.5 7.3 35.1 0 35.1 "/>
                    <path fill="#ffffff" d="M13.3 38.4c-1.2 0-2 0.6-2.5 1.4v-1.2H9.2v8.3h1.6v-5.5c0.3-0.9 1.1-1.5 2.1-1.5 1.2 0 1.7 0.8 1.7 1.8v5.2h1.6v-5.2C16.2 39.6 15.2 38.4 13.3 38.4zM20.4 36.4h-1.6v2.2h-1.4v1.3h1.4v4.6c0 1.6 0.8 2.5 2.7 2.5 0.4 0 0.8-0.1 1-0.2v-1.3h-0.1c-0.2 0.1-0.5 0.1-0.7 0.1 -0.9 0-1.4-0.3-1.4-1.3v-4.5h2.1v-1.3h-2.1V36.4zM27.3 38.4c-2.2 0-3.8 1.8-3.8 4.4 0 2.6 1.7 4.2 4.1 4.2 1 0 1.9-0.2 2.6-0.7v-1.4h-0.1c-0.7 0.5-1.4 0.8-2.3 0.8 -1.5 0-2.6-0.8-2.7-2.5h5.7v-0.7C30.8 40 29.6 38.4 27.3 38.4zM25.2 41.9c0.2-1.3 1-2.2 2.2-2.2 1.3 0 1.9 0.9 1.9 2.2H25.2zM34.2 39.8v-1.3h-1.6v8.3h1.6v-5.4c0.3-0.9 1-1.5 1.8-1.5 0.4 0 0.8 0.1 1 0.2h0.1v-1.5c-0.1-0.1-0.5-0.1-0.8-0.1C35.4 38.4 34.6 39 34.2 39.8zM42.4 38.4c-1 0-1.9 0.5-2.3 1.1v-0.9h-1.6v11.5h1.6v-4.1c0.4 0.6 1.3 1.1 2.3 1.1 2.5 0 3.8-2 3.8-4.3C46.2 40.4 44.9 38.4 42.4 38.4zM42.2 45.6c-0.8 0-1.6-0.5-2.1-1.3v-3.2c0.4-0.8 1.2-1.3 2.1-1.3 1.5 0 2.5 1.2 2.5 2.9C44.6 44.4 43.7 45.6 42.2 45.6zM49.6 39.8v-1.3h-1.6v8.3h1.6v-5.4c0.3-0.9 1-1.5 1.8-1.5 0.4 0 0.8 0.1 1 0.2h0.1v-1.5c-0.1-0.1-0.5-0.1-0.8-0.1C50.8 38.4 50 39 49.6 39.8zM54.8 35.2c-0.5 0-1 0.4-1 1 0 0.5 0.5 1 1 1 0.5 0 1-0.4 1-1C55.8 35.6 55.3 35.2 54.8 35.2z"/>
                    <rect x="54" y="38.6" fill="#ffffff" width="1.6" height="8.3"/>
                    <path fill="#ffffff" d="M61.1 42c-1.3-0.4-1.9-0.6-1.9-1.3 0-0.6 0.5-1 1.5-1 1 0 1.8 0.3 2.5 0.9h0.1v-1.5c-0.7-0.5-1.6-0.7-2.5-0.7 -1.7 0-3 0.9-3 2.5 0 1.6 1.3 2 2.5 2.4 1.3 0.4 2 0.6 2 1.3 0 0.7-0.8 1.1-1.7 1.1 -1 0-2-0.3-2.7-0.9h-0.1v1.5c0.6 0.5 1.7 0.8 2.8 0.8 1.8 0 3.2-0.9 3.2-2.6C63.7 42.9 62.3 42.4 61.1 42zM68.8 38.4c-2.2 0-3.8 1.8-3.8 4.4 0 2.6 1.7 4.2 4.1 4.2 1 0 1.9-0.2 2.6-0.7v-1.4h-0.1c-0.7 0.5-1.4 0.8-2.3 0.8 -1.5 0-2.6-0.8-2.7-2.5h5.7v-0.7C72.3 40 71.1 38.4 68.8 38.4zM66.6 41.9c0.2-1.3 1-2.2 2.2-2.2 1.3 0 1.9 0.9 1.9 2.2H66.6z"/>
                  </SVGIcon>
                </Box>
              </Link>
            </Title>

            <HeaderMenu menus={menuJSON} />

            <Box pad="small">
              <Search dropAlign={{"right": "right"}} placeholder="search" />
            </Box>

        </Box>
      </Header>
    );
  };
};


var menuJSON = [
  {
    name: "Solutions",
    url: "http://www.google.com"
  },
  {
    name: "Services",
    url: "http://www.google.com"
  },
  {
    name: "Products",
    url: "http://www.google.com"
  },
  {
    name: "About Us",
    url: "http://www.google.com"
  },
  {
    name: "Support",
    url: "http://www.google.com"
  }
];
