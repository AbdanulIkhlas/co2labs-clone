import HeroImage from "../../fragments/HeroImage";

const HeroSection = () => {
  return (
    <section className="border border-black -mt-5 pb-20">
      <div className="h-68">
        <HeroImage srcHeroImg="/img/heroimg-landingpage.png" />
      </div>
      <div className="px-10">
        <h1 className="font-orbitron font-bold text-3xl">Where Code Meets</h1>
        <h2 className="bg-secondary text-main font-orbitron font-bold mt-3 text-3xl w-max px-5">
          Creativity
        </h2>
        <p className="font-generalSans mt-3 text-xl">
          Harnessing the power of our Coding Collective to build solutions for
          your business needs.
        </p>
        <a href="#">
          <button className="font-generalSans bg-secondary  text-main rounded-md mt-6 text-md w-max px-5 py-2
          hover:scale-110 hover:shadow-md hover:shadow-secondary transition-all ">
            Get a free consult
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
