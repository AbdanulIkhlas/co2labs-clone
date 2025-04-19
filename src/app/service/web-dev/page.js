import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";
import HereForYouSection from "@/app/components/sections/ServicesPage/HereForYouSection";
import OurAdvantagesSection from "@/app/components/sections/ServicesPage/OurAdvantagesSection";
import { webDevAdvantages } from "@/app/data/advantagesData";

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
        classnameImage={`md:w-70`}
      />
      <OurAdvantagesSection data={webDevAdvantages} />
      <HereForYouSection
        urlImage="/img/web-dev-image-2.png"
        Information="Let CO2 Labs transform your digital presence with our top-tier website and app development services. Contact us to start your project today."
        textButton="Kick Start Your Project"
      />
    </div>
  );
}
