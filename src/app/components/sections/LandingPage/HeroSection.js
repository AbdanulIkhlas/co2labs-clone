import HeroImage from "../../fragments/HeroImage";
import ButtonCustom from "../../elements/ButtonCustom";

const HeroSection = () => {
  return (
    <section className="-mt-6 pb-20 md:pb-30 lg:flex lg:flex-row-reverse lg:py-110 xl:py-28">
      <div className="h-68 md:h-130 lg:w-[52%]">
        <HeroImage srcHeroImg="/img/heroimg-landingpage.png" />
      </div>
      <div className="px-10 lg:w-[48%] lg:px-0 lg:ps-30 lg:pt-16 xl:pt-27 xl:ps-26">
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl">
          Where Code Meets
        </h1>
        <h2 className="bg-secondary text-main font-orbitron font-bold mt-3 text-3xl w-max px-5 md:text-5xl md:mt-4">
          Creativity
        </h2>
        <p className="font-generalSans mt-3 text-xl md:mt-5">
          Harnessing the power of our Coding Collective to build solutions for
          your business needs.
        </p>
        <a href="#">
          <ButtonCustom>Get a free consult</ButtonCustom>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
