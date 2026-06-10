import React from 'react';
import Hero1 from '../components/home/Hero1';
import Hero2 from '../components/home/Hero2';
import Hero3 from '../components/home/Hero3';
import Hero4 from '../components/home/Hero4';
import Hero5 from '../components/home/Hero5';
import BestSellers from '../components/home/BestSellers';
import SplitSection1 from '../components/home/SplitSection1';
import SplitSection2 from '../components/home/SplitSection2';
import SplitSection3 from '../components/home/SplitSection3';
import SplitSection4 from '../components/home/SplitSection4';
import Testimonials from '../components/home/Testimonials';
import FeaturedGrid from '../components/home/FeaturedGrid';
import VideoProductGrid from '../components/home/VideoProductGrid';

const Home = () => {
  return (
    <div className="home-page">
      <Hero1 />

      <div className="space-y-0">
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
      </div>

      <div className="relative z-50 bg-white">
        {/* Best Selling Products */}
        <BestSellers />

      {/* 30/70 Split Sections */}
      <SplitSection1 />
      <SplitSection2 />

      {/* NEW: 2x2 Categories Grid */}
      <FeaturedGrid />

      <SplitSection3 />
      <SplitSection4 />

      {/* Testimonials */}
      <Testimonials />

        <VideoProductGrid />
      </div>
    </div>
  );
};

export default Home;
