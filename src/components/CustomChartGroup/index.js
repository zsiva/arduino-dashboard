import React from 'react';
import { VictoryChart, VictoryGroup } from 'victory';

const ANIMATE_CONFIG = {
  duration: 1000,
  onLoad: { duration: 1000 },
};

export default function CustomChartGroup(props) {
  return (
    <VictoryChart>
      <VictoryGroup offset={20} colorScale={'qualitative'} animate={ANIMATE_CONFIG}>
        {props.children}
      </VictoryGroup>
    </VictoryChart>
  );
}
