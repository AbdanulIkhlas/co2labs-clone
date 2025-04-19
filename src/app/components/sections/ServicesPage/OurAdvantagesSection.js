"use client";
import React from "react";

const OurAdvantagesSection = ({ data }) => {
  return (
    <section className="px-8 pt-20 pb-5 md:px-10 lg:px-32 bg-[#f9f8f5]">
      <div className="flex flex-col md:flex-col lg:flex-row items-start gap-10 xl:justify-between xl:gap-60">
        {/* Title Section */}
        <div className="flex items-center gap-2.5 xl:w-[40%] xl:mt-4">
          <div className="w-2 h-30 bg-secondary lg:hidden"></div>
          <h2 className="text-4xl font-orbitron md:text-4xl xl:text-5xl font-bold tracking-wide text-black leading-tight">
            OUR ADVANTAGES
          </h2>
        </div>

        {/* Advantages List */}
        <div className="flex flex-col items-start  gap-10 w-[60%] relative font-generalSans 
        ">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-10">
              {/* Line and dot Section */}
              <div className="flex flex-col items-center justify-center pt-2 gap-5">
                <div className="w-4 h-4 rounded-full bg-[#a2b1b6] md:w-6 md:h-6" />
                {index !== data.length  && (
                  <div className="w-0.5 h-30 bg-[#a2b1b6] md:h-25 md:w-1 lg:w-0.5 lg:h-30 xl:h-24" />
                )}
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-black font-generalSans
                md:text-3xl lg:text-[28px]">
                  {item.title}
                </h3>
                <div className="">
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-md max-w-2xl">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed font-generalSans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
