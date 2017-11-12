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
        <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name="plants" active={activeItem === 'plants'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}
