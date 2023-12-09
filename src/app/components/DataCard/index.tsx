import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import './index.css';

export type DataCardProps ={
  property: string;
  value: number;
  change: number;
}

const DataCard: React.FC<DataCardProps> = (props: DataCardProps) => {
  return (
    <div className="data-card border-round">
      <div className="icon-block border-round">
        <FaRegUser className='icon' />
      </div>
      <p className="prop-name">{props.property}</p>
      <p className="value">{props.value}</p>
      <p className="change">{props.change}%</p>
    </div>
  );
};

export default DataCard;
