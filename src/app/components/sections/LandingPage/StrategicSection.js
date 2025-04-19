"use client";
import AceCard from "../../fragments/AceCard";
import aceData from "@/app/data/aceData";

const StrategicSection = () => {
  return (
    <section className="bg-main text-black text-center py-20">
      <h1 className="font-orbitron font-bold text-5xl">ACE</h1>
      <h2 className="mt-3 font-generalSans font-semibold text-2xl leading-10">
        Methodology for Strategic Consulting
      </h2>
      <div className="w-full mt-10 lg:flex lg:justify-center">
        {aceData.map((item, index) => (
          <div key={item.id} className="lg:flex-1">
            <AceCard
              title={item.title}
              secTitle={item.secTitle}
              description={item.description}
              points={item.points}
              isEven={index % 2 === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicSection;
