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

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen absolute w-full">
      <Navbar />
      <div className="h-screen grid grid-cols-6 mb-10 grid-rows-3 gap-8 mt-20 mx-auto w-11/12">
        <div className="col-span-5 grid h-40 grid-cols-5 gap-5 row-start-1 row-end-2">
          {[1, 2, 3, 4, 5].map((x) => (
            <StatusCard x={x} />
          ))}
        </div>
        <div className="row-start-1 row-end-3 col-span-1">
          <TeamMoods />
        </div>
        <div className="col-span-6 row-start-3 row-end-4 h-36 space-y-5">
          <BudgetStatus />
          <div className="gap-5 h-full grid grid-cols-4">
            {[1, 2, 3, 4].map((x) => (
              <ProjectCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
