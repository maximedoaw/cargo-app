import React from "react";
import naruto from "../assets/AnimePicture/naruto.jpg";
const StaticImageSection = () => {


  return (
<section className="w-screen bg-gray-100 py-8 px-0">
  <div className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${naruto})` }}>
    {/* Overlay pour assombrir l'image de fond */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Contenu de la bannière */}
    <div className="relative w-full h-full flex flex-col justify-center items-start px-6 text-white z-10">
      <h3 className="text-xl font-bold mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias obcaecati hic, enim fugit vero repellendus quaerat.
      </h3>
      <p className="mt-2 text-sm mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
      </p>
      
      {/* Boutons */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 1
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 2
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 3
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 4
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 5
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 6
        </button>
        <button className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600">
          Button 7
        </button>
      </div>
    </div>
  </div>
</section>



  );
};

export default StaticImageSection;
