// components/Header.js
import React, { useState } from "react";
import logo from "../assets/logo-sgd.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="shadow-md sticky top-0 z-50"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">RC</span>
          </div> */}
          <img src={logo} alt="Logo" className="w-15 h-15 object-contain" />
          <span className="text-xl font-bold" style={{ color: "#c08b2f" }}>
            Responsible Consumption
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Home
          </a>
          <a
            href="#materi"
            className="font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Materi
          </a>
          <a
            href="#swot"
            className="font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            SWOT
          </a>
          <a
            href="#tentang"
            className="font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Tentang
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          style={{ color: "#2e7d32" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden py-2 px-4 shadow-inner"
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <a
            href="#home"
            className="block py-2 font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Home
          </a>
          <a
            href="#materi"
            className="block py-2 font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Materi
          </a>
          <a
            href="#quiz"
            className="block py-2 font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Quiz
          </a>
          <a
            href="#tentang"
            className="block py-2 font-medium transition-colors duration-300"
            style={{ color: "#2e7d32" }}
            onMouseEnter={(e) => (e.target.style.color = "#c08b2f")}
            onMouseLeave={(e) => (e.target.style.color = "#2e7d32")}
          >
            Tentang
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
