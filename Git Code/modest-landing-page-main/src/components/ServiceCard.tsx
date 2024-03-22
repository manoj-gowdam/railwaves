interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="w-[235px] flex flex-col gap-4 justify-center items-center">
      <img src={`/assets/services/${icon}.png`} alt={title} />
      <h3 className="uppercase text-section-dark-color font-[500] text-[1rem]">
        {title}
      </h3>
      <p className="text-center text-text-dark-secondary text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
