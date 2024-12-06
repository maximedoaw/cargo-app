import React from "react";
import { Animate } from "react-simple-animate";
import { AiOutlineRight } from "react-icons/ai";

const AnimatedFreight = () => {
  const staticText = "Our";
  const animatedText = "successful";
  const trailingText = "Freights";

  const sentences = [
    "We provide air logistics assistance at each step of the route.",
    "General air support.",
    "Bulk-break amenity.",
    "Complete help in documentation, packaging, warehouse, and shipping.",
    "Help in customs brokerage.",
    "Pick-up and delivery at the door.",
  ];

  const [displayedText, setDisplayedText] = React.useState(animatedText);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentCharIndex < animatedText.length) {
        setDisplayedText(animatedText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setDisplayedText("");
        setCurrentCharIndex(0);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentCharIndex, animatedText]);

  return (
    <section className="w-full bg-gray-100 py-16 px-4 mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre principal avec animation */}
        <h2 className="flex justify-center text-4xl md:text-5xl font-bold space-x-4 mb-8">
          <span>{staticText.trim()}</span> {/* Texte statique */}
          <span className="text-blue-500">
            {/* Animation des lettres */}
            <Animate
              play
              duration={0.5}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              key={displayedText}
            >
              {displayedText.trim()}
            </Animate>
          </span>
          <span>{trailingText.trim()}</span> {/* Texte final */}
        </h2>

        {/* Liste des phrases avec les chevrons */}
        <ul className="text-left max-w-3xl mx-auto space-y-4">
          {sentences.map((sentence, index) => (
            <li key={index} className="flex items-center space-x-4 text-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                <AiOutlineRight className="text-white" size={16} />
              </div>
              <span>{sentence}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnimatedFreight;
