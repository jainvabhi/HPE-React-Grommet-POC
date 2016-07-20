import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export default class HeaderMenu extends Component {
  render() {
    return (
      <Menu direction="row">
        {this.props.menus.map(function(menu) {
          return (
            <Anchor href={menu.url}>{menu.name}</Anchor>
            );
        })}
      </Menu>
    );
  };
};
