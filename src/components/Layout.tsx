import Navbar from "./Navbar";
import StatusCard from "./StatusCard";
import TeamMoods from "./TeamMoods";

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen absolute w-full">
      <Navbar />
      <div className="h-screen grid grid-cols-6 grid-rows-3 gap-8 mt-20 mx-auto w-11/12">
        <div className="col-span-5 grid h-40 grid-cols-5 gap-5 row-span-2">
          {[1, 2, 3, 4, 5].map((x) => (
            <StatusCard x={x} />
          ))}
        </div>
        <div className="row-span-2 col-span-1">
          <TeamMoods />
        </div>
      </div>
    </div>
  );
};

export default Layout;
