import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";

export default function Page() {
  return (
    <div>
      <div id="home-ai-solution">
        <ServicesHeroSection
          urlImage="/img/hero-ai-solution.png"
          textTitle="Third Party AI Tools"
          textSubtitle="“Harness the Power of Third-Party AI Tools”"
        />
      </div>
      <SecondInformationSection
        urlImage="/img/ai-solution-image-1.png"
        information="CO2 Labs helps you harness the power of third-party AI tools to enhance your business operations and drive innovation. Our team is skilled in integrating and customizing AI solutions to meet your specific needs."
      />
    </div>
  );
}
