import Image from "next/image";
import AnimateOnScroll from "../../fragments/AnimatedOnScroll";

const SecondInformationSection = ({ urlImage, information }) => {
  return (
    <section className="bg-secondary w-full px-10 py-16 text-white pb-20 lg:py-120 lg:px-26 xl:px-27 xl:py-44 ">
      <div className="relative h-22">
        <AnimateOnScroll direction="up" delay={0.4}>
          <h1
            className="absolute bottom-0 left-0 font-orbitron text-8xl font-extrabold text-white/45
          md:text-9xl"
          >
            C02
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.5}>
          <h2
            className="absolute bottom-2 left-2 font-orbitron text-4xl font-extrabold
          md:text-5xl"
          >
            C02 LABS
          </h2>
        </AnimateOnScroll>
      </div>
      <div
        className="lg:flex lg:justify-center lg:items-center lg:gap-2 xl:justify-between xl:p-0 
      xl:mt-2"
      >
        <div
          className="bg-gradient-to-b mt-14 from-[#ffffff37] to-white/0 rounded-lg flex justify-center items-center w-full h-40
          md:h-70 md:w-120 md:mx-auto lg:w-[50%] lg:mt-10 lg:h-72 xl:w-[40%] xl:mx-0 "
        >
          <AnimateOnScroll direction="up" delay={0.6}>
            <Image
              src={urlImage}
              alt="icon image"
              width={150}
              height={150}
              className="md:w-70"
            />
          </AnimateOnScroll>
        </div>
        <div
          className="font-generalSans text-xl mt-10 text-center md:mt-3 lg:w-[49%] lg:text-[23px] lg:text-right lg:pt-6
          xl:w-[48%] xl:text-xl "
        >
          <AnimateOnScroll direction="up" delay={0.7}>
            {information}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default SecondInformationSection;
