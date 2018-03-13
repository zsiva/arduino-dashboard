import React from 'react';
import classnames from 'classnames';
import { Grid, Container } from 'semantic-ui-react';
import { VictoryLine } from 'victory';
import { HUM_MAX, HUM_MIN } from '../../data/humidity.js';
import CustomChartGroup from '../CustomChartGroup';
import { Bar } from 'react-chartjs-2';
import { MONTH_NAMES } from '../../constants/charts';

const options = {
  title: {
    display: true,
    text: 'Humedad 2017',
  },
  maintainAspectRatio: false,
};

const bar = {
  labels: MONTH_NAMES,
  datasets: [
    {
      label: 'Min',
      backgroundColor: 'rgba(7,135,230,0.2)',
      borderColor: 'rgba(7,135,230,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(7,135,230,0.4)',
      hoverBorderColor: 'rgba(7,135,230,1)',
      data: [40, 48, 42, 32, 51, 55, 48],
    },
    {
      label: 'Min',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [80, 68, 80, 81, 56, 75, 90],
    },
  ],
};

export default function Humidity(props) {
  const { className } = props;
  return (
    <Container className={classnames('plants', className)} textAlign="center">
      <h1>Humedad</h1>
      <Grid celled>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <CustomChartGroup>
            <VictoryLine data={HUM_MAX} />
            <VictoryLine data={HUM_MIN} />
          </CustomChartGroup>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Bar data={bar} options={options} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
