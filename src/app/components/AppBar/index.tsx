import { ReactNode, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import "./index.css";

export type AppBarItem = {
  label: string;
  icon: ReactNode;
};

export type AppBarProps = {
  items: AppBarItem[];
};

const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const { items } = props;
  const [hover, setHover] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      className="app-bar"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="app-bar-icon">{<HiMiniBars3BottomLeft />}</div>
      <div className="app-bar-content">
        {items.map((item: AppBarItem, index: number) => {
          return (
            <div
              className="app-bar-content-wrapper"
              style={
                index === selectedIndex
                  ? { borderLeft: "0.35rem solid #573BFF" }
                  : {}
              }
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className="app-bar-content-item"
                style={
                  index === selectedIndex
                    ? { backgroundColor: "#573BFF", color: "white" }
                    : {}
                }
              >
                <div className="app-bar-icon-container">{item.icon}</div>
                <p
                  className={`app-bar-label-container ${
                    hover ? "app-bar-hover" : ""
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppBar;