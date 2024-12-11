import React from "react";
import { Facebook, Mail, Phone, MessageCircle } from "lucide-react";

const InfoBar = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left Section (Hidden on Mobile) */}
      <div className="hidden md:block bg-[#F4F3E9] px-4 md:px-24 py-3 text-center md:text-left w-full md:w-1/2">
        We provide <span className="text-green-400">100%</span> fresh service to
        our customers
      </div>

      {/* Right Section */}
      <div className="bg-[#E3D270] px-4 py-3 flex flex-col md:flex-row w-full md:w-12/12 items-center justify-between">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <span className="md:px-4">Email: info.dairy@gmail.com</span>
          <span className="md:px-4">Phone: +122 555 444 22</span>
        </div>

        {/* Social Icons */}
        <ul className="flex justify-center md:justify-end mt-2 md:mt-0 space-x-4">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Facebook className="w-5 h-5 hover:text-blue-500 hover:font-medium transition-all duration-200" />
            </a>
          </li>
          <li>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <MessageCircle className="w-5 h-5 hover:text-blue-500 hover:font-medium transition-all duration-200" />
            </a>
          </li>
          <li>
            <a href="mailto:info.dairy@gmail.com" className="hover:opacity-80">
              <Mail className="w-5 h-5 hover:text-blue-500 hover:font-medium transition-all duration-200" />
            </a>
          </li>
          <li>
            <a href="tel:+12255544422" className="hover:opacity-80">
              <Phone className="w-5 h-5 hover:text-blue-500 hover:font-medium transition-all duration-200" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoBar;