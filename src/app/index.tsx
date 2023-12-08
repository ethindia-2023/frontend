import "./index.css";
import RadialCharts from "app/components/RadialChart";
const App: React.FC = () => {
  const chartParams:number[]= [100, 200, 300];
  return <div className="app"><RadialCharts value={chartParams}/></div>;
};

export default App;
