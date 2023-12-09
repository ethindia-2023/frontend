import React from 'react';
import './index.css';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className='app-btn'>
      {props.label}
    </button>
  );
};

export default Button;
