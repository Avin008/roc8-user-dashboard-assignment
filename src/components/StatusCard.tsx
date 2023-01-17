import { MdGridView } from "react-icons/md";

const StatusCard = ({ x }: { x: number }) => {
  return (
    <div className="w-full relative bg-white h-full flex items-center justify-center shadow-lg">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="font-black text-4xl">{x}</h2>
        <p>Total Projects</p>
      </div>
      <span className="absolute left-4 top-4">
        <MdGridView className="text-[#6DDDDC]" size={30} />
      </span>
    </div>
  );
};

export default StatusCard;
