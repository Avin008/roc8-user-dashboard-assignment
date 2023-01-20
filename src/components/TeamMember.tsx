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
      return { emoji: "😠", position: "left-6" };
    } else if (mood >= 30 && mood <= 40) {
      return { emoji: "😠", position: "left-21" };
    } else if (mood >= 40 && mood <= 50) {
      return { emoji: "😠", position: "left-14" };
    } else if (mood >= 50 && mood <= 60) {
      return { emoji: "😠", position: "left-10" };
    } else if (mood >= 60 && mood <= 70) {
      return { emoji: "😠", position: "left-14" };
    } else if (mood >= 70 && mood <= 80) {
      return { emoji: "😠", position: "left-24" };
    } else if (mood >= 80 && mood <= 90) {
      return { emoji: "😠", position: "left-20" };
    } else if (mood >= 90 && mood <= 100) {
      return { emoji: "😠", position: "left-32" };
    }
  };

  const mood = expressMoodWithEmoji(teamMemberData.mood);

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
