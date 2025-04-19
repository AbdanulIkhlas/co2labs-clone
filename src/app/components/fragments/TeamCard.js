import Image from "next/image";
import React from "react";

const TeamCard = ({ name, role, img, information }) => {
  return (
    <div className="bg-main p-6 rounded-2xl text-center transition-transform transform lg:shadow-md lg:bg-white lg:hover:scale-[1.10] duration-300 ease-in-out">
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg 
        lg:-mt-30 lg:w-45 lg:h-45">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold font-generalSans -mt-3">{name}</h2>
      <p className="text-base font-semibold text-black font-generalSans">
        {role}
      </p>
      <p className="mt-2 text-xs font-generalSans font-medium text-center italic lg:px-[14px] lg:pb-4">
        {information}
      </p>
    </div>
  );
};

export default TeamCard;
