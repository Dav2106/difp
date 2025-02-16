import { Data } from "../utils/Data.js";

export const fetchChartDataBarChart = async () => {
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