import { HiOutlineBell } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="h-14 z-20 text-white text-sm fixed bg-[#303645] flex items-center justify-between px-8 left-0 right-0">
      <span className="text-2xl font-medium tracking-widest">
        <span className="text-[#00BFAE]">H</span>
        <span className="tracking-widest">OURS</span>
      </span>
      <ul className="flex gap-6">
        <li className="hover:cursor-pointer border-b border-white">
          Dashboard
        </li>
        <li className="hover:cursor-pointer">Projects</li>
        <li className="hover:cursor-pointer">Team</li>
        <li className="hover:cursor-pointer">Clients</li>
        <li className="hover:cursor-pointer">Time</li>
        <li className="hover:cursor-pointer">Report</li>
      </ul>

      <ul className="flex items-center gap-5">
        <li className="hover:cursor-pointer">
          <span className="relative">
            <HiOutlineBell size={20} />
            <span className="h-1 w-1 right-0 p-1 top-0 bg-[#AD0019] absolute rounded-full"></span>
          </span>
        </li>
        <li className="flex gap-2 items-center">
          <div className="h-8 w-8 border border-gray-400 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
          </div>
          <div className="flex gap-1 items-center">
            Mario{" "}
            <MdKeyboardArrowDown
              className="hover:cursor-pointer"
              size={20}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
