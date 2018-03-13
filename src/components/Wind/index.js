import React from 'react';
import classnames from 'classnames';
import { Grid, Container } from 'semantic-ui-react';
import { VictoryBar, VictoryLine } from 'victory';
import { HUM_MAX, HUM_MIN } from '../../data/humidity.js';
import CustomChartGroup from '../CustomChartGroup';
import { Radar } from 'react-chartjs-2';
import { TEMP_LIMIT, MONTH_NAMES } from '../../constants/charts';

const options = {
  title: {
    display: true,
    text: 'Viento 2017',
  },
  maintainAspectRatio: false,
};

const radar = {
  labels: ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'],
  datasets: [
    {
      label: 'Octubre',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40, 32],
    },
    {
      label: 'Noviembre',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100, 19],
    },
    {
      label: 'Diciembre',
      backgroundColor: 'rgba(7,135,230,0.2)',
      borderColor: 'rgba(7,135,230,1)',
      pointBackgroundColor: 'rgba(7,135,230,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(7,135,230,1)',
      data: [18, 38, 25, 19, 56, 27, 100, 19],
    },
  ],
};

export default function Wind(props) {
  const { className } = props;
  return (
    <Container className={classnames('plants', className)} textAlign="center">
      <h1>Viento</h1>

      <Radar data={radar} options={options} />
    </Container>
  );
}
