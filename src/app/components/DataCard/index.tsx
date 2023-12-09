import React, { ReactNode } from "react";
import "./index.css";

export type DataCardProps = {
  property: string;
  value: string;
  change: number;
  icon: ReactNode;
  iconColor: string;
  iconBackgroundColor: string;
};

const DataCard: React.FC<DataCardProps> = (props: DataCardProps) => {
  return (
    <div className="data-card border-round">
      <div
        className="icon-block border-round"
        style={{ backgroundColor: props.iconBackgroundColor }}
      >
        <div className="icon" style={{ color: props.iconColor }}>
          {props.icon}
        </div>
      </div>
      <p className="prop-name">{props.property}</p>
      <p className="value">{props.value}</p>
      <p className="change">
        {`${props.change > 0 ? "+" : ""}${props.change}`}%
      </p>
    </div>
  );
};

export default DataCard;
