import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between w-8/12 items-center">
        <div>
          <img src={logo} alt="logo" className="w-36 bg-cover" />
        </div>

        <ul className="flex gap-8 px-8">
          <li className="font-medium text-[1.2rem] hover:underline transition-all duration-300 cursor-pointer">Home</li>
          <li className="font-medium text-[1.2rem] hover:underline transition-all duration-300 cursor-pointer">AboutUs</li>
          <li className="font-medium text-[1.2rem] hover:underline transition-all duration-300 cursor-pointer">Products</li>
          <li className="font-medium text-[1.2rem] hover:underline transition-all duration-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
