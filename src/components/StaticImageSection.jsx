import React, { useState, useEffect } from "react";
import { Animate } from "react-simple-animate";
import naruto from "../assets/AnimePicture/naruto.jpg";

const StaticImageSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const countries = ["CHINA", "USA", "FRANCE", "GERMANY", "JAPAN", "INDIA"];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentCountry = countries[currentCountryIndex];

      if (!isErasing && currentCharIndex < currentCountry.length) {
        // Affiche progressivement les lettres
        setDisplayedText(currentCountry.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      } else if (!isErasing && currentCharIndex === currentCountry.length) {
        // Pause avant de commencer à effacer
        setTimeout(() => setIsErasing(true), 1000);
      } else if (isErasing && currentCharIndex > 0) {
        // Efface progressivement les lettres
        setDisplayedText(currentCountry.slice(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
      } else if (isErasing && currentCharIndex === 0) {
        // Passe au prochain pays après avoir tout effacé
        setIsErasing(false);
        setCurrentCountryIndex((prev) => (prev + 1) % countries.length);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentCharIndex, isErasing, currentCountryIndex, countries]);

  return (
    <section className="w-screen bg-gray-100 py-8 px-0">
      {/* Image de fond */}
      <div
        className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${naruto})` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenu de la bannière */}
        <div className="relative w-full h-full flex flex-col justify-center items-start px-6 text-white z-10">
          {/* Texte principal */}
          <h3 className="text-xl font-bold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias obcaecati hic, enim fugit vero repellendus quaerat.
          </h3>
          <p className="mt-2 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Array.from({ length: 7 }).map((_, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white underline px-4 py-2 rounded hover:bg-blue-600"
              >
                Button {index + 1}
              </button>
            ))}
          </div>

          {/* Texte animé */}
          <div className="w-full text-center mt-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              WE SHIP FROM{" "}
              <span className="text-blue-500">
                <Animate
                  play
                  duration={0.5}
                  start={{ opacity: 0 }}
                  end={{ opacity: 1 }}
                  key={displayedText}
                >
                  {displayedText}
                </Animate>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticImageSection;
