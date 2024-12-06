import React from "react";
import  uchiwa from "../assets/AnimePicture/uchiwa.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={uchiwa} // Remplacez par le chemin vers votre logo
            alt="Onatech Cargo Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-center md:text-left">
            Onatech Cargo is a well-equipped company with modern technology. Our cargo services meet international requirements with a talented team and are dedicated to fulfilling our clients’ needs.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Sea Cargo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Express Air Freight
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Cargo Fulfilment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                US Custom Clearance
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="mb-2">
            <i className="fas fa-phone-alt"></i> +1 470-823-0808
          </p>
          <p className="mb-4">
            <i className="fas fa-envelope"></i> info@onatechcargo.com
          </p>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 bg-gray-800 text-white rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        All Rights Reserved © 2024 Onatech Cargo
      </div>
    </footer>
  );
};

export default Footer;
