import HeroSection from "./components/sections/LandingPage/HeroSection";
import ServicesSection from "./components/sections/LandingPage/ServicesSection";
import StrategicSection from "./components/sections/LandingPage/StrategicSection";
import AboutUs from "./components/sections/LandingPage/AboutUsSection";
import Portfolio from "./components/sections/LandingPage/PortfolioSection";

export default function Home() {
  return (
    <div className="mt-0">
      <HeroSection />
      <ServicesSection />
      <StrategicSection />
      <AboutUs />
      <Portfolio />
    </div>
  );
}
