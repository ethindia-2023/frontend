import { GraphFormData } from "app/components/GraphForm";
import SplineCharts, { SplineChartProps } from "app/components/SplineChart";
import { useLocation } from "react-router-dom";
import "./index.css";
import BarChart, { BarChartProps } from "app/components/BarChart";

const GraphPage: React.FC = () => {
  const location = useLocation();

  let data = [];

  for (let ind = 1; ind < 10; ind++) {
    data.push({
      x: new Date(2023, 12, ind).toDateString(),
      y: Math.random() * 11,
    });
  }

  const formData: GraphFormData | undefined = location.state.data;
  const splineProps: SplineChartProps = {
    markerRadius: 10,
    strokeColors: ["#000000"],
    strokeWidth: 2,
    onMarkerClick: () => {
      console.log("clicked");
    },
    series: [
      {
        name: formData?.field ?? "data",
        data: data,
        color: "#FF0000",
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
      },
    ],
  };

  const barChartProps: BarChartProps = {
    markerRadius: 10,
    strokeColors: ["#000000"],
    strokeWidth: 2,
    onMarkerClick: () => {
      console.log("clicked");
    },
    series: [
      {
        name: formData?.field ?? "data",
        data: data,
        color: "#FF0000",
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
      },
    ],
  };

  const graphOptions: string[] = ["Bar Chart", "Spline Chart", "Line Chart"];

  return formData ? (
    <div className="graph-container">
      <div className="graph-title">{formData?.field ?? "Data"} vs time</div>
      {formData.graphOption === graphOptions[0] ? (
        <BarChart {...barChartProps} height={"60%"} width={"100%"} />
      ) : formData.graphOption === graphOptions[1] ? (
        <SplineCharts {...splineProps} height={"60%"} width={"100%"} />
      ) : formData.graphOption === graphOptions[2] ? (
        <SplineCharts
          isSpline={false}
          {...splineProps}
          height={"60%"}
          width={"100%"}
        />
      ) : (
        <div>Undefined graph type</div>
      )}
    </div>
  ) : (
    <div>No Options passed</div>
  );
};

export default GraphPage;
