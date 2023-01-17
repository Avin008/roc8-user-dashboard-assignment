import TeamMember from "./TeamMember";

const TeamMoods = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="font-medium px-4 h-10 flex items-center">
        Team mood
      </div>
      <ul className="flex flex-col space-y-4">
        {[1, 2, 3, 4, 5].map((x) => (
          <TeamMember />
        ))}
      </ul>
    </div>
  );
};

export default TeamMoods;
