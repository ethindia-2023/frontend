import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './index.css';
import { ApexOptions } from 'apexcharts';

interface RadialChartsProps {
  value: number[];
}

const RadialCharts: React.FC<RadialChartsProps> = (props: RadialChartsProps) => {
  const {value} = props;
  const devices = ['Desktop', 'Mobiles', 'Tablets'];
  const sum :number = value[0] + value[1] + value[2];
  const percentage : number[]= [
    (value[0] / sum) * 100,
    (value[1] / sum) * 100,
    (value[2] / sum) * 100,
  ];
const chartSeries : ApexNonAxisChartSeries = [percentage[0], percentage[1], percentage[2]];
const chartOptions: ApexOptions={
  chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Sessions by Device',
          formatter: function (w: any) {
            return `${100}%`;
          },
        },
      },
      track: {
        margin: 12,
      },
    },
  },
  colors: ['#9035FE', '#FF704A', '#32CD32'],
  labels: devices,
  stroke: {
    lineCap: 'round',
  },
}

  return (
    <div className="chart-card">
      <div className='chart'>
        <ReactApexChart options={chartOptions} series={chartSeries} type="radialBar" height={450} width={450} />
      </div>
      <div className='values'>
        {chartOptions.labels?.map((label, index) => (
          <div className='device' key={index}>
            <div className='color'></div>
            <p className='radial-name'>{devices[index]}</p>
            <p className='radial-value'>{value[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadialCharts;
