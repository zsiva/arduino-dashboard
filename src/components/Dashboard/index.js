import React, { Component } from 'react';
import classnames from 'classnames';
import { Grid, Container } from 'semantic-ui-react';
import CustomLineChart from '../CustomLineChart';

import { TEMP_PLANT, HUM_PLANT } from '../../data/lineCharts.js';
import { TEMP_LIMIT, HUM_LIMIT } from '../../constants/charts';

export default class Dashboard extends Component {
  render() {
    const { className, data, ...props } = this.props;

    return (
      <Container className={classnames('About', className)} {...props}>
        <h1>Dashboard</h1>
        <h4>Charts for the year 2017</h4>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <CustomLineChart
                label="Temperature"
                data={TEMP_PLANT}
                domain={{ x: 0, y: 30 }}
                dangerLimit={TEMP_LIMIT}
              />
            </Grid.Column>
            <Grid.Column>
              <CustomLineChart
                label="Humidity"
                data={HUM_PLANT}
                domain={{ x: 0, y: 30 }}
                dangerLimit={HUM_LIMIT}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
