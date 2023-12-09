import BarInfoCard, { BarInfoCardProps } from "app/components/BarInfoCard";
import "./index.css";

const App: React.FC = () => {
  const barInfoCardProps: BarInfoCardProps = {
    title: "Sessions By Device",
    labelName: "Channel",
    barLabelName: "Traffic (%)",
    percentageLabelName: "Value",
    barDataList: [
      {
        label: "Direct",
        valuePercentage: 23,
      },
      {
        label: "Direct",
        valuePercentage: 56,
      },
      {
        label: "Direct",
        valuePercentage: 12,
      },
    ],
  };
  return (
    <div className="app">
      <div className="app-content">
        <div className="app-left-pane"></div>
        <div className="app-right-pane">
          <BarInfoCard {...barInfoCardProps} />
        </div>
      </div>
    </div>
  );
};

export default App;
