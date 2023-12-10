import BarInfoCard, { BarInfoCardProps } from "app/components/BarInfoCard";
import "./index.css";
import SplineCharts, { SplineChartProps } from "app/components/SplineChart";
import DataCard, { DataCardProps } from "app/components/DataCard";
import { LuUsers } from "react-icons/lu";
import DayAnalytics, { DayAnalyticsProps } from "app/components/DayAnalytics";
import RadialCharts, { RadialChartsProps } from "app/components/RadialChart";
import Button from "app/components/Button";
import { useEffect, useState } from "react";
import Modal from "app/components/Modal";
import GraphForm, {
  GraphFormData,
  GraphFormProps,
} from "app/components/GraphForm";
import { IoMdPulse } from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import { TbCloudDataConnection } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [barDataList, setBarDataList] = useState<
    BarInfoCardProps["barDataList"]
  >([
    {
      label: "Total Gas",
      valuePercentage: 0,
    },
    {
      label: "Total Tokens",
      valuePercentage: 0,
    },
    {
      label: "Total Revenue",
      valuePercentage: 0,
    },
  ]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/total24value").then((res) => {
      console.log(res.data);
      const total = res.data.result.totalGas + 1.1 * res.data.result.total;
      setBarDataList([
        {
          label: "Total Gas",
          valuePercentage: parseFloat(
            ((res.data.result.totalGas / total) * 100).toPrecision(1)
          ),
        },
        {
          label: "Total Tokens",
          valuePercentage: parseFloat(
            ((res.data.result.total / total) * 100).toPrecision(1)
          ),
        },
        {
          label: "Total Revenue",
          valuePercentage: parseFloat(
            (((0.1 * res.data.result.total) / total) * 100).toPrecision(1)
          ),
        },
      ]);
    });
  }, []);
  const barInfoCardProps: BarInfoCardProps = {
    title: "Daily Volume at a Glance",
    labelName: "Metric",
    barLabelName: "Tokens (%)",
    percentageLabelName: "Value",
    barDataList: barDataList,
  };

  let data = [];

  for (let ind = 1; ind < 10; ind++) {
    data.push({
      x: new Date(2023, 12, ind).toDateString(),
      y: Math.random() * 11,
    });
  }

  const splineProps: SplineChartProps = {
    markerRadius: 10,
    strokeColors: ["#000000"],
    strokeWidth: 2,
    height: 500,
    onMarkerClick: () => {
      console.log("clicked");
    },
    series: [
      {
        name: "data",
        data: data,
        color: "#FF0000",
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
      },
    ],
  };

  const datCardPropsList: DataCardProps[] = [
    {
      property: "Users",
      value: "72.6k",
      change: 25,
      icon: <LuUsers />,
      iconBackgroundColor: "#EAF1FE",
      iconColor: "#3C79FE",
    },
    {
      property: "Sessions",
      value: "87.2k",
      change: 28,
      icon: <TbCloudDataConnection />,
      iconBackgroundColor: "#FEF1EC",
      iconColor: "#F26E4C",
    },
    {
      property: "Bounce Rate",
      value: "26.3%",
      change: -47,
      icon: <IoMdPulse />,
      iconBackgroundColor: "#ECE8FF",
      iconColor: "#4422F9",
    },
    {
      property: "Session Duration",
      value: "2m 18s",
      change: 13,
      icon: <LuTimerReset />,
      iconBackgroundColor: "#E8FBF7",
      iconColor: "#24D7A4",
    },
  ];

  const dayAnalysisPropsList: DayAnalyticsProps[] = [
    {
      label: "Users",
      today: 5461,
      expected: 8085,
      color: "#553AFF",
    },
    {
      label: "Gas fee",
      today: 120,
      expected: 140,
      color: "#FF704B",
    },
  ];

  const radialChartProps: RadialChartsProps = {
    value: [20, 60, 10],
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onModelClose = () => {
    setModalOpen(false);
  };

  let graphData = [];

  for (let ind = 1; ind < 10; ind++) {
    graphData.push({
      x: new Date(2023, 12, ind).toDateString(),
      y: Math.random() * 11,
    });
  }

  const navigate = useNavigate();

  const graphProps: GraphFormProps = {
    dataFields: ["Gas fees", "Transactions", "Count"],
    graphOptions: ["Bar Chart", "Spline Chart", "Line Chart"],
    onSubmit: (formData: GraphFormData) => {
      navigate("/custom-graph", {
        state: {
          data: formData,
        },
      });
      setModalOpen(false);
    },
  };

  return (
    <>
      <div className="app-left-pane">
        <Modal
          children={<GraphForm {...graphProps} />}
          isOpen={modalOpen}
          modalDescription="create graph from passed data"
          modalTitle="Create new Custom Graph"
          modalIcon={<MdOutlineAutoGraph />}
          onClose={onModelClose}
          hasCloseBtn={true}
        />
        <SplineCharts {...splineProps} />
        <div className="data-card-container">
          {datCardPropsList.map((props: DataCardProps) => (
            <DataCard {...props} />
          ))}
        </div>
        <div className="day-analytic-card-container">
          {dayAnalysisPropsList.map((props: DayAnalyticsProps) => (
            <DayAnalytics {...props} />
          ))}
        </div>
      </div>
      <div className="app-right-pane">
        <RadialCharts {...radialChartProps} />
        <BarInfoCard {...barInfoCardProps} />
        <div className="custom-graph-section">
          <div className="custom-graph-section-content">
            <div className="custom-graph-section-title">
              Create Custom Graph
            </div>
            <div className="custom-graph-section-description">
              Create custom graph from the data emitted from your contract
              transactions, it can help you visualize different parameters and
              trends for your customized use case
            </div>
          </div>
          <Button
            className="custom-graph-button"
            label="Create Graph"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
