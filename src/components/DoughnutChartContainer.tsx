import React, { useState } from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

const DoughnutChartContainer = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white col-span-2 p-2 w-full h-full">
      <div className="flex justify-between">
        <div className="flex flex-col text-xs leading-4">
          <span>Budget</span>
        </div>
        <div className="flex items-start text-sm font-normal gap-2">
          <span>Profitiblity</span>
          {toggle ? (
            <span
              onClick={() => setToggle((prev) => !prev)}
            >
              <BsToggle2On
                className="text-gray-400 transition-all hover:cursor-pointer"
                size={20}
              />
            </span>
          ) : (
            <span>
              <BsToggle2Off
                className="text-gray-400 transition-all hover:cursor-pointer"
                size={20}
                onClick={() => setToggle((prev) => !prev)}
              />
            </span>
          )}
          <span>Status</span>
        </div>
      </div>
      {/* {children} */}
    </div>
  );
};

export default DoughnutChartContainer;
