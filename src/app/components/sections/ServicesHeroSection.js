import TextHero from "../fragments/TextHero";
import AnimateOnScroll from "../fragments/AnimatedOnScroll";
import HeroImage from "../fragments/HeroImage";

const ServicesHeroSection = ({urlImage, textTitle, textSubtitle}) => {
  return (
    <section>
      <section className="mt-6 pb-39 md:pb-30 lg:flex lg:gap-3 lg:flex-row-reverse lg:py-110 xl:py-28">
        <div className="h-68 md:h-130 lg:w-[52%]">
          <HeroImage srcHeroImg={urlImage} />
        </div>
        <div className="px-6 mt-16 md:px-10 lg:w-[48%] lg:px-0 lg:ps-30 lg:pt-16 xl:pt-27 xl:ps-26">
          <TextHero
            title={textTitle}
            subtitle={textSubtitle}
          />
          <div className="w-40 h-0 mt-6 border-3 border-black"></div>
        </div>
      </section>
    </section>
  );
};

export default ServicesHeroSection;
