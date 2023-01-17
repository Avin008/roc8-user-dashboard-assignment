import Navbar from "./Navbar";
import StatusCard from "./StatusCard";

const Layout = () => {
  return (
    <div className="bg-[#EFEFEF] h-screen absolute w-full">
      <Navbar />
      <div className="h-40 grid grid-cols-6 gap-8 mt-20 mx-auto w-11/12">
        {[1, 2, 3, 4, 5].map((x) => (
          <StatusCard x={x} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
