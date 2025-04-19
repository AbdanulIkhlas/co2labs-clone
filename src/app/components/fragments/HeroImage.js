import Image from "next/image";

const HeroImage = ({ srcHeroImg }) => {
  return (
    <div className="relative">
      <div className="w-[250px] h-[150px] absolute rounded-xl top-15 left-12 z-20 md:w-[390px] md:h-[235px] md:top-44 md:left-55
      lg:left-0 lg:top-30 xl:left-60">
        <Image src={srcHeroImg} fill alt="Hero Image" className="rounded-xl" />
      </div>
      <div className="w-[230px] h-[268px] absolute top-0 right-0 z-0 md:w-[360px] md:h-[440px] md:top-18
      lg:top-0 lg:w-[400px] lg:h-[480px] xl:-top-1">
        <Image src="/img/backdrop.png" fill alt="Backdrop" className="" />
      </div>
    </div>
  );
};

export default HeroImage;
