interface AboutCardProps {
  number: string;
  title: string;
  description: string;
}

const AboutCard = ({ number, title, description }: AboutCardProps) => {
  return (
    <div className="flex gap-5 items-start">
      <div className="min-w-12 h-12 bg-primary-color flex justify-center items-center">
        <p className="text-white text-[1rem]">{number}</p>
      </div>
      <div className="flex flex-col gap-2 mt-[-8px]">
        <h3 className="uppercase text-text-dark-primary text-lg font-[500] tracking-tight">
          {title}
        </h3>
        <p className="text-[1rem] text-text-dark-secondary">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
