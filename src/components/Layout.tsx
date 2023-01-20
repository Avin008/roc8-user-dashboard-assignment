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
import { appData, projectStatus } from "../data";

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] h-screen w-full">
      <Navbar />
      <div className="grid h-full gap-5 grid-cols-6 mx-auto w-11/12 grid-rows-5 mt-20">
        <div className="col-span-5 grid row-span-1 grid-cols-5 gap-5">
          {projectStatus.map((x) => (
            <StatusCard projectStatus={x} />
          ))}
        </div>
        <LineChartContainer>
          <LineChart />
        </LineChartContainer>
        <DoughnutChartContainer>
          <DoughnutChart />
        </DoughnutChartContainer>
        <TeamMoods />
        <BudgetStatus />
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto w-11/12 pb-5">
        {appData.map((x) => (
          <ProjectCard appData={x} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
