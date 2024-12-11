import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const milkProducts = [
  {
    id: 1,
    name: "Standardized Milk",
    description: "Creamy, farm-fresh whole milk from grass-fed cows",

    imageUrl: "/api/placeholder/400/300?text=Whole+Milk",
    category: "Fresh Milk",
  },
  {
    id: 2,
    name: "Cow Milk",
    description: "Fresh, protein-rich cottage cheese",

    imageUrl: "/api/placeholder/400/300?text=Cottage+Cheese",
    category: "Cheese",
  },
  {
    id: 3,
    name: "Full Cream Milk",
    description: "Pure, natural goat milk with unique flavor profile",

    imageUrl: "/api/placeholder/400/300?text=Goat+Milk",
    category: "Specialty Milk",
  },
  {
    id: 4,
    name: "Panner",
    description:
      "Nutritious low-fat milk, perfect for health-conscious consumers",

    imageUrl: "/api/placeholder/400/300?text=Low+Fat+Milk",
    category: "Fresh Milk",
  },
  {
    id: 5,
    name: "Basundi",
    description: "Smooth, dairy-free almond milk alternative",

    imageUrl: "/api/placeholder/400/300?text=Almond+Milk",
    category: "Plant-Based",
  },
  {
    id: 6,
    name: "Shrikhand",
    description: "Artisan sharp cheddar, aged to perfection",

    imageUrl: "/api/placeholder/400/300?text=Cheddar+Cheese",
    category: "Cheese",
  },

  {
    id: 7,
    name: "Amrakhand",
    description: "Thick, creamy Greek yogurt, high in protein",

    imageUrl: "/api/placeholder/400/300?text=Greek+Yogurt",
    category: "Yogurt",
  },
  {
    id: 8,
    name: "Dahi",
    description: "Smooth, creamy oat milk with a subtle sweetness",

    imageUrl: "/api/placeholder/400/300?text=Oat+Milk",
    category: "Plant-Based",
  },
  {
    id: 9,
    name: "Lassi",
    description: "Fresh, protein-rich cottage cheese",

    imageUrl: "/api/placeholder/400/300?text=Cottage+Cheese",
    category: "Cheese",
  },
  {
    id: 10,
    name: "Pure Cow Ghee",
    description:
      "Nutritious low-fat milk, perfect for health-conscious consumers",

    imageUrl: "/api/placeholder/400/300?text=Low+Fat+Milk",
    category: "Fresh Milk",
  },
  {
    id: 11,
    name: "Pure Buffalo Ghee",
    description: "Smooth, dairy-free almond milk alternative",

    imageUrl: "/api/placeholder/400/300?text=Almond+Milk",
    category: "Plant-Based",
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
    <section id="products" className="flex justify-center items-center h-screen bg-[#fcfbf4]">
      <div className="relative w-full py-8">
        {/* Category Selector */}
        <div className="container mx-auto px-4 mb-6 overflow-x-auto example">
          <div className="flex space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
        <div className="relative container mx-auto w-3/4">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Product Scroll Area */}
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex overflow-x-scroll no-scrollbar space-x-6 px-4 py-4 scroll-smooth example"
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
      className="flex-shrink-0 w-64 bg-white shadow-lg rounded-xl overflow-hidden relative"
      onHoverStart={() => !isDragging && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
          ></motion.div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 h-12 overflow-hidden">
          {product.description}
        </p>
        <div className="flex justify-between items-center"></div>
      </div>
    </motion.div>
  );
};

export default HorizontalProductScroll;
