import React from 'react';
import classnames from 'classnames';
import { Grid, Container } from 'semantic-ui-react';
import { VictoryBar, VictoryLine } from 'victory';
import { TEMP_MAX, TEMP_MIN } from '../../data/temperature.js';
import CustomChartGroup from '../CustomChartGroup';
import { Line } from 'react-chartjs-2';
import CustomLineChart from '../CustomLineChart';
import { TEMP_LIMIT, MONTH_NAMES } from '../../constants/charts';

const line = {
  labels: MONTH_NAMES,
  ticks: {
    autoSkip: false,
  },
  datasets: [
    {
      label: 'Temperatura 2017',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 18, 22, 23, 27, 33, 35, 30, 24, 15, 12, 7],
    },
    {
      label: 'Temperatura Min 2017',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#f00',
      borderColor: '#f00',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#f00',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [7, 13, 15, 18, 20, 25, 25, 22, 19, 12, 11, 5],
    },
  ],
};

export default function TemperatureContainer(props) {
  return (
    <Container textAlign="center">
      <h1>Temperatura</h1>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={8}>
            <CustomChartGroup>
              <VictoryLine data={TEMP_MAX} />
              <VictoryLine data={TEMP_MIN} />
            </CustomChartGroup>
          </Grid.Column>
          <Grid.Column width={8}>
            <CustomLineChart
              label="Temperatura"
              data={TEMP_MAX}
              domain={{ x: 0, y: 30 }}
              dangerLimit={TEMP_LIMIT}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
