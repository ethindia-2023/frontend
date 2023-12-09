import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { SeriesData } from "../SplineChart";
import "./index.css";

export type BarChartProps = {
  series: SeriesData[];
  height?: number | string;
  width?: number | string;
  onMarkerClick?: VoidFunction;
  markerRadius?: number;
  strokeWidth?: number;
  strokeColors?: string[];
};

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
  const {
    series,
    height,
    width,
    onMarkerClick,
    markerRadius,
    // strokeWidth,
    // strokeColors,
  } = props;
  const apexOptions: ApexOptions = {
    chart: {
      type: "bar",
      zoom: {
        enabled: false,
        autoScaleYaxis: true,
      },
    },
    markers: {
      shape: "circle",
      onClick: onMarkerClick,
      radius: markerRadius,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      type: "datetime",
      labels: {
        formatter: (value, timestamp, opts) => {
          return opts.dateFormatter(new Date(timestamp!), "dd MMM");
        },
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <Chart
      className="bar-chart"
      options={apexOptions}
      series={series}
      height={height ?? "100%"}
      width={width ?? "100%"}
      type="bar"
    />
  );
};

export default BarChart;
