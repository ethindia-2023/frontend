import SplineCharts, { SplineChartProps } from "app/components/SplineChart";
import "./index.css";

const App: React.FC = () => {
  let data = [];

  for (let ind = 1; ind < 10; ind++) {
    data.push({
      x: new Date(2023, 12, ind).toDateString(),
      y: Math.random() * 11,
    });
    console.log(data);
  }

  const splineProps: SplineChartProps = {
    markerRadius: 10,
    strokeColors: ["#000000"],
    strokeWidth: 2,
    height: 500,
    onMarkerClick: () => {
      console.log("clicked");
    },
    series: [
      {
        name: "data",
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
  return (
    <div className="app">
      <SplineCharts {...splineProps} />
    </div>
  );
};

export default App;
