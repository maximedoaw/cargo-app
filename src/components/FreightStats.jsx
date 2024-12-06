import React, { useState, useEffect, useRef } from "react";

const FreightStats = () => {
  const [stats, setStats] = useState({
    trucking: 0,
    air: 0,
    sea: 0,
  });
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const targetValues = {
    trucking: 1050,
    air: 900,
    sea: 600,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setStats((prevStats) => {
          const newStats = { ...prevStats };

          if (newStats.trucking < targetValues.trucking) {
            newStats.trucking += 10;
          }
          if (newStats.air < targetValues.air) {
            newStats.air += 10;
          }
          if (newStats.sea < targetValues.sea) {
            newStats.sea += 5;
          }

          if (
            newStats.trucking >= targetValues.trucking &&
            newStats.air >= targetValues.air &&
            newStats.sea >= targetValues.sea
          ) {
            clearInterval(interval);
          }

          return newStats;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Success Freights</h2>
        <p className="text-gray-600">
          We deliver the best services to support your logistics and shipping needs globally.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3 text-center">
        {/* Trucking */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-4xl font-bold text-blue-600">{stats.trucking}+</h3>
          <p className="text-gray-800 font-semibold mt-2">Trucking Freight</p>
          <p className="text-gray-600 mt-1">Delivered on time with professional support.</p>
        </div>
        {/* Air */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-4xl font-bold text-blue-600">{stats.air}+</h3>
          <p className="text-gray-800 font-semibold mt-2">Air Freight</p>
          <p className="text-gray-600 mt-1">Fast and efficient air delivery worldwide.</p>
        </div>
        {/* Sea */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-4xl font-bold text-blue-600">{stats.sea}+</h3>
          <p className="text-gray-800 font-semibold mt-2">Sea Freight</p>
          <p className="text-gray-600 mt-1">Affordable and reliable shipping solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default FreightStats;
