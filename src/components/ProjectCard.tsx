const ProjectCard = ({ x }: { x: number }) => {
  return (
    <div className="h-full w-full shadow-md bg-white pb-3">
      <div className="flex justify-between p-4">
        <div className="">
          <h1 className="font-medium text">
            Insurance App
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Verti
          </p>
        </div>
        <div className="w-10 h-10 rounded-full border border-black">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1673762482215-33acd768cb46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="px-4">
        <span className="text-xs font-medium grid grid-cols-2 text-gray-400">
          Total Budget
          <span>70.000 £</span>
        </span>
        <span className="text-xs font-medium flex gap-5 text-gray-400">
          Profitiblity (100%)
          <span>70.000 £</span>
        </span>
      </div>
      <div
        className={`border mt-3 border-gray-400 h-4 rounded-full mx-4 ${
          x === 2 && "bg-[#FAE4B3]"
        }`}
      >
        <div
          className={`bg-red-500 w-[90%] h-full rounded-full ${
            x === 3 && "bg-[#C78C0E]"
          }`}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-[10px] px-4">
        <span>Actual hours: 1.100</span>
        <span className="font-medium">
          100 hours over budget!
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
