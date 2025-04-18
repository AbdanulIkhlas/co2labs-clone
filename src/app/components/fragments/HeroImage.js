import Image from "next/image";

const HeroImage = ({srcHeroImg}) => {
  return <div className="relative">
    <Image src={srcHeroImg} width={250} height={250} alt="Hero Image" 
    className="absolute rounded-xl top-15 left-12 z-20" />
    <Image src="/img/backdrop.png" width={220} height={220} alt="Backdrop"
    className="absolute top-0 right-0 z-0" />
  </div>;
};

export default HeroImage;
