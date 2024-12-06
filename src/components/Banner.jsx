import React, { useState } from "react";
import {
  FaHeadset,
  FaClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Banner = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: <FaHeadset className="text-3xl text-blue-400" />,
      title: "CALL CENTER",
      description: "+1 470-823-0808",
    },
    {
      id: 2,
      icon: <FaClock className="text-3xl text-orange-400" />,
      title: "WORKING HOURS",
      description: "Monday to Saturday 24/7",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
      title: "OUR LOCATION",
      description: "1000 Montana Drive Charlotte, NC 28216, United States",
    },
  ]);

  const handlePrev = () => {
    // Faire passer le dernier élément au début
    const lastItem = items[items.length - 1];
    setItems([lastItem, ...items.slice(0, items.length - 1)]);
  };

  const handleNext = () => {
    // Faire passer le premier élément à la fin
    const firstItem = items[0];
    setItems([...items.slice(1), firstItem]);
  };

  return (
    <div className="bg-blue-600 text-white py-4">
      <div className="container mx-auto relative px-4 flex items-center">
        {/* Flèche gauche */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 p-2 rounded-full z-10"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>

        {/* Contenu */}
        <div className="flex justify-center items-center w-full overflow-hidden">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center min-w-[100%] md:min-w-[33%] transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 p-2 rounded-full z-10"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>

      {/* Mobile navigation */}
      <div className="flex justify-between md:hidden mt-4">
        <button
          onClick={handlePrev}
          className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full"
        >
          <FaChevronLeft className="text-white text-xl" />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full"
        >
          <FaChevronRight className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
