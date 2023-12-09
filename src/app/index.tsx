import "./index.css";
import AppBar, { AppBarProps } from "app/components/AppBar";
import { MdHome } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";
import Dashboard from "../features/pages/Dashboard";
import AdminDash from "../features/pages/AdminPage";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes";
const App: React.FC = () => {
  const roles = [
    "Admin",
    "Developer",
    "Tester",
    "Product Manager",
    "Designer",
    "Marketing Manager",
    "Sales Manager",
  ];
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
    <div className="app">
      <AppBar {...appBarProps} />
      <div className="app-content">
        {/* <AdminDash rolesArray={roles} /> */}
        <RouterProvider router={AppRouter} />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
