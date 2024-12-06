import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion de l'ouverture/fermeture du sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Gestion de l'ouverture des menus déroulants
  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      {/* Bannière supérieure (uniquement sur desktop) */}
      <div
        className={`hidden lg:flex fixed top-0 left-0 w-full bg-blue-900 py-2 px-4 items-center justify-between text-white transition-all duration-300 z-50 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Contact Information */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={16} />
            <span className="text-sm">+1 470-823-0808</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={16} />
            <span className="text-sm">info@onatechcargo.com</span>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-400">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Navbar principale */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white lg:bg-blue-700 lg:mt-7"
        }`}
      >
        <div
          className={`flex justify-between items-center px-4 py-3 lg:px-8 ${
            scrolled ? "text-gray-800" : "text-gray-800 lg:text-white"
          }`}
        >
          {/* Logo */}
          <img src="./vite.svg" alt="Logo" className="h-12" />

          {/* Desktop: Liens ou Réseaux sociaux */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {["Home", "About", "Service", "Price", "Announcements"].map(
              (menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleDropdown(menu)}
                  onMouseLeave={() => handleDropdown(null)}
                >
                  <a
                    href="#"
                    className={`hover:text-blue-500 ${
                      scrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {menu}
                  </a>

                  {/* Menu déroulant */}
                  {dropdownOpen === menu && (
                    <div className="absolute top-full left-0 bg-white shadow-lg p-6 rounded-lg grid grid-cols-3 gap-4 mt-2 w-80 text-gray-800 z-50 transform transition-all duration-300">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <a
                          key={i}
                          href="#"
                          className="hover:text-blue-500 text-sm"
                        >
                          {menu} Item {i + 1}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile: Menu Hamburger */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <AiOutlineClose
                size={28}
                className={`${scrolled ? "text-gray-800" : "text-gray-800"}`}
              />
            ) : (
              <AiOutlineMenu
                size={28}
                className={`${scrolled ? "text-gray-800" : "text-gray-800"}`}
              />
            )}
          </button>
        </div>

        {/* Sidebar (Mobile uniquement) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 shadow-lg`}
        >
          <div className="flex flex-col items-start p-6 space-y-6">
            <a href="#" className="text-gray-800 hover:text-blue-500 text-lg">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-lg">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-lg">
              Service
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-lg">
              Price
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-lg">
              Announcements
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
