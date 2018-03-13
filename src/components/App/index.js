import React, { Component } from 'react';
import './style.css';

import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import TemperatureContainer from '../Temperature';
import Humidity from '../Humidity';
import Wind from '../Wind';

import { TEMP_PLANT, HUM_PLANT } from '../../data/lineCharts.js';

export default class App extends Component {
  state = { page: 'temperatura' };

  handlePages = name => this.setState({ page: name });

  render() {
    return (
      <div className="app">
        <div className="app-intro">
          <Navigation handlePages={name => this.handlePages(name)} />
          {this.state.page === 'home' && <Dashboard />}
          {this.state.page === 'temperatura' && <TemperatureContainer data={TEMP_PLANT} />}
          {this.state.page === 'humedad' && <Humidity />}
          {this.state.page === 'viento' && <Wind />}
        </div>
      </div>
    );
  }
}
