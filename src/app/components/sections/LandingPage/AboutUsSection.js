import Image from "next/image";
import TeamCard from "../../fragments/TeamCard";
import teamsData from "../../../data/teamsData";

const AboutUs = () => {
  return (
    <section className="bg-main text-center pb-10">
      <div className="px-10">
        <h1 className="font-orbitron font-bold text-5xl">About Us</h1>
        <h3 className="font-generalSans text-xl text-left mt-8">
          At CO2 Labs, we strive to provide simple yet powerful software solutions
          and expert consultation to help your business thrive in the digital
          world.
        </h3>
  
        <div className="mt-12">
          <Image
            src="/svg/line-curve.svg"
            width={300}
            height={300}
            alt="Line Curve"
            className="mb-8"
          />
          <Image
            src="/img/about-img.png"
            width={300}
            height={300}
            alt="Backdrop"
            className="rounded-xl"
          />
        </div>
      </div>
      <div id="about">
        <h1 className="font-orbitron font-bold text-5xl text-left mt-42 px-10">
          Our Team
        </h1>
        <div className="py-12 mt-8 bg-main px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
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
