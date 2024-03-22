import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional custom props can be added here
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, ...rest }) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

const Ourfleet: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold">OUR FLEET</h2>
        <div className="w-24 h-1 bg-blue-500 inline-block mb-2" />
        <p className="text-gray-600 mb-8">
          Curabitur maximus feugiat velit, sed dapibus sem auctor quis. Maecenas turpis purus, tincidunt eget mattis ac,
          placerat sit amet dolor. Aenean vel porttitor libero, nec tempor magna. Mauris sed ex at tellus elementum
          tempus dignissim ac est. Curabitur maximus feugiat velit, sed dapibus sem auctor quis.
        </p>
      </div>
      <div className="flex justify-center space-x-2 mb-8">
        <Button className="bg-blue-500 text-white">All</Button>
        <Button className="bg-gray-200 text-gray-700">Short trucks</Button>
        <Button className="bg-gray-200 text-gray-700">Prime trucks</Button>
        <Button className="bg-gray-200 text-gray-700">Vans</Button>
        <Button className="bg-gray-200 text-gray-700">Big load trucks</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <img
            key={index}
            alt={`Truck Image ${index}`}
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        ))}
      </div>
    </section>
  );
};

export default Ourfleet;
