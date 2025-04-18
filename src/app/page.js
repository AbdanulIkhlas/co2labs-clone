import HeroSection from "./components/sections/LandingPage/HeroSection";
import ServicesSection from "./components/sections/LandingPage/ServicesSection";
import StrategicSection from "./components/sections/LandingPage/StrategicSection";

export default function Home() {
  return (
    <div className="mt-0">
      <HeroSection />
      <ServicesSection />
      <StrategicSection />
    </div>
  );
}
