import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";

export default function Page() {
  return (
    <div>
      <div id="home-web-dev">
        <ServicesHeroSection
          urlImage="/img/hero-web-dev.png"
          textTitle="Website & App Development"
          textSubtitle="“Innovative Website & App Development Solutions”"
        />
      </div>
      <SecondInformationSection
        urlImage="/img/web-dev-image-1.png"
        information="CO2 Labs provides innovative website and app development solutions tailored to help your business thrive in the digital age. Our experienced team leverages the latest technologies to create dynamic and engaging digital experiences."
      />
    </div>
  );
}
