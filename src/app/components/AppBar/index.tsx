import { ReactNode, useState } from "react";
import logo from "../../../assets/download.png";
import "./index.css";
import { Link } from "react-router-dom";

export type AppBarItem = {
  label: string;
  icon: ReactNode;
  href: string;
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
      <div className="app-bar-icon">
        {
          <Link to="/">
            <img alt="logo" src={logo} height={35} />
          </Link>
        }
      </div>
      <div className="app-bar-content">
        {items.map((item: AppBarItem, index: number) => {
          return (
            <Link
              to={item.href}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AppBar;
