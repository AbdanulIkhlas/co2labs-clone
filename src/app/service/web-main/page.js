import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";
import HereForYouSection from "@/app/components/sections/ServicesPage/HereForYouSection";
import OurAdvantagesSection from "@/app/components/sections/ServicesPage/OurAdvantagesSection";
import { webMainAdvantages } from "@/app/data/advantagesData";

export default function Page() {
  return (
    <div className="mt-0">
      <div id="home-web-main">
        <ServicesHeroSection
          urlImage="/img/hero-web-main.png"
          textTitle="Website Maintenance"
          textSubtitle="“Comprehensive Website Maintenance Services (WAMS)”"
        />
      </div>
      <SecondInformationSection
        urlImage="/img/web-main-image-1.png"
        information="Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best."
        classnameImage={`md:w-70`}
      />
      <OurAdvantagesSection data={webMainAdvantages} />
      <HereForYouSection
        urlImage="/img/web-main-image-2.png"
        Information="Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services."
        textButton="Get a Free Quote"
      />
    </div>
  );
}
