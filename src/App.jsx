import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import FreightStats from "./components/FreightStats";
import NavBar from "./components/NavBar";
import SpecialServices from "./components/SpecialServices";
import StaticImageSection from "./components/StaticImageSection";
export default function App() {
  return (
    <div className="">
      <NavBar />
      <StaticImageSection />
      <Cards />
      <Banner />
      <SpecialServices />
      <FreightStats />
      <Footer />
    </div>
  )
}