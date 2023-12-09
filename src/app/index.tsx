import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes";

const App: React.FC = () => {
  return (
    <div className="app">
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default App;
