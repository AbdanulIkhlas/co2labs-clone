"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const AceCard = ({ title, secTitle, description, points, isEven }) => {
  const [hovered, setHovered] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const bgColor = isEven ? "bg-[#adb8ba]" : "bg-[#edeae3]";
  const arrowSrc = isEven ? "/svg/arrow-1.svg" : "/svg/arrow-2.svg";

  useEffect(() => {
    if (hovered && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [hovered]);

  return (
    <div
      className={`transition-all duration-500 px-10 py-10 ${bgColor} flex flex-col justify-between`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="transition-all duration-500 ease-in-out">
        <h2 className="font-extrabold text-4xl text-left font-generalSans">
          {title}
        </h2>
        <p className="text-xl font-medium mt-1 text-left font-generalSans">{secTitle}</p>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height }}
        >
          <div ref={contentRef} className="pb-10 font-medium font-generalSans">
            <p className="text-base mb-3 mt-6 text-left">{description}</p>
            <ul className="list-disc list-outside pl-5 space-y-1 text-base text-left">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Arrow at Bottom */}
      <div className="flex justify-center mt-8 transition-transform duration-500 ease-in-out">
        <Image
          src={arrowSrc}
          alt="Arrow"
          width={60}
          height={40}
          className={`transition-transform duration-500 ${
            hovered ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default AceCard;
