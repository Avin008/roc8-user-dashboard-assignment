import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Under Budget", "On Budget", "Over Budget"],
  datasets: [
    {
      label: "# of Votes",
      data: [48, 33, 19],
      backgroundColor: ["#36E5BD", "#717CBF", "#B70017"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const DoughnutChart = () => {
  const centerText = {
    id: "centerText",
    beforeDraw: function (chart: any) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      ctx.font = "30px sans-serif";
      ctx.textBaseline = "top";
      var text = "5",
        textX = Math.round(
          (width - ctx.measureText(text).width) / 2
        ),
        textY = height / 2;
      ctx.fillText(text, textX, textY - 30);
      ctx.save();
      ctx.font = "15px sans-serif";
      ctx.textBaseline = "top";
      var text = "Total Projects",
        textX = Math.round(
          (width - ctx.measureText(text).width) / 2
        ),
        textY = height / 2;
      ctx.fillText(text, textX, textY + 5);
      ctx.save();
    },
  };

  return (
    <div className="w-full h-full relative">
      <Doughnut
        plugins={[centerText]}
        options={{
          aspectRatio: 1,
          cutout: 110,
          radius: 120,
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default DoughnutChart;
