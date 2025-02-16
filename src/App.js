import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import './App.css';
import { BarChart } from "./components/BarChart.js";
import { PieChart } from "./components/PieChart.js";
import { fetchChartDataPieChart } from "./services/PieChart.service.js";
import { fetchChartDataBarChart } from "./services/BarChart.service.js";
import LineChart from "./components/LineChart.js";

Chart.register(CategoryScale);

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

  const [lineChartData, setLineChartData] = useState({
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
      const lineData = await fetchChartDataBarChart();
      setLineChartData(lineData)
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    refreshChartData();
  })

  return (
    <>
    <div className="App">
      <div className="flex-container">
        {pieChartData.labels.length > 0 && <PieChart chartData={pieChartData} />}
        {barChartData.labels.length > 0 && <BarChart chartData={barChartData} />}
        {lineChartData.labels.length > 0 && <LineChart chartData={lineChartData} />}
      </div>
    </div>
    </>
  );
}
