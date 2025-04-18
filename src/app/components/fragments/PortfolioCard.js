import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioCard = ({ title, imageSrc, link }) => {
  return (
    <div className="group w-full max-w-sm mx-auto">
      <Link href={link}>
        <div className="overflow-hidden rounded-xl bg-white shadow-md -mt-4">
          <div className="relative h-76 w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
        <p className="text-md mt-3 text-lg font-generalSans font-semibold text-white transition-colors duration-300 cursor-pointer">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default PortfolioCard;
