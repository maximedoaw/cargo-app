import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import FreightStats from "./components/FreightStats";
import NavBar from "./components/NavBar";
import SpecialServices from "./components/SpecialServices";
import StaticImageSection from "./components/StaticImageSection";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="relative">
      <NavBar />
      <StaticImageSection />
      <Cards />
      <Banner />
      <SpecialServices />
      <FreightStats />
      <Footer />

      {/* Bouton WhatsApp fixe */}
      <a
        href="https://wa.me/677271237" // Remplacez par votre numéro WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
        title="Contactez-nous sur WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
