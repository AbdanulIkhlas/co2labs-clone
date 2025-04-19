import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";

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
      />
    </div>
  );
}
