import Wrapper from "../components/Wrapper";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const serviceList = [
    {
      icon: "theme",
      title: "Cost-effective",
      description:
        "We believe courier services in Bangalore should be affordable for all, this is why we maintain our intercity courier services at economical rates.",
    },
    {
      icon: "pencil",
      title: "On-time Delivery ",
      description:
        "Right from the beginning, Porter Intercity Courier Services provides you with an estimated delivery date so you are aware of the delivery schedule.",
    },
    {
      icon: "mobile",
      title: "Real-time Tracking ",
      description:
        "Immediately after your courier booking, Porter Intercity Courier Services provides you with a link, which you can use to track your package.",
    },
    {
      icon: "clock",
      title: "Wide reach ",
      description:
        "we are Intercity Courier Services in Bangalore can send your parcel to more than 19000 pin codes across India. You can input the delivery pin code.",
    },
  ];
  return (
    <Wrapper id="services">
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#dee5eb]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
          what we do.
        </h2>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-y-12 mt-16 gap-4">
        {[...serviceList].map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
