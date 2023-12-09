import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";
import { ApexOptions } from "apexcharts";

export type DayAnalyticsProps = {
  today: number;
  expected: number;
  label: string;
};

const DayAnalytics: React.FC<DayAnalyticsProps> = (
  props: DayAnalyticsProps
) => {
  const { today, expected, label } = props;

  const percentage = parseInt(((today / expected) * 100).toFixed(0));

  const chartOptions: ApexOptions = {
    stroke: {
      lineCap: "round",
    },
    chart: {
      height: 25,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
      },
    },
    labels: [label],
    colors: ["#9035FE"],
  };
  const chartSeries: ApexNonAxisChartSeries = [percentage];

  return (
    <div className="day-card">
      <div className="day-data">
        <p className="day-value">{today}</p>
        <br />
        <p className="day-name">Today</p>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={200}
      />
      <div className="day-data">
        <p className="day-value">{expected}</p>
        <br />
        <p className="day-name">Expected</p>
      </div>
    </div>
  );
};

export default DayAnalytics;
