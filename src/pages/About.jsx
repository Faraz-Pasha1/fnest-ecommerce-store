import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Sparkles, Send, Phone, Mail, MapPin } from 'lucide-react';
import { PRODUCTS1 } from '../components/home/SplitSection1';
import { PRODUCTS2 } from '../components/home/SplitSection2';
import { PRODUCTS3 } from '../components/home/SplitSection3';
import { PRODUCTS4 } from '../components/home/SplitSection4';

const About = () => {
  const galleryProducts = useMemo(() => {
    const all = [...PRODUCTS1, ...PRODUCTS2, ...PRODUCTS3, ...PRODUCTS4];
    return all.sort(() => Math.random() - 0.5).slice(0, 8);
  }, []);

  return (
    <div className="about-page min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/about/fnest-about-mukhwas-mouth-freshener-celebration-chocolates-tradition-bouquets-gifts-viral-tranding.webp" 
          alt="About FNEST"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="relative text-center z-10 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-[14px] uppercase tracking-[0.6em] font-bold mb-6"
          >
            {/* The FNEST Story */}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-9xl font-playfair font-bold text-white tracking-tighter"
          >
            {/* About & Contact */}
          </motion.h1>
        </div>
      </section>

      {/* Brand Description Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-playfair font-bold text-dark-gray mb-8 leading-tight">A Perfection of <span className="text-green-500">Natural sweetness, freshness, gifts, indulgence</span></h2>
                <div className="w-24 h-1.5 bg-gray-700 mb-12" />
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                  FNEST embodies a passion for premium, authentic products that bring joy and enhance everyday moments. From natural sweetness to thoughtful gifts, our curated collection reflects a commitment to quality, flavor, and the art of sharing happiness.
                </p>
                <p className="text-lg md:text-lg text-gray-400 leading-relaxed mt-8 font-light italic">
                  "Perfection in every aspect of life, Natural sweetness, freshness, gifts, indulgence."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                   <Award className="text-royal-blue" size={32} />
                   <h4 className="text-xs uppercase tracking-widest font-bold text-green-400">Quality First</h4>
                   <p className="text-sm text-gray-400">Every product is meticulously sourced and inspected for excellence.</p>
                </div>
                <div className="space-y-4">
                   <ShieldCheck className="text-royal-blue" size={32} />
                   <h4 className="text-xs uppercase tracking-widest font-bold text-green-400">Authentic</h4>
                   <p className="text-sm text-gray-400">Guaranteed authentic premium products.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[5/5] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                   src="/fnestlogo/fnest-logo-ecommerce-shopping-tradition-mukhwas-mouth-freshener-chocolates-gift-bouquets-celebration-taste.webp" 
                   alt="Craftsmanship" 
                   className="w-full h-full object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-12 aspect-square w-64 rounded-3xl overflow-hidden shadow-2xl z-10 hidden md:block">
                <video 
                   autoPlay 
                   muted 
                   loop 
                   className="w-full h-full object-cover"
                 >
                   <source src="https://cdn.pixabay.com/video/2016/03/18/2504-159392237_large.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-premium-bg border-y border-light-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                 <Heart className="text-royal-blue" size={32} />
               </div>
               <h3 className="text-2xl font-playfair font-bold text-green-400">Premium Quality</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Sourced from the finest ingredients to deliver unmatched taste and freshness.</p>
            </div>
            <div className="space-y-6">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                 <Sparkles className="text-royal-blue" size={32} />
               </div>
               <h3 className="text-2xl font-playfair font-bold text-green-400">Authentic Taste</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Preserving traditional recipes for a genuine and delightful experience.</p>
            </div>
            <div className="space-y-6 md:col-start-2 lg:col-start-3">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                 <ShieldCheck className="text-royal-blue" size={32} />
               </div>
               <h3 className="text-2xl font-playfair font-bold text-green-400">Customer Satisfaction</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Dedicated to bringing joy and satisfaction with every curated product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Information */}
            <div className="space-y-16">
              <div>
                <h2 className="text-2xl md:text-4xl font-playfair font-bold text-green-400 mb-8">We'd love to hear from you.</h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                  Whether you have a question about our collections, need assistance with an order, or just want to say hello, our team is here for you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-premium-bg flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-dark-gray mb-2">Call / WhatsApp</h4>
                    <a href="https://wa.me/923710132188" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-500 hover:text-royal-blue transition-colors">+92 371 013 2188</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-premium-bg flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-dark-gray mb-2">Email</h4>
                    <a href="mailto:info@fnest.pk" className="text-lg text-gray-500 hover:text-royal-blue transition-colors">info@fnest.pk</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-premium-bg flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-dark-gray mb-2">Location</h4>
                    <p className="text-lg text-gray-500">Karachi, Pakistan</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-dark-gray mb-5">Follow Us</h4>
                  <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/fnest" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-premium-bg border border-light-gray/20 flex items-center justify-center text-dark-gray hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300" title="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/fnest" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-premium-bg border border-light-gray/20 flex items-center justify-center text-dark-gray hover:text-white transition-all duration-300" title="Instagram"
                      onMouseEnter={e => e.currentTarget.style.background='linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)'}
                      onMouseLeave={e => e.currentTarget.style.background=''}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.youtube.com/@fnest" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-premium-bg border border-light-gray/20 flex items-center justify-center text-dark-gray hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300" title="YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="https://wa.me/923710132188" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-premium-bg border border-light-gray/20 flex items-center justify-center text-dark-gray hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300" title="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.018A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.31 13.31 0 01-6.824-1.88l-.488-.29-5.017 1.198 1.225-4.899-.317-.502A13.298 13.298 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.314-9.864c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.984-1.188-1.061-1.99-2.372-2.224-2.772-.233-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.654-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.334s1.434 3.867 1.634 4.134c.2.267 2.822 4.307 6.836 6.04.956.413 1.7.66 2.283.845.959.306 1.832.263 2.52.16.769-.115 2.367-.968 2.7-1.902.333-.934.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b-2 border-light-gray py-4 text-xl focus:border-royal-blue outline-none transition-all placeholder:text-gray-300"
                    />
                    <motion.div className="absolute bottom-0 left-0 h-0.5 bg-royal-blue w-0" whileFocus={{ width: '100%' }} />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b-2 border-light-gray py-4 text-xl focus:border-royal-blue outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-transparent border-b-2 border-light-gray py-4 text-xl focus:border-royal-blue outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    rows="4"
                    placeholder="How can we help?"
                    className="w-full bg-transparent border-b-2 border-light-gray py-4 text-xl focus:border-royal-blue outline-none transition-all placeholder:text-gray-300 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-premium flex items-center space-x-3 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery — Randomized Product Collection */}
      <section className="py-24 bg-white border-t border-light-gray/20">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-2xl md:text-4xl font-playfair font-bold text-dark-gray">Our Aesthetic</h2>
             <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs">Our Product Collection</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {galleryProducts.map((product) => (
              <div key={product.id} className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg bg-premium-bg border border-light-gray/20" style={{ aspectRatio: '1 / 1.1' }}>
                <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
                <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white">
                  <h3 className="text-[28px] font-playfair font-bold text-dark-gray mb-2">{product.title}</h3>
                  <p className="text-[13px] text-gray-500 mb-3 line-clamp-5 leading-relaxed px-1">{product.description}</p>
                  <p className="text-royal-blue font-bold tracking-widest text-sm">Rs. {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
