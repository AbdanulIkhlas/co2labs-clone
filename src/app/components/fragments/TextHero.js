"use client";

import AnimateOnScroll from "./AnimatedOnScroll";
import Image from "next/image";

const TextHero = ({title, subtitle}) => {
  return (
    <div className="relative">
      <Image src="/img/quote.png" width={110} height={110} alt="Line Curve" className="absolute -top-16 -left-8 -z-50 md:-left-12"/>
      <AnimateOnScroll direction="left" delay={0.4}>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl">
          {title}
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll direction="left" delay={0.9}>
        <p className="font-generalSans mt-3 text-xl md:mt-5">
          {subtitle}
        </p>
      </AnimateOnScroll>
    </div>
  );
};

export default TextHero;
