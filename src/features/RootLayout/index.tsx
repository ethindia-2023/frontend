import AppBar, { AppBarProps } from "app/components/AppBar";
import { MdHome } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import "./index.css";

const RootLayout: React.FC = () => {
  const appBarProps: AppBarProps = {
    items: [
      {
        icon: <MdHome />,
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: <RiAdminFill />,
        label: "Admin",
        href: "/admin",
      },
      {
        icon: <IoTerminal />,
        label: "code editor",
        href: "/editor",
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
