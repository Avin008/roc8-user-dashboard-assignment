import {
  MdGridView,
  MdOutlinePeople,
} from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import {
  AiOutlineSync,
  AiOutlineWarning,
} from "react-icons/ai";

const StatusCard = ({ x }: { x: number }) => {
  return (
    <div
      className={`w-full relative bg-white h-full flex items-center justify-center shadow-lg ${
        x === 4 && "bg-[#EB6482]"
      }`}
    >
      <div
        className={`flex flex-col gap-2 justify-center items-center ${
          x === 4 && "text-white"
        }`}
      >
        <h2 className="font-extrabold text-3xl">{x}</h2>
        <p>Total Projects</p>
      </div>
      <span className="absolute left-4 top-4">
        {x === 1 && (
          <MdGridView
            className="text-[#6DDDDC]"
            size={30}
          />
        )}
        {x === 2 && (
          <BsCheck2Circle
            className="text-[#6DDDDC]"
            size={30}
          />
        )}
        {x === 3 && (
          <AiOutlineSync
            className="text-[#6DDDDC]"
            size={30}
          />
        )}
        {x === 4 && (
          <AiOutlineWarning
            className="text-red-300"
            size={30}
          />
        )}
        {x === 5 && (
          <MdOutlinePeople
            className="text-[#6DDDDC]"
            size={30}
          />
        )}
      </span>
    </div>
  );
};

export default StatusCard;
