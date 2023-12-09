import ErrorLayout from "features/ErrorLayout";
import RootLayout from "features/RootLayout";
import AdminDash from "features/pages/AdminPage";
import Dashboard from "features/pages/Dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const roles = [
  "Admin",
  "Developer",
  "Tester",
  "Product Manager",
  "Designer",
  "Marketing Manager",
  "Sales Manager",
];

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorLayout />}>
      <Route errorElement={<ErrorLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="admin" element={<AdminDash rolesArray={roles} />} />
      </Route>
    </Route>
  )
);

export default AppRouter;
