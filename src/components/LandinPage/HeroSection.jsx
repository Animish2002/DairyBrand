import React from "react";
import { delay, motion } from "framer-motion"; // Import motion from Framer Motion
import heroImage from "../../assets/herobg.jpg";
import cowimage from "../../assets/cow2.png";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  // Define animation variants for the background image, text, and button
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  const cowImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };
  return (
    <div className="h-screen relative">
      <motion.div
        // Apply animation variants to the background image
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="h-[89vh] w-full flex items-center justify-start relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center",
        }}
      >
        {/* Cow Image with animation */}
        <motion.img
          src={cowimage}
          alt="cow"
          className="absolute md:top-8 top-0.5 w-56 left-[-33px] md:left-[-35px] z-10"
          variants={cowImageVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Text with animation */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="px-6 md:px-16 text-white"
        >
          <motion.h1 className="md:text-6xl text-3xl font-bold">
            We Provide You With <br />
            All Fresh Dairy Products
          </motion.h1>

          {/* Additional description text */}
          <motion.p
            className="text-lg mt-4 md:max-w-xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: "0" }}
          >
            Sourced directly from the farm to your table, ensuring freshness and
            quality every time. Discover our range of dairy products today!
          </motion.p>

          {/* Button with animation */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="mt-6 md:px-8 md:py-4 px-3 py-2 bg-[#E3D270] text-black rounded-lg 
                         shadow-xl text-xl font-semibold 
                         transition-all duration-300 
                         flex items-center gap-2 
                         hover:bg-[#FFE589] 
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Contact us now <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
