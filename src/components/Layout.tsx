import Navbar from "./Navbar";
import StatusCard from "./StatusCard";
import TeamMoods from "./TeamMoods";
import {
  MdOutlineAdd,
  MdOutlineFileDownload,
  MdOutlineDateRange,
  MdOutlineFilterAlt,
} from "react-icons/md";
import BudgetStatus from "./BugetStatus";
import ProjectCard from "./ProjectCard";
import LineChart from "./LineChart";
import LineChartContainer from "./LineChartContainer";
import DoughnutChartContainer from "./DoughnutChartContainer";
import DoughnutChart from "./DoughnutChart";

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] h-screen w-full">
      <Navbar />
      <div className="grid h-full gap-5 grid-cols-6 mx-auto w-11/12 grid-rows-5 mt-20">
        <div className="col-span-5 grid row-span-1 grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((x) => (
            <StatusCard x={x} />
          ))}
        </div>
        <LineChartContainer>
          <LineChart />
        </LineChartContainer>
        <DoughnutChartContainer>
          <DoughnutChart />
        </DoughnutChartContainer>
        <TeamMoods />
      </div>
    </div>
  );
};

export default Layout;
