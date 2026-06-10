import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Share2, Globe, Camera, Send } from 'lucide-react';
import { PRODUCTS1 } from '../components/home/SplitSection1';
import { PRODUCTS2 } from '../components/home/SplitSection2';
import { PRODUCTS3 } from '../components/home/SplitSection3';
import { PRODUCTS4 } from '../components/home/SplitSection4';

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data (matching Blog.jsx)
  const blogData = {
    1: {
      title: "Mukhwas & Mouth Freshener Collection",
      date: "May 10, 2026",
      author: "FNEST Team",
      image: "/gridimages/fnest-mukhwas-mouth-freshener-digestive-daily-meal-tradition.webp",
      content: "A refreshing collection of mukhwas and mouth fresheners designed to keep your breath pleasant and your digestion healthy."
    },
    2: {
      title: "Pure & Organic Honey Collection",
      date: "June 05, 2026",
      author: "FNEST Team",
      image: "/gridimages/fnest-shehad-beri-sidr-honey-pure-organic-nutrition-digestive-shifa.webp",
      content: "Discover the pure and organic honey collection from FNEST, bringing you the best of nature's sweetness."
    },
    3: {
      title: "Premium Gift & Bouquet Collection",
      date: "May 28, 2026",
      author: "FNEST Team",
      image: "/gridimages/fnest-gift-bouquet-bags-celebation-birthday-event-ocassion-for-girls.webp",
      content: "Explore the best gift and bouquet collection for every occasion with FNEST."
    },
    4: {
      title: "Premium Chocolate Collection",
      date: "May 25, 2026",
      author: "FNEST Team",
      image: "/gridimages/fnest-dubai-kunafa-viral-chocolate-premium-desserts-celebration-meetha.webp",
      content: "Indulge in the rich and decadent world of premium chocolates, crafted with the finest ingredients for a luxurious taste experience."
    }
  };

  const COLLECTION_MAP = {
    1: PRODUCTS1,
    2: PRODUCTS2,
    3: PRODUCTS3,
    4: PRODUCTS4
  };

  const blog = blogData[id] || blogData[1];

  return (
    <div className="blog-detail min-h-screen bg-white">
      {/* Header section with back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="flex items-center space-x-2 text-dark-gray hover:text-royal-blue transition-colors text-sm uppercase tracking-widest font-bold">
           <ArrowLeft size={18} />
           <span>Back to Blog</span>
        </Link>
      </div>

      <article>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
           <div className="text-center space-y-8">
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-green-400 text-[14px] uppercase tracking-[0.4em] font-bold"
              >
                Blog #{id}
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-6xl font-playfair font-bold text-dark-gray tracking-tight leading-tight"
              >
                {blog.title}
              </motion.h1>
              
              <div className="flex items-center justify-center space-x-8 text-xs uppercase tracking-widest font-bold text-gray-400">
                 <div className="flex items-center space-x-2">
                   <Clock size={14} />
                   <span>5 Min Read</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <User size={14} />
                   <span>{blog.author}</span>
                 </div>
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="rounded-3xl overflow-hidden shadow-2xl"
             style={{ height: 'calc(56.25vw * 0.25 + 56.25vw)', maxHeight: '620px', minHeight: '380px' }}
           >
             <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
           </motion.div>

           <div className="prose prose-xl mx-auto text-gray-600 leading-relaxed font-light space-y-8 py-12">
              <p className="text-xl md:text-2xl font-playfair italic text-dark-gray border-l-4 border-royal-blue pl-8 py-4">
                "Our collections bring joy, freshness, and indulgence to your everyday moments."
              </p>
              <p>{blog.content}</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
             {COLLECTION_MAP[id]?.map((product) => (
               <div key={product.id} className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg bg-premium-bg border border-light-gray/20" style={{ aspectRatio: '1 / 1.1' }}>
                 <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
                 <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white">
                   <h3 className="text-xl font-playfair font-bold text-dark-gray mb-3">{product.title}</h3>
                   <p className="text-xs text-gray-500 mb-4 line-clamp-4 leading-relaxed px-2">{product.description}</p>
                   <p className="text-royal-blue font-bold tracking-widest text-sm">Rs. {product.price}</p>
                 </div>
               </div>
             ))}
           </div>

           <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-light-gray/20">
              <div className="flex items-center space-x-6">
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Share Story:</span>
                <div className="flex items-center space-x-4">
                  <Share2 size={18} className="text-gray-400 hover:text-royal-blue cursor-pointer" />
                  <Globe size={18} className="text-gray-400 hover:text-royal-blue cursor-pointer" />
                  <Camera size={18} className="text-gray-400 hover:text-royal-blue cursor-pointer" />
                  <Send size={18} className="text-gray-400 hover:text-royal-blue cursor-pointer" />
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Link to="/blog" className="btn-premium">View Other Blogs</Link>
              </div>
           </div>
        </div>
      </article>
      
      <div className="h-40" />
    </div>
  );
};

export default BlogDetail;
