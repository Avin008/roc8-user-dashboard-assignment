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

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen absolute w-full">
      <Navbar />
      <div className="h-screen grid grid-cols-6 grid-rows-3 gap-8 mt-20 mx-auto w-11/12">
        <div className="col-span-5 grid h-40 grid-cols-5 gap-5 row-start-1 row-end-2">
          {[1, 2, 3, 4, 5].map((x) => (
            <StatusCard x={x} />
          ))}
        </div>
        <div className="row-start-1 row-end-3 col-span-1">
          <TeamMoods />
        </div>
        <div className="col-span-5">
          <BudgetStatus />
        </div>
      </div>
    </div>
  );
};

export default Layout;
