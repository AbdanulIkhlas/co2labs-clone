import React from "react";
import PortfolioCard from "../../fragments/PortfolioCard";
import portfoliosData from "../../../data/portfoliosData";

const Portfolio = () => {
  return (
    <section className="py-16 bg-[#0C2D48] text-white px-10">
      <h1 className="text-5xl font-bold font-orbitron text-left mb-10 leading-19">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 justify-items-center">
        {portfoliosData.map((item) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            imageSrc={item.img}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
