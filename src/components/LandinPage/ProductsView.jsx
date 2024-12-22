import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const milkProducts = [
  {
    id: 1,
    name: "Pure Cow Ghee",
    description: "Premium-quality pure cow ghee for authentic Indian flavors.",
    imageUrl: "/api/placeholder/400/300?text=Cow+Ghee",
    category: "Ghee",
    price: 299,
  },
  {
    id: 2,
    name: "Cow Milk",
    description: "Fresh and pure cow milk, packed with essential nutrients.",
    imageUrl: "/api/placeholder/400/300?text=Cow+Milk",
    category: "Fresh Milk",
    price: 50,
  },
  {
    id: 3,
    name: "Full Cream Milk",
    description:
      "Luxuriously thick full cream milk, perfect for indulgent recipes.",
    imageUrl: "/api/placeholder/400/300?text=Full+Cream+Milk",
    category: "Fresh Milk",
    price: 60,
  },
  {
    id: 4,
    name: "Paneer",
    description:
      "Soft and fresh paneer, perfect for a variety of Indian dishes.",
    imageUrl: "/api/placeholder/400/300?text=Paneer",
    category: "Fresh Milk",
    price: 150,
  },
  {
    id: 5,
    name: "Basundi",
    description: "Traditional and creamy basundi, a delightful Indian dessert.",
    imageUrl: "/api/placeholder/400/300?text=Basundi",
    category: "Milk Dessert",
    price: 120,
  },
  {
    id: 6,
    name: "Shrikhand",
    description:
      "Deliciously smooth shrikhand, infused with rich Indian flavors.",
    imageUrl: "/api/placeholder/400/300?text=Shrikhand",
    category: "Milk Dessert",
    price: 100,
  },
  {
    id: 7,
    name: "Amrakhand",
    description: "Mango-flavored creamy amrakhand, a treat for mango lovers.",
    imageUrl: "/api/placeholder/400/300?text=Amrakhand",
    category: "Milk Dessert",
    price: 110,
  },
  {
    id: 8,
    name: "Dahi",
    description:
      "Thick and creamy dahi, perfect for everyday meals and recipes.",
    imageUrl: "/api/placeholder/400/300?text=Dahi",
    category: "Yogurt",
    price: 40,
  },
  {
    id: 9,
    name: "Lassi",
    description: "Refreshing and flavorful lassi, a traditional Indian drink.",
    imageUrl: "/api/placeholder/400/300?text=Lassi",
    category: "Yogurt",
    price: 30,
  },
  {
    id: 10,
    name: "Standardized Milk",
    description:
      "Rich and creamy standardized milk, ideal for your daily needs.",
    imageUrl: "/api/placeholder/400/300?text=Standardized+Milk",
    category: "Fresh Milk",
    price: 55,
  },
  {
    id: 11,
    name: "Pure Buffalo Ghee",
    description:
      "Rich and aromatic pure buffalo ghee, perfect for Indian cooking.",
    imageUrl: "/api/placeholder/400/300?text=Buffalo+Ghee",
    category: "Ghee",
    price: 349,
  },
];


const HorizontalProductScroll = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);

 
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (containerRef.current) {
        setWidth(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [currentCategory]);

  const categories = [
    "All",
    ...new Set(milkProducts.map((product) => product.category)),
  ];

  const filteredProducts =
    currentCategory === "All"
      ? milkProducts
      : milkProducts.filter((product) => product.category === currentCategory);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#fcfbf4] py-8 px-4 md:py-16 relative">
      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-5xl text-center mb-6 md:mb-12 text-[#75B16C] font-bold"
      >
        View Our Products
      </motion.h1>

      {/* Categories */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-2 pb-2 justify-start md:justify-center min-w-min px-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                currentCategory === category
                  ? "bg-[#E3D270] text-black font-semibold"
                  : "bg-white text-gray-700 hover:bg-blue-50 border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Products Container */}
      <div className="relative w-full md:w-5/6 mx-auto">
        {!isMobile && (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="hidden md:block absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
            >
              <FaChevronLeft className="text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
            >
              <FaChevronRight className="text-gray-700" />
            </motion.button>
          </>
        )}

        <motion.div
          ref={containerRef}
          className="overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-4 md:gap-6 px-2 py-10"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} isMobile={isMobile} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, isMobile }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex-shrink-0 ${
        isMobile ? 'w-[280px]' : 'w-[300px]'
      } bg-white shadow-lg rounded-xl overflow-hidden`}
    >
      <motion.div 
        className="relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
        >
          
        </motion.div>
      </motion.div>

      <motion.div 
        className="p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          
         
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HorizontalProductScroll;
