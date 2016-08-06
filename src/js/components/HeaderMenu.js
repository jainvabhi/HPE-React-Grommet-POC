import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export default class HeaderMenu extends Component {
  render() {
    let menus = this.props.sss;

    return (
      <Menu direction="row">
        {menus.map(function(item) {
          return (
            <Anchor key={item.id} href={item.url}>{item.name}</Anchor>
            );
        })}
      </Menu>
    );
  };
};


HeaderMenu.propTypes = {
  menus: PropTypes.any.isRequired
};
