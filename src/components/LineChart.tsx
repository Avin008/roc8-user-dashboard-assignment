import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "19 June",
  "20 June",
  "21 June",
  "22 June",
  "23 June",
  "24 June",
  "25 June",
];

const LineChart = () => {
  return (
    <div className="w-full h-full bg-white">
      <Line
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
          },
          borderColor: "black",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "days",
              data: [
                1500, 3500, 3200, 4000, 5000, 6000, 6500,
                7000,
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
