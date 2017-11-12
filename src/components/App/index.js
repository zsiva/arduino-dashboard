import React, { Component } from 'react';
import './style.css';

import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Plants from '../Plants';

export default class App extends Component {
  state = { page: 'home' };

  handlePages = name => this.setState({ page: name });

  render() {
    console.log('page', this.state.page);
    return (
      <div className="App">
        <div className="App-intro">
          <Navigation handlePages={name => this.handlePages(name)} />
          {this.state.page === 'home' && <Dashboard />}
          {this.state.page === 'plants' && <Plants />}
        </div>
      </div>
    );
  }
}
