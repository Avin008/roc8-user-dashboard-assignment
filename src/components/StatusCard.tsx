import {
  MdGridView,
  MdOutlinePeople,
} from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import {
  AiOutlineSync,
  AiOutlineWarning,
} from "react-icons/ai";

type ProjectStatus = {
  projectStatus: {
    id: number;
    status: number;
    name: string;
  };
};

const StatusCard = ({ projectStatus }: ProjectStatus) => {
  return (
    <div
      className={`w-full relative bg-white h-full flex items-center justify-center shadow-lg ${
        projectStatus.id === 4 && "bg-[#EB6482]"
      }`}
    >
      <div
        className={`flex flex-col gap-2 justify-center items-center ${
          projectStatus.id === 4 && "text-white"
        }`}
      >
        <h2 className="font-extrabold text-3xl">
          {projectStatus.status}
        </h2>
        <p>{projectStatus.name}</p>
      </div>
      <span className="absolute left-4 top-2">
        {projectStatus.id === 1 && (
          <MdGridView
            className="text-[#6DDDDC]"
            size={25}
          />
        )}
        {projectStatus.id === 2 && (
          <BsCheck2Circle
            className="text-[#6DDDDC]"
            size={25}
          />
        )}
        {projectStatus.id === 3 && (
          <AiOutlineSync
            className="text-[#6DDDDC]"
            size={25}
          />
        )}
        {projectStatus.id === 4 && (
          <AiOutlineWarning
            className="text-red-300"
            size={25}
          />
        )}
        {projectStatus.id === 5 && (
          <MdOutlinePeople
            className="text-[#6DDDDC]"
            size={25}
          />
        )}
      </span>
    </div>
  );
};

export default StatusCard;
