import "./index.css";

export type BarData = {
  label: string;
  valuePercentage: number;
};

export type BarInfoCardProps = {
  title: string;
  labelName: string;
  barLabelName: string;
  percentageLabelName: string;
  barDataList: BarData[];
};

const BarInfoCard: React.FC<BarInfoCardProps> = (props: BarInfoCardProps) => {
  const { title, labelName, barLabelName, percentageLabelName, barDataList } =
    props;

  const colorsList = ["#9035FE", "#FF704A", "#1FC998"];
  return (
    <div className="bar-card-container">
      <div className="bar-card-title">{title}</div>
      <div className="bar-card-content-container">
        <div className="bar-card-data-header">{labelName}</div>
        <div className="bar-card-data-header">{barLabelName}</div>
        <div className="bar-card-data-header">{percentageLabelName}</div>
        {barDataList.map((barData: BarData, index: number) => {
          return (
            <>
              <div className="bar-card-data">{barData.label}</div>
              <div className="bar-card-bar-track">
                <div
                  className="bar-card-progress"
                  style={{
                    backgroundColor: colorsList[index % 3],
                    width: `${barData.valuePercentage}%`,
                  }}
                />
              </div>
              <div className="bar-card-data">{barData.valuePercentage}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BarInfoCard;
