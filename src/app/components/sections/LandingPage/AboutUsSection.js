import Image from "next/image";
import TeamCard from "../../fragments/TeamCard";
import teamsData from "../../../data/teamsData";
import AnimateOnScroll from "../../fragments/AnimatedOnScroll";

const AboutUs = () => {
  return (
    <section className="bg-main text-center pb-10">
      <div className="px-10 lg:flex lg:py-120 lg:px-26 lg:gap-4">
        <div className="lg:w-1/2 lg:pe-10">
          <AnimateOnScroll direction="up" delay={0.4}>
            <h1 className="font-orbitron font-bold text-5xl md:mt-4 lg:text-right lg:-mt-4 xl:mt-24">
              About Us
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={0.6}>
            <h3 className="font-generalSans text-xl text-left mt-8 mb-12 md:mb-6 lg:text-right
            lg:mt-14 lg:font-medium lg:mb-18">
              At CO2 Labs, we strive to provide simple yet powerful software
              solutions and expert consultation to help your business thrive in
              the digital world.
            </h3>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={0.8}>
            <Image
              src="/svg/line-curve.svg"
              width={300}
              height={300}
              alt="Line Curve"
              className="mb-8 md:w-full md:mb-0.5"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll direction="up" delay={0.4}>
          <div className="w-150 lg:p-6">
            <Image
              src="/img/about-img.png"
              width={300}
              height={300}
              alt="Backdrop"
              className="rounded-xl md:w-full xl:w- xl:mt-10"
            />
          </div>
        </AnimateOnScroll>
      </div>
      <div id="about" className="scroll-mt-20">
        <h1 className="font-orbitron font-bold text-5xl text-left mt-42 px-10 lg:ps-28">
          Our Team
        </h1>
        <div className="py-12 mt-8 bg-main px-4 md:px-30 lg:mt-27">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
            {teamsData.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
