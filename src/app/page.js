import HeroSection from "./components/sections/LandingPage/HeroSection";
import ServicesSection from "./components/sections/LandingPage/ServicesSection";

export default function Home() {
  return (
    <div className="mt-0">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}