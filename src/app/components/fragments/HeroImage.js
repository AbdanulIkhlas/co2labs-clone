"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroImage = ({ srcHeroImg }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div className="relative">
      {/* Backdrop tetap duluan di bawah */}
      <div
        className="w-[230px] h-[268px] absolute top-0 right-0 z-10 md:w-[360px] md:h-[440px] md:top-18
        lg:top-0 lg:w-[400px] lg:h-[480px] xl:-top-1"
      >
        <Image src="/img/backdrop.png" fill alt="Backdrop" />
      </div>

      {/* Hero Image container */}
      <div
        ref={ref}
        className="w-[250px] h-[150px] absolute rounded-xl top-15 left-12 z-20 md:w-[390px] md:h-[235px] md:top-44 md:left-55
      lg:left-0 lg:top-30 xl:left-60"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="w-full h-full"
        >
          <Image
            src={srcHeroImg}
            fill
            alt="Hero Image"
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroImage;
