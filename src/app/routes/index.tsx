import ErrorLayout from "features/ErrorLayout";
import RootLayout from "features/RootLayout";
import AdminDash from "features/pages/AdminPage";
import Dashboard from "features/pages/Dashboard";
import Login from "features/pages/Login";
import EditorPage from "features/pages/EditorPage";
import GraphPage from "features/pages/GraphPage";
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
        <Route path="login" element={<Login />} />
        <Route path="custom-graph" element={<GraphPage />} />
        <Route path="editor" element={<EditorPage />} />
      </Route>
    </Route>
  )
);

export default AppRouter;
