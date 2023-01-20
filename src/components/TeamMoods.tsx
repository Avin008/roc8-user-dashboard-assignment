import { teamMembers } from "../data";
import TeamMember from "./TeamMember";

const TeamMoods = () => {
  return (
    <div className="bg-white col-start-6  row-start-1 row-end-5 w-full h-full">
      <div className="font-medium px-4 h-10 flex items-center">
        Team mood
      </div>
      <ul className="flex flex-col space-y-8">
        {teamMembers.map((teamMemberData) => (
          <TeamMember teamMemberData={teamMemberData} />
        ))}
      </ul>
    </div>
  );
};

export default TeamMoods;
