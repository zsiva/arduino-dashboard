import React from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
} from 'victory';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const tickValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const axisYears = {
  axis: { stroke: 'black', strokeWidth: 1 },
  ticks: {
    size: 10,
    stroke: 'black',
    strokeWidth: 1,
  },
  tickLabels: {
    fill: 'black',
    fontFamily: 'inherit',
    fontSize: 10,
  },
};

export default function CustomLineChart(props) {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryLabel x={25} y={10} text={props.label} />
      <VictoryAxis
        standalone={false}
        style={axisYears}
        tickValues={tickValues}
        tickFormat={x => monthNames[x - 1]}
      />
      <VictoryAxis
        dependentAxis
        domain={{
          y: [1, 12],
          x: [props.domain.x, props.domain.y],
        }}
        orientation="left"
        standalone={false}
      />
      {/* limit line */}
      <VictoryLine
        data={[{ x: 0, y: props.dangerLimit }, { x: 12, y: props.dangerLimit }]}
        domain={{
          x: [1, 12],
          y: [props.domain.x, props.domain.y],
        }}
        style={{ data: { stroke: '#0000FF', strokeWidth: 1.5 } }}
        scale={{ x: 'time', y: 'linear' }}
        standalone={false}
      />
      <VictoryBar
        style={{
          data: {
            fill: d => (d.y > props.dangerLimit ? '#000000' : '#c43a31'),
            stroke: d => (d.y > props.dangerLimit ? '#000000' : '#c43a31'),
          },
          parent: { border: '1px solid #ccc' },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={props.data}
      />
    </VictoryChart>
  );
}
