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
    <footer className="bg-[#141516] text-white px-10 md:px-20 py-20 pb-10 font-generalSans font-medium text-[16px]">
      {/* Newsletter */}
      <div className="mb-10">
        <h1 className="font-extrabold text-[32px] font-generalSans pe-8">
          Let’s Grow With CO2 Labs
        </h1>
        <h3 className="font-semibold text-[20px] font-generalSans mt-2 pe-8 ">
          Get Exclusive Updates From Us
        </h3>
        <div className="flex w-full mt-6 rounded-full overflow-hidden bg-white max-w-md">
          <input
            type="email"
            placeholder="Yourmail@example.com"
            className="px-4 py-2 text-[#888888] font-medium placeholder-gray-400 focus:outline-none w-50"
          />
          <button className="bg-[#E3B505] text-black font-semibold px-5 py-2 hover:bg-[#d1a904] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2 text-white font-generalSans text-xl">
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
        <div>
          <h4 className="font-semibold mb-2 text-white font-generalSans text-xl">
            About
          </h4>
          <ul className="space-y-1 text-[#888888] ps-2 font-medium font-generalSans text-base leading-5 list-disc list-inside">
            <li>
              <button onClick={() => scrollToSection("strategic")} className="">
                Our Approach
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="">
                Our Team
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("portfolio")} className="">
                Our Portfolio
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2 text-white font-generalSans text-xl">
            Contact
          </h4>
          <ul className="space-y-1 text-[#888888] ps-2 font-medium font-generalSans text-base leading-5 list-disc list-inside">
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

      <div className="mt-10 flex font-generalSans font-medium text-base flex-col md:flex-row justify-between items-start text-[#888888]">
        <div className="space-x-10 mb-2 md:mb-0">
          <Link href="/faq">FAQ</Link>
          <Link href="/termspolicy">Terms & Policy</Link>
        </div>
        <div className="mt-4">©2024 CO2 Labs. All Right Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
