// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 text-white"
      style={{
        background: `linear-gradient(135deg, #2e7d32 0%, #c08b2f 100%)`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Responsible Consumption and Production
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Belajar tentang pentingnya konsumsi dan produksi yang bertanggung
          jawab untuk mencapai Sustainable Development Goals (SDGs)
        </p>
        <button
          className="font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          style={{
            backgroundColor: "#f9f9f9",
            color: "#5d4037",
          }}
          onClick={() => (window.location.href = "#materi")}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#5d4037";
            e.target.style.color = "#f9f9f9";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f9f9f9";
            e.target.style.color = "#5d4037";
          }}
        >
          Mulai Belajar
        </button>
      </div>
    </section>
  );
};

export default Hero;
