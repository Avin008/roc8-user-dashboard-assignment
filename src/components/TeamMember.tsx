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
  const expressMoodWithEmoji = (
    mood: number
  ): { emoji: string; position: string } | undefined => {
    if (mood >= 10 && mood <= 20) {
      return { emoji: "😠", position: "-left-2" };
    } else if (mood >= 20 && mood <= 30) {
      return { emoji: "😕", position: "left-6" };
    } else if (mood >= 30 && mood <= 40) {
      return { emoji: "😠", position: "left-21" };
    } else if (mood >= 40 && mood <= 50) {
      return { emoji: "😐", position: "left-14" };
    } else if (mood >= 50 && mood <= 60) {
      return { emoji: "😠", position: "left-10" };
    } else if (mood >= 60 && mood <= 70) {
      return { emoji: "😠", position: "left-14" };
    } else if (mood >= 70 && mood <= 80) {
      return { emoji: "😐", position: "left-24" };
    } else if (mood >= 80 && mood <= 90) {
      return { emoji: "😠", position: "left-20" };
    } else if (mood >= 90 && mood <= 100) {
      return { emoji: "😁", position: "left-32" };
    }
  };

  const mood = expressMoodWithEmoji(teamMemberData.mood);

  return (
    <div className="px-4 gap-2 space-y-3">
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={teamMemberData.img}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-sm font-medium">
            {teamMemberData.name}
          </h1>
          <p className="text-xs font-medium text-gray-500">
            {teamMemberData.degisnation}
          </p>
        </div>
      </div>
      <div className="border relative h-1 flex items-center bg-gray-100 border-gray-300">
        <span
          className={`absolute ${mood?.position} hover:cursor-pointer`}
        >
          {mood?.emoji}
        </span>
      </div>
    </div>
  );
};

export default TeamMember;
