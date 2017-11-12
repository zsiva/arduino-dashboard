import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Dashboard extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
