import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { useState } from "react";
import './App.css';
import { Data } from "./utils/Data";

Chart.register(CategoryScale);

const fetchChartDataPieChart = async () => {
  const data = Data;
  console.log(data);
  return {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "Users Gained",
        data: data.flatMap((item) => [item.userGain]),
        backgroundColor: [
          "#A7C7E7",
          "#E6E6FA",
          "#FFE5B4",
          "#FFB6C1",
          "#B2E0B2"
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ]
  };
};

const fetchChartDataBarChart = async () => {
  const data = Data;
  console.log(data);
  return {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: "Users Lost",
        data: data.flatMap((item) => [item.userLost]),
        backgroundColor: [
          "#A7C7E7",
          "#E6E6FA",
          "#FFE5B4",
          "#FFB6C1",
          "#B2E0B2"
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ]
  };
};

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Losts between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}

function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Losts between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}

export default function App() {
  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Losts",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const refreshChartData = async () => {
    try {
      const pieData = await fetchChartDataPieChart();
      setPieChartData(pieData);
      const barData = await fetchChartDataBarChart();
      setBarChartData(barData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={refreshChartData}>Refresh Chart</button>
      {pieChartData.labels.length > 0 && <PieChart chartData={pieChartData} />}
      {barChartData.labels.length > 0 && <BarChart chartData={barChartData} />}
    </div>
  );
}
