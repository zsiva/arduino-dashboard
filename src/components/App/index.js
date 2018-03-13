import React, { Component } from 'react';
import './style.css';

import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Temperature from '../Temperature';
import Humidity from '../Humidity';
import Wind from '../Wind';
import Map from '../Map';

export default class App extends Component {
  state = { page: 'temperatura' };

  handlePages = name => this.setState({ page: name });

  render() {
    return (
      <div className="app">
        <div className="app-intro">
          <Navigation handlePages={name => this.handlePages(name)} />
          {this.state.page === 'home' && <Dashboard />}
          {this.state.page === 'temperatura' && <Temperature />}
          {this.state.page === 'humedad' && <Humidity />}
          {this.state.page === 'viento' && <Wind />}
          {this.state.page === 'mapa' && <Map />}
        </div>
      </div>
    );
  }
}
