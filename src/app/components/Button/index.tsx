import React from "react";
import "./index.css";

export type ButtonProps = {
  label: string;
  onClick?: VoidFunction;
  buttonStyle?: React.CSSProperties;
  className?: string;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, buttonStyle, onClick, className } = props;
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className={`app-btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
