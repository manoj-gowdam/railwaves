import Wrapper from "../components/Wrapper";
import TeamCard from "../components/TeamCard";

const Team = () => {
  const teamList = [
    {
      name: "Manoj M",
      pic: "gloria",
      role: "CEO and Founder",
    },
    {
      name: "Nagaraj S",
      pic: "paul",
      role: "Tech",
    },
  
  ];
  return (
    <Wrapper id="team">
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#dee5eb]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
          meet the team.
        </h2>
      </div>
      <div className="flex items-center mt-11 gap-8">
        {teamList.map((team) => (
          <TeamCard key={team.name} {...team} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Team;
