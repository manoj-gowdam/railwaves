import "../index.css";

interface TeamCardProps {
  name: string;
  pic: string;
  role: string;
}

const TeamCard = ({ name, pic, role }: TeamCardProps) => {
  const socialMediaIcons = [
    { name: "twitter", url: "https://twitter.com" },
    { name: "facebook", url: "https://www.facebook.com" },
    { name: "linkedin", url: "https://www.linkedin.com/" },
  ];

  return (
    <div className="flex flex-col overlay_container cursor-pointer">
      <div className="w-[230px] h-[263px]">
        <img src={`/assets/${pic}.png`} alt={pic} />
      </div>
      <div className="overlay">
        <div className="flex items-center gap-[1px]">
          {socialMediaIcons.map(({ name, url }) => (
            <a href={url} target="__blank" key={url}>
              <div className="w-12 h-12 bg-[#3a454d] hover:bg-[#4e5a62] flex justify-center items-center">
                <img
                  src={`/assets/${name}.png`}
                  alt={name}
                  className="w-[14px] h-[14px]"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="py-3 px-4 flex flex-col justify-center bg-bg-light overlay_bottom">
        <h3 className="uppercase text-text-dark-primary text-[1rem] font-[500] tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-text-dark-secondary">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
