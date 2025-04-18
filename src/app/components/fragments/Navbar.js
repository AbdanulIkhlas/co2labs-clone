import Image from "next/image";

const Navbar = () => {
  return <div className="sticky top-0 left-0 right-0 z-50 bg-main py-2 px-10">
    {/* Navbar View Mobile */}
    <div className="flex justify-between">
      <Image src="/img/logo.png" width={60} height={60} alt="logo" />
      <Image src="/svg/hamburger.svg" width={20} height={20} alt="logo" />
    </div>
  </div>;
};

export default Navbar;
