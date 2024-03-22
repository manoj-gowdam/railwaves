interface FeatureCardProps {
  pic: string;
  title: string;
  description: string;
}

const FeatureCard = ({ pic, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-8">
      <img
        src={`/assets/features/${pic}.png`}
        alt={title}
        className="w-[361px] h-[220px]"
      />
      <div className="flex flex-col gap-3">
        <h3 className="uppercase text-white text-lg tracking-tight font-[400]">
          {title}
        </h3>
        <p className="text-[#dcdfe1] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
