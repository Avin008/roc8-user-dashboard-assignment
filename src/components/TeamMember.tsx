const TeamMember = ({
  teamMemberData,
}: {
  teamMemberData: {
    id: number;
    img: string;
    name: string;
    degisnation: string;
    mood: number;
  };
}) => {
  return (
    <div className="px-4 gap-2 space-y-3">
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1629709200392-f3051760e529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-sm font-medium">
            {teamMemberData.name}
          </h1>
          <p className="text-xs">
            {teamMemberData.degisnation}
          </p>
        </div>
      </div>
      <div className="border relative flex items-center border-gray-300">
        <span className="absolute left-4 hover:cursor-pointer">
          😍
        </span>
      </div>
    </div>
  );
};

export default TeamMember;
