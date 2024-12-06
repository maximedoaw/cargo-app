import React from "react";

const cardsData = [
  {
    title: "Sea Shipping Cargo",
    description:
      "Onatech Cargo provides comprehensive customer service and solutions for all your queries. We are one step ahead in providing you with ease and on-time delivery at your destination.",
    buttonText: "Sea Cargo",
    icon: "🚢", // Remplacez par une icône d'image ou de librairie d'icônes
  },
  {
    title: "Air Freight Cargo",
    description:
      "Turning vision into reality with Cargo air freight, our air freight expert teams form long-term customer relationships based on confidence, professional communication, and dedication.",
    buttonText: "Express Air Freight",
    icon: "✈️", // Remplacez par une icône
  },
  {
    title: "Fulfillment Services for African Products",
    description:
      "We know you need to get your product stored and ready for fulfillment at a moment’s notice. That’s why A-List Acquisition has fulfillment centers in the USA & Canada.",
    buttonText: "Fulfillment for African Products",
    icon: "🏠", // Remplacez par une icône
  },
  {
    title: "Warehouse Fulfillment",
    description:
      "As an international logistics company, if you need warehouse space or want seasonal space, we remain thrilled to serve our customers. Clients can benefit from lower completion costs.",
    buttonText: "Warehouse Fulfillment",
    icon: "🏬", // Remplacez par une icône
  },
  {
    title: "US Custom Clearance",
    description:
      "Onatech Cargo is aware of all customs regulations. Our efficient and professional brokerage services help you with customs clearance. Our experts are here to guide you in organizing documentation.",
    buttonText: "US Custom Clearance",
    icon: "📑", // Remplacez par une icône
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center text-4xl text-blue-500 mt-4">
              {card.icon}
            </div>
            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              <p className="mt-4 text-sm text-gray-600">{card.description}</p>
              {/* Button */}
              <button className="mt-6 bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
