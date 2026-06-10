import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Mukhwas & Mouth Freshener Collection",
      image: "/gridimages/fnest-mukhwas-mouth-freshener-digestive-daily-meal-tradition.webp",
      excerpt: "A refreshing mukhwas & mouth freshener designed to keep your breath pleasant and confidence high."
    },
    {
      id: 2,
      title: "Pure & Organic Honey Collection",
      image: "/gridimages/fnest-shehad-beri-sidr-honey-pure-organic-nutrition-digestive-shifa.webp",
      excerpt: "Discover the pure and organic honey collection from FNEST, bringing you the best of nature's sweetness."
    },
    {
      id: 3,
      title: "Premium Gift & Bouquet Collection",
      image: "/gridimages/fnest-gift-bouquet-bags-celebation-birthday-event-ocassion-for-girls.webp",
      excerpt: "Discover the best gift and bouquet collection for every occasion with FNEST."
    },
    {
      id: 4,
      title: "Premium Chocolate Collection",
      image: "/gridimages/fnest-dubai-kunafa-viral-chocolate-premium-desserts-celebration-meetha.webp",
      excerpt: "Indulge in the rich and decadent world of premium chocolates, crafted with the finest ingredients for a luxurious taste experience."
    }
  ];

  return (
    <div className="blog-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/blog/fnest-mukhwas-gift-celebration-trending-shopping.webp' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center z-10 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-[24px] uppercase tracking-[0.5em] font-bold mb-6"
          >
            Best Collection 
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-playfair font-bold text-white tracking-tighter"
          >
            Insights & Details
          </motion.h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {blogs.map((blog) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="group relative h-[400px] md:h-[550px] overflow-hidden cursor-pointer shadow-2xl"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-royal-blue/90 transition-all duration-700" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                  <div className="space-y-6">
                    {/* <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-royal-blue group-hover:text-white transition-colors duration-500">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div> */}
                    
                    <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white leading-tight group-hover:translate-y-[-10px] transition-transform duration-700">
                      {blog.title}
                    </h2>
                    
                    <div className="flex items-center space-x-3 text-white text-xs uppercase tracking-widest font-bold pt-4 group-hover:translate-x-2 transition-transform duration-500">
                      <span>Read Story</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white border-t border-light-gray/20">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-gray">Collections Highlights</h2>
             <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs">A Quick Journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               "/bloghighlights/fnest-mouth-freshener-mukhwas-tradition-digestive-meal (2).webp",
               "/bloghighlights/fnest-pure-organic-beri-sidr-honey-shehad-digestive-shifa-quran.webp",
               "/bloghighlights/fnest-birthdays-events-ocassions-celebration-mothers-day-sister-forgirls-wife-gift-bouquets.webp",
               "/bloghighlights/fnest-dubai-viral-kunafa-chocolate-pistashio-taste-premium.webp"
             ].map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden group cursor-pointer shadow-sm">
                   <img src={img} alt={`Blog Gallery ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
