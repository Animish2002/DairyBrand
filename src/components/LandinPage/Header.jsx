import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full">
      <div className="flex justify-center items-center w-full px-4">
        <div className="flex justify-between w-full max-w-6xl items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="w-36 h-auto" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            <li className="font-medium text-lg hover:underline transition-all duration-150 cursor-pointer hover:text-[#75B16C]">
              <a href="#">Home</a>
            </li>
            <li className="font-medium text-lg hover:underline transition-all duration-150 cursor-pointer hover:text-[#75B16C]">
              <a href="#about">About Us</a>
            </li>
            <li className="font-medium text-lg hover:underline transition-all duration-150 cursor-pointer hover:text-[#75B16C]">
              <a href="#products">Products</a>
            </li>
            <li className="font-medium text-lg hover:underline transition-all duration-150 cursor-pointer hover:text-[#75B16C]">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenuHandler}
            className="md:hidden z-50 relative w-8 h-6 flex flex-col justify-between"
          >
            <span
              className={`h-0.5 w-full bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-screen overflow-y-hidden example space-y-8">
              <li
                onClick={toggleMenuHandler}
                className="font-medium text-6xl hover:text-[#75B16C] transition-colors"
              >
                Home
              </li>
              <li
                onClick={toggleMenuHandler}
                className="font-medium text-6xl hover:text-[#75B16C] transition-colors"
              >
                About Us
              </li>
              <li
                onClick={toggleMenuHandler}
                className="font-medium text-6xl hover:text-[#75B16C] transition-colors"
              >
                Products
              </li>
              <li
                onClick={toggleMenuHandler}
                className="font-medium text-6xl hover:text-[#75B16C] transition-colors"
              >
                Contact
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
