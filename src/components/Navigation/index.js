import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => {
    this.props.handlePages(name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing>
        <Menu.Item
          name="temperatura"
          active={activeItem === 'temperatura'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="humedad"
          active={activeItem === 'humedad'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name="viento" active={activeItem === 'viento'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
