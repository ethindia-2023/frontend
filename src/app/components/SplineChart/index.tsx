import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export type SplineChartProps = {
  series: SeriesData[];
  height?: number | string;
  onMarkerClick?: VoidFunction;
  markerRadius?: number;
  strokeWidth?: number;
  strokeColors?: string[];
};

export type SeriesData = {
  data: { x: number | string; y: number; strokeColor?: string }[];
  name: string;
  color?: string;
  fill?: ApexFill;
};

const SplineCharts: React.FC<SplineChartProps> = (props: SplineChartProps) => {
  const {
    series,
    height,
    onMarkerClick,
    markerRadius,
    strokeWidth,
    strokeColors,
  } = props;

  const apexOptions: ApexOptions = {
    chart: {
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: strokeWidth,
      curve: "smooth",
      fill: {
        type: "solid",
        colors: strokeColors,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.3,
        stops: [0, 80, 100],
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: (value, timestamp, opts) => {
          return opts.dateFormatter(new Date(timestamp!), "dd MMM");
        },
      },
    },
  };

  return (
    <Chart options={apexOptions} series={series} height={height} type="area" />
  );
};

export default SplineCharts;
