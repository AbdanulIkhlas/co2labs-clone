import Image from "next/image";

const HereForYouSection = ({ urlImage, Information, textButton }) => {
  return (
    <section className="bg-[#FAF9F6] py-20 px-10 md:px-10 lg:px-20 xl:px-40">
      <div
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row
      "
      >
        {/* Image Section */}
        <div className="w-full md:w-2/3 xl:w-1/3 h-90 lg:h-100 md:h-auto relative">
          <Image
            src={urlImage}
            alt="Here for you image"
            layout="fill"
            objectFit="cover"
            className="md:rounded-l-2xl"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-10 sm:p-10 flex flex-col justify-center text-black xl:ps-20">
          <h2 className="text-[32px] font-generalSans font-extrabold leading-12 md:text-3xl xl:text-4xl  mb-4">
            We’re Here For You
          </h2>
          <p className="text-base pe-3 md:text-lg font-medium mb-6 leading-relaxed xl:text-xl xl:pe-0">
            {Information}
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
            target="_blank"
          >
            <button className="bg-yellow-300 hover:bg-yellow-500 cursor-pointer text-black font-medium font-generalSans text-base px-4 py-2 w-full md:w-max rounded-md shadow-md transition-all">
              {textButton} <span className="ml-1">→</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HereForYouSection;
