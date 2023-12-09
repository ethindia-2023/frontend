import { RouterProvider } from "react-router-dom";
import AppRouter from "app/routes";
import "./index.css";
const App: React.FC = () => {
  return (
    <div className="app">
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default App;
