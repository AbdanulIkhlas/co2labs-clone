import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";
import HereForYouSection from "@/app/components/sections/ServicesPage/HereForYouSection";
import OurAdvantagesSection from "@/app/components/sections/ServicesPage/OurAdvantagesSection";
import { itSupportAdvantages } from "@/app/data/advantagesData";

export default function Page() {
  return (
    <div>
      <div id="home-it-support">
        <ServicesHeroSection
          urlImage="/img/hero-it-support.png"
          textTitle="IT Support Services"
          textSubtitle="“Comprehensive IT Support Solutions”"
        />
      </div>
      <SecondInformationSection
        urlImage="/img/it-support-image-1.png"
        information="At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind."
        classnameImage={`md:w-40`}
      />
      <OurAdvantagesSection data={itSupportAdvantages} />
      <HereForYouSection
        urlImage="/img/it-support-image-2.png"
        Information="Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs."
        textButton="Get IT Support"
      />
    </div>
  );
}
