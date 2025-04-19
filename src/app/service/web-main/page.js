import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";

export default function Page() {
  return (
    <div className="mt-0">
      <ServicesHeroSection
        urlImage="/img/hero-web-main.png"
        textTitle="Website Maintenance"
        textSubtitle="“Comprehensive Website Maintenance Services (WAMS)”"
      />
      <SecondInformationSection
        urlImage="/img/web-main-image-1.png"
        information="Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best."
      />
    </div>
  );
}
