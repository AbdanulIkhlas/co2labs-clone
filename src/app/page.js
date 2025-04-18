import HeroSection from "./components/sections/LandingPage/HeroSection";
import ServicesSection from "./components/sections/LandingPage/ServicesSection";
import StrategicSection from "./components/sections/LandingPage/StrategicSection";
import AboutUs from "./components/sections/LandingPage/AboutUs";

export default function Home() {
  return (
    <div className="mt-0">
      <HeroSection />
      <ServicesSection />
      <StrategicSection />
      <AboutUs />
    </div>
  );
}
