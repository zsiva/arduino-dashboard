import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { VictoryLine } from 'victory';
import { TEMP_MAX, TEMP_MIN } from '../../data/temperature.js';
import CustomChartGroup from '../CustomChartGroup';
import CustomLineChart from '../CustomLineChart';
import { TEMP_LIMIT } from '../../constants/charts';

export default function Temperature() {
  return (
    <Container textAlign="center">
      <h1>Temperatura</h1>
      <Grid celled>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <CustomChartGroup>
            <VictoryLine data={TEMP_MAX} />
            <VictoryLine data={TEMP_MIN} />
          </CustomChartGroup>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <CustomLineChart
            label="Temperatura"
            data={TEMP_MAX}
            domain={{ x: 0, y: 30 }}
            dangerLimit={TEMP_LIMIT}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
