import Image from "next/image";
import AnimateOnScroll from "../../fragments/AnimatedOnScroll";
import HeroImage from "../../fragments/HeroImage";
import TextHero from "../../fragments/TextHero";

const HeroSection = () => {
  return (
    <section className="mt-6 pb-39 md:pb-30 lg:flex lg:gap-3 lg:flex-row-reverse lg:py-110 xl:py-28">
      <div className="h-68 md:h-130 lg:w-[52%]">
        <HeroImage srcHeroImg="/img/hero-web-main.png" />
      </div>
      <div className="px-6 mt-16 md:px-10 lg:w-[48%] lg:px-0 lg:ps-30 lg:pt-16 xl:pt-27 xl:ps-26">
        <TextHero
          title="Website Maintenance"
          subtitle="“Comprehensive Website Maintenance Services (WAMS)”"
        />
      <div className="w-40 h-0 mt-6 border-3 border-black"></div>
      </div>
    </section>
  );
};

export default HeroSection;
