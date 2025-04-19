"use client";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#141516] text-white px-10 py-22 pb-10 font-generalSans font-medium text-[16px]
    md:px-10 lg:px-30"
    >
      <div className="lg:flex lg:justify-start lg:gap-10 xl:justify-between xl:gap-50">
        {/* Newsletter */}
        <div className="mb-10 lg:flex lg:flex-col lg:justify-between xl:w-[33%]  ">
          <h1 className="font-extrabold text-[32px] font-generalSans pe-8">
            Let’s Grow With CO2 Labs
          </h1>
          <div className="lg:mt-76 xl:mt-0 xl:pe-8">
            <h3 className="font-semibold text-[20px] font-generalSans mt-2 pe-8 ">
              Get Exclusive Updates From Us
            </h3>

            <div className="flex w-full mt-6 rounded-full overflow-hidden bg-white max-w-md  ">
              <input
                type="email"
                placeholder="Yourmail@example.com"
                className="px-4 py-2 text-[#888888] font-medium placeholder-gray-400 focus:outline-none w-43 xl:w-70"
              />
              <button className="bg-[#E3B505] text-black font-semibold px-5 py-2 hover:bg-[#d1a904] transition-colors w-full xl:w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div
          className="flex flex-col md:flex-row gap-10 text-sm mt-20 md:gap-0 md:mt-24 md:justify-start
        lg:flex-col lg:mt-0 lg:gap-10 xl:flex-row xl:gap-5 xl:w-full"
        >
          {/* Services */}
          <div className=" md:w-[86%] xl:w-[90%]">
            <h4 className="font-medium mb-2 text-white font-generalSans text-xl">
              Services
            </h4>
            <ul className="space-y-1 ps-2 font-medium font-generalSans text-base leading-5 text-[#888888] list-disc list-inside">
              <li>
                <Link href="/service/web-main">Web Maintenance</Link>
              </li>
              <li>
                <Link href="/service/web-dev">Web & App Development</Link>
              </li>
              <li>
                <Link href="/service/it-service">IT Service</Link>
              </li>
              <li>
                <Link href="/service/ai-solution">3rd Party AI Solution</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className=" md:w-[60%]">
            <h4 className="font-medium mb-2 text-white font-generalSans text-xl">
              About
            </h4>
            <ul className="space-y-1 text-[#888888] ps-2 font-medium font-generalSans text-base leading-5 list-disc list-inside">
              <li>
                <button
                  onClick={() => scrollToSection("strategic")}
                  className="cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="cursor-pointer">
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="cursor-pointer"
                >
                  Our Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className=" md:w-full">
            <h4 className="font-medium mb-2 text-white font-generalSans text-xl">
              Contact
            </h4>
            <ul className="space-y-1 text-[#888888] ps-2 font-medium font-generalSans text-base leading-5 list-disc list-inside md:leading-6">
              <li>
                <a
                  href="https://wa.me/6581181595"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📞 +65-8118-1595
                </a>
              </li>
              <li>
                <a href="mailto:info@co2labs.com">📧 info@co2labs.com</a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=100D+Pasir+Panjang+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🗺️ 100D Pasir Panjang Road
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="mt-10 flex font-generalSans font-medium text-base flex-col justify-between items-start text-[#888888]
      md:flex-row-reverse lg:mt-0"
      >
        <div className="space-x-10 mb-2 md:mb-0">
          <Link href="/faq">FAQ</Link>
          <Link href="/termspolicy">Terms & Policy</Link>
        </div>
        <div className="mt-4 md:mt-0">©2024 CO2 Labs. All Right Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
