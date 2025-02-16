import { Data } from "../utils/Data.js";

export const fetchChartDataPieChart = async () => {
  const data = Data;
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