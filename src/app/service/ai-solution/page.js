import ServicesHeroSection from "@/app/components/sections/ServicesPage/ServicesHeroSection";
import SecondInformationSection from "@/app/components/sections/ServicesPage/SecondInformationSection";
import HereForYouSection from "@/app/components/sections/ServicesPage/HereForYouSection";
import OurAdvantagesSection from "@/app/components/sections/ServicesPage/OurAdvantagesSection";
import { aiSolutionAdvantages } from "@/app/data/advantagesData";


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
        classnameImage="w-20"
      />
      <OurAdvantagesSection data={aiSolutionAdvantages} />
      <HereForYouSection
        urlImage="/img/ai-solution-image-2.png"
        Information="Unlock new possibilities with third-party AI tools integrated by CO2 Labs. Contact us to explore how AI can transform your business."
        textButton="Learn More About AI Integration"
      />
    </div>
  );
}
