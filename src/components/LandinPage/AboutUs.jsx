import React from "react";
import { Check, Leaf, Truck } from "lucide-react";
import cows1 from "../../assets/cows1.png";
import cows2 from "../../assets/cows2.png";
import singlecow from "../../assets/singlecow.png";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our Dairy Journey
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fresh Dairy began with a simple mission: to bring the purest, most
              nutritious dairy products from our family farm directly to your
              table. With generations of farming experience, we understand that
              great dairy starts with happy cows and sustainable practices.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Leaf className="w-6 h-6 text-[#E3D270]" />,
                  text: "Ethically raised cows on lush, green pastures",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-[#E3D270]" />,
                  text: "100% organic and environmentally friendly practices",
                },
                {
                  icon: <Truck className="w-6 h-6 text-[#E3D270]" />,
                  text: "Direct farm-to-table delivery within 24 hours",
                },
              ].map(({ icon, text }, index) => (
                <div key={index} className="flex items-center gap-4">
                  {icon}
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={singlecow}
                  alt="Dairy Farm"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={cows1}
                    alt="Cow Grazing"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={cows2}
                    alt="Milk Processing"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#E3D270] 
              rounded-full opacity-20 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
