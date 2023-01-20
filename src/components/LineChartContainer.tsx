import React, { useState } from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

const LineChartContainer = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white col-span-3 row-span-3 p-2 w-full h-full">
      <div className="flex justify-between">
        <div className="flex flex-col text-xs leading-4">
          <span>Total Revenue</span>
          <span className="font-normal text-gray-400">
            Cost £
          </span>
        </div>
        <div className="flex items-start text-sm font-normal gap-2">
          <span>week</span>
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
          <span>Month</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LineChartContainer;
