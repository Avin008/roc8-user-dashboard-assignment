const TeamMember = () => {
  return (
    <div className="px-4 gap-2 space-y-1">
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1629709200392-f3051760e529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-sm font-medium">Andrea</h1>
          <p className="text-xs">UX Junior</p>
        </div>
      </div>
      <div>
        <input
          className="h-1 bg-gray-100"
          type="range"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default TeamMember;
