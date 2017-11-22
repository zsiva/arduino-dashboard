import React from 'react';
import classnames from 'classnames';
import { Grid, Container } from 'semantic-ui-react';
import { VictoryBar, VictoryLine } from 'victory';
import { TEMP_PLANT, TEMP_PLANT2 } from '../../data/lineCharts.js';
import CustomChartGroup from '../CustomChartGroup';

export default function TemperatureContainer(props) {
  const { className } = props;
  return (
    <Container className={classnames('plants', className)} textAlign="center">
      <h1>Temperature</h1>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <CustomChartGroup>
              <VictoryLine data={TEMP_PLANT} />
              <VictoryLine data={TEMP_PLANT2} />
            </CustomChartGroup>
          </Grid.Column>
          <Grid.Column>
            <CustomChartGroup>
              <VictoryBar data={TEMP_PLANT} />
              <VictoryBar data={TEMP_PLANT2} />
            </CustomChartGroup>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
