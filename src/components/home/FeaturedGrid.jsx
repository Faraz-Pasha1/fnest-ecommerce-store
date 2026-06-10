import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedGrid = () => {
  const categories = [
    {
      title: "Mukhwas & Mouth Freshener Collection",
      image: "/gridimages/fnest-mukhwas-mouth-freshener-digestive-daily-meal-tradition.webp",
      path: "/shop?category=mukhwas-mouth-fresheners"
    },
    {
      title: "Pure & Organic Honey Collection",
      image: "/gridimages/fnest-shehad-beri-sidr-honey-pure-organic-nutrition-digestive-shifa.webp",
      path: "/shop?category=Honey"
    },
    {
      title: "Premium Gift & Bouquet Collection",
      image: "/gridimages/fnest-gift-bouquet-bags-celebation-birthday-event-ocassion-for-girls.webp",
      path: "/shop?category=Gifts-Bouquets"
    },
    {
      title: "Premium Chocolate Collection",
      image: "/gridimages/fnest-dubai-kunafa-viral-chocolate-premium-desserts-celebration-meetha.webp",
      path: "/shop?category=Chocolates"
    }
  ];

  return (
    <section className="py-30 bg-white">
      <div className="w-full mx-auto px-2 md:px-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              to={cat.path}
              className="group relative h-[300px] md:h-[500px] overflow-hidden"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-royal-blue/40 transition-all duration-700" />
              
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                <motion.h3 
                  className="text-xl md:text-4xl font-playfair font-bold text-white mb-4 md:mb-6 transform group-hover:translate-y-[-10px] transition-transform duration-500"
                >
                  {cat.title}
                </motion.h3>
                <div className="flex items-center space-x-3 text-white text-xs uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   <span>Shop Now</span>
                   <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
