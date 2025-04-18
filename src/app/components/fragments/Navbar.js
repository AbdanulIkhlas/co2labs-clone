"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
    };
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-main py-2 px-4 md:px-10">
      {/* Navbar Mobile */}
      <div className="flex justify-between items-center md:hidden">
        <Link href="/">
          <Image src="/img/logo.png" width={60} height={60} alt="logo" />
        </Link>
        <button onClick={toggleSidebar}>
          <Image src="/svg/hamburger.svg" width={20} height={20} alt="menu" />
        </button>
      </div>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-72 h-full bg-main shadow-lg p-6 z-50"
            ref={sidebarRef}
          >
            <div className="flex justify-start">
              <button onClick={closeSidebar}>
                <span className="text-5xl text-gray-500">×</span>
              </button>
            </div>
            <ul className="mt-4 space-y-4 font-medium text-gray-900">
              <li
                className="bg-gray-100 p-2 rounded cursor-pointer font-medium font-generalSans hover:underline"
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </li>
              <li className="list-disc ml-4 text-gray-900 underline font-medium font-generalSans ">
                <Link href="/service/web-main">Website Maintenance</Link>
              </li>
              <li className="list-disc ml-4 text-gray-900 underline font-medium font-generalSans ">
                <Link href="/service/web-dev">Website & App Development</Link>
              </li>
              <li className="list-disc ml-4 text-gray-900 underline font-medium font-generalSans ">
                <Link href="/service/it-service">IT Support</Link>
              </li>
              <li className="list-disc ml-4 text-gray-900 underline font-medium font-generalSans ">
                <Link href="/service/ai-solution">3rd Party AI Solution</Link>
              </li>
              <li
                className="bg-gray-100 p-2 rounded cursor-pointer font-medium font-generalSans hover:underline"
                onClick={() => scrollToSection("aboutUs")}
              >
                About Us
              </li>
              <li
                className="bg-gray-100 p-2 rounded cursor-pointer font-medium font-generalSans hover:underline"
                onClick={() => scrollToSection("portfolio")}
              >
                Portfolio
              </li>
              <li
                className="bg-gray-100 p-2 rounded cursor-pointer font-medium font-generalSans hover:underline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
                  target="_blank"
                  className="block mt-4 bg-secondary text-sm font-generalSans font-medium text-white text-center py-3 rounded"
                >
                  Get Started Today!
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Desktop */}
      <div className="hidden md:flex justify-between items-center">
        <Link href="/">
          <Image src="/img/logo.png" width={60} height={60} alt="logo" />
        </Link>
        <div className="flex items-center gap-6 text-white font-medium">
          {/* Our Services Dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <span>Our Services</span>
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 bg-white shadow-md text-gray-900 rounded-md overflow-hidden"
                >
                  <ul className="w-52 py-2 px-4 space-y-2">
                    <li>
                      <Link href="/service/web-main">Website Maintenance</Link>
                    </li>
                    <li>
                      <Link href="/service/web-dev">
                        Website & App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/it-service">IT Support</Link>
                    </li>
                    <li>
                      <Link href="/service/ai-solution">
                        3rd Party AI Solution
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
          target="_blank"
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90"
        >
          Chat via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
