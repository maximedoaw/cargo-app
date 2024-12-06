import React from "react";
import  jojo  from "../assets/AnimePicture/jojo.jpg";
import  naruto  from "../assets/AnimePicture/naruto.jpg";
import  Obito  from "../assets/AnimePicture/Obito.jpg";
import  uchiwa from "../assets/AnimePicture/uchiwa.jpg";
import  NS from "../assets/AnimePicture/NS.jpg";
import  AY from "../assets/AnimePicture/AY.jpg";

const specialServices = [
  {
    title: "AIR CARGO",
    description: "We ship your packages by air",
    image: jojo, // Remplacez par l'URL de votre image
  },
  {
    title: "SEA CARGO",
    description: "Your parcels are sent in calm waters",
    image: naruto, // Remplacez par l'URL de votre image
  },
  {
    title: "COMMERCIAL CARGO",
    description: "We take care of your business parcels",
    image: Obito, // Remplacez par l'URL de votre image
  },
  {
    title: "DOOR-TO-DOOR DELIVERY",
    description: "We deliver right at your doorstep",
    image: uchiwa, // Remplacez par l'URL de votre image
  },
  {
    title: "WAREHOUSE FULFILLMENT",
    description: "Secure storage for your packages",
    image: NS, // Remplacez par l'URL de votre image
  },
  {
    title: "LOGISTICS SUPPORT",
    description: "Efficient handling of your logistics needs",
    image: AY, // Remplacez par l'URL de votre image
  },
];

const SpecialServices = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Special Services</h2>
        <p className="text-gray-600 mt-2">
          We provide Trucking and Freight Transport services with more than 8
          years of delivery experience.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {specialServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialServices;
