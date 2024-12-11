import React from "react";
import InfoBar from "./LandinPage/InfoBar";
import Header from "./LandinPage/Header";
import HeroSection from "./LandinPage/HeroSection";
import AboutUs from "./LandinPage/AboutUs";
import Footer from "./LandinPage/Footer";
import ProductsView from "./LandinPage/ProductsView";

const Home = () => {
  return (
    <div>
      <InfoBar />
      <Header />
      <HeroSection />
      <AboutUs />
      <ProductsView />
      <Footer />
    </div>
  );
};

export default Home;
