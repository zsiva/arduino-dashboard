import React, { Component } from 'react';
import classnames from 'classnames';
import { Table, Container } from 'semantic-ui-react';
import './style.css';
import CustomLineChart from '../CustomLineChart';

import { tempData, humidityData } from '../../data/lineCharts2.js';

export default class Dashboard extends Component {
  render() {
    const { className, data, ...props } = this.props;

    return (
      <Container className={classnames('About', className)} {...props}>
        <h1>Dashboard</h1>
        <h4>Charts for the year 2017</h4>
        <div className="halfContainer">
          <CustomLineChart
            label="Temperature"
            data={tempData}
            domain={{ x: 0, y: 30 }}
            dangerLimit={10}
          />
        </div>
        <div className="halfContainer">
          <CustomLineChart
            label="Humidity"
            data={humidityData}
            domain={{ x: 0, y: 30 }}
            dangerLimit={45}
          />
        </div>
      </Container>
    );
  }
}
