import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";

const Home: React.FC = () => {
  return (
    <div className='h-full'>
      <HeroSection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
