import AppBar, { AppBarProps } from "app/components/AppBar";
import { FaWallet } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import "./index.css";

const RootLayout: React.FC = () => {
  const appBarProps: AppBarProps = {
    items: [
      {
        icon: <MdHome />,
        label: "Home",
      },
      {
        icon: <FaWallet />,
        label: "Wallet",
      },
      {
        icon: <RiDatabase2Line />,
        label: "Database",
      },
    ],
  };
  return (
    <>
      <AppBar {...appBarProps} />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
