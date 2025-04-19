import Image from "next/image";
import Link from "next/link";

const CardService = ({ srcIcon, title, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 px-[23px] w-full max-w-xs text-center flex flex-col items-center py-14
    md:py-10 md:px-[22px] md:h-99 md:box-border lg:w-72 lg:px-7">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4 md:box-border">
        <Image src={srcIcon} width={28} height={28} alt="Icon" />
      </div>
      <h1 className="font-generalSans text-black font-semibold text-xl mb-2">{title}</h1>
      <p className="font-generalSans mt-4 text-base font-normal text-black mb-6">
        {description}
      </p>
      <Link
        href={link}
        className="font-generalSans text-black text-base font-semibold underline underline-offset-2 hover:text-secondary"
      >
        View More
      </Link>
    </div>
  );
};

export default CardService;
