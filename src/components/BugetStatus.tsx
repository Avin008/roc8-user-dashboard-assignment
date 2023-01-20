import {
  MdOutlineAdd,
  MdOutlineFileDownload,
  MdOutlineDateRange,
  MdOutlineFilterAlt,
} from "react-icons/md";
const BudgetStatus = () => {
  return (
    <div className="flex gap-5 col-span-6 items-center">
      <span className="font-medium text-xl">
        Budget status
      </span>
      <span className="flex gap-3">
        <button className="border bg-[#008075] text-white text-xs flex items-center border-gray-700 p-1 px-2 rounded-sm">
          <MdOutlineAdd size={15} /> Add New Project
        </button>
        <button className="border border-gray-700 flex text-[#008075] text-xs p-1 px-2 items-center rounded-sm">
          <MdOutlineFileDownload size={15} /> Download
          report
        </button>
        <button className="border flex border-gray-700 text-[#008075] text-xs p-1 px-2 items-center rounded-sm">
          <MdOutlineDateRange size={15} />{" "}
          dd/mm/yyyy-dd/mm/yy
        </button>
        <button className="border flex items-center text-[#008075] border-gray-700 p-1 px-2 rounded-sm">
          <MdOutlineFilterAlt size={15} /> Filter
        </button>
      </span>
    </div>
  );
};

export default BudgetStatus;
