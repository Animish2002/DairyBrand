import React from "react";
import {
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F1E3] text-gray-800 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Fresh Dairy Logo"
              className="w-36 h-auto object-contain"
            />
          </div>
          <p className="text-base text-gray-600 mb-4">
            Providing you with farm-fresh dairy products <br/> that deliver quality,
            freshness, and nutrition in every delightful drop.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-400 transition-colors group"
              aria-label="Messenger"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors group"
              aria-label="Email"
            >
              <Mail className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "#home" },
              { label: "Products", href: "#products" },
              { label: "About Us", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center group text-gray-700 hover:text-[#E3D270] transition"
                >
                  <ChevronRight className="mr-2 w-4 h-4 text-[#E3D270] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E3D270]" />
              <span>123 Dairy Lane, Farm District</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#E3D270]" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#E3D270]" />
              <span>support@freshdairy.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Fresh Dairy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
