import React, { useState } from 'react';

const ServiceCards: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        <div className={`service-card w-64 h-40 border border-gray-300 rounded-md shadow-md cursor-pointer relative ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="front absolute w-full h-full flex items-center justify-center">
            <h2 className="text-lg font-bold">Service 1</h2>
            <p className="text-sm">Description of Service 1</p>
          </div>
          <div className="back absolute w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">More Details</h2>
            <p className="text-sm">Additional information about Service 1</p>
            <ul className="text-sm">
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
            </ul>
          </div>
        </div>
         <div className={`service-card w-64 h-40 border border-gray-300 rounded-md shadow-md cursor-pointer relative ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="front absolute w-full h-full flex items-center justify-center">
            <h2 className="text-lg font-bold">Service 2</h2>
            <p className="text-sm">Description of Service 2</p>
          </div>
          <div className="back absolute w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">More Details</h2>
            <p className="text-sm">Additional information about Service 2</p>
            <ul className="text-sm">
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
