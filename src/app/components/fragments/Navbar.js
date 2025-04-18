import Image from "next/image";

const Navbar = () => {
  return <div className="border bg-main py-2 px-10">
    {/* Navbar View Mobile */}
    <div className="flex justify-between">
      <Image src="/img/logo.png" width={60} height={60} alt="logo" />
      <Image src="/svg/hamburger.svg" width={24} height={24} alt="logo" />
    </div>
  </div>;
};

export default Navbar;
