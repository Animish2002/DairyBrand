import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
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
  const [isDragging, setIsDragging] = useState(false);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(milkProducts.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts =
    currentCategory === "All"
      ? milkProducts
      : milkProducts.filter((product) => product.category === currentCategory);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="products"
      className="flex justify-center items-center min-h-screen bg-[#fcfbf4] py-12 md:py-16 relative"
    >
      <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 absolute top-10 text-[#75B16C]">
        View All Our <span>Products</span>
      </h1>
      <div className="w-full">
        {/* Category Selector */}
        <div className="container mx-auto px-4 mb-6 overflow-x-auto ">
          <div className="flex space-x-2 md:space-x-4 pb-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  currentCategory === category
                    ? "bg-[#E3D270] text-black font-semibold"
                    : "bg-white text-gray-700 hover:bg-blue-100 border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative md:w-5/6 mx-auto w-full px-4 md:px-8 lg:px-12 y-">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-100 transition"
          >
            <FaChevronLeft className="text-gray-700 text-sm md:text-base" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-100 transition"
          >
            <FaChevronRight className="text-gray-700 text-sm md:text-base" />
          </button>

          {/* Product Scroll Area */}
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex overflow-x-scroll no-scrollbar space-x-4 md:space-x-6 scroll-smooth example py-16"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isDragging={isDragging}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, isDragging }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0 w-48 md:w-64 bg-white shadow-lg rounded-xl overflow-hidden relative transform transition-transform duration-300"
      onHoverStart={() => !isDragging && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-36 md:h-48 object-cover"
        />

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center space-x-4"
          ></motion.div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-3 md:p-4">
        <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 h-10 md:h-12 overflow-hidden">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};

export default HorizontalProductScroll;
