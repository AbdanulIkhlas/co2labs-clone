import PortfolioCard from "../../fragments/PortfolioCard";
import portfoliosData from "../../../data/portfoliosData";

const Portfolio = () => {
  return (
    <section className="py-16 bg-[#0C2D48] text-white px-10 md:px-10 md:pb-20">
      <h1 className="text-5xl font-bold font-orbitron text-left mb-10 leading-19 mt-4
      lg:ps-20">
        Our Portfolio
      </h1>

      <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 md:px-14 md:gap-x-7 
      lg:px-34">
        {portfoliosData.map((item) => (
          <div
            key={item.id}
            className="
              w-full
              sm:basis-[45%]     // ≈ 2 cards per row di tablet
              lg:basis-[38%]     // tetap 2 cards di laptop
              xl:basis-[22%]     // ≈ 4 cards per row di desktop
              flex justify-center
            "
          >
            <PortfolioCard
              title={item.title}
              imageSrc={item.img}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
