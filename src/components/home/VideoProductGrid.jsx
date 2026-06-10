import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoProductGrid = () => {
  const videoProducts = [
    {
      id: 1,
      url: "/videos/fnest-celebration-gift-bags-bouquets-event-ocassion-mother-sister-friend-wife-smile.mp4",
      title: "Perfect Surprise Bouquet",
      // price: "$1,250"
    },
    {
      id: 2,
      url: "/videos/fnest-shehad-sidr-honey-beri-shopping-shifa-quran.mp4",
      title: "Pure Organic Sidr Honey",
      // price: "$850"
    },
    {
      id: 3,
      url: "videos/fnest-classic-mukhwas-mouth-freshener-digestive-viral-trending-tradition.mp4", // Reusing for variety or placeholder
      title: "Classic Mukhwas",
      // price: "$450"
    },
    {
      id: 4,
      url: "videos/fnest-classic-happy-birthday-mouth-freshener-digestive-viral-trending-tradition.mp4",
      title: "Happy Birthday Mouth Freshener",
      // price: "$290"
    },
    {
      id: 5,
      url: "videos/fnest-classic-khopra-mix-mouth-freshener-digestive-viral-trending-tradition.mp4",
      title: "Khopra Mix Mouth Freshener",
      // price: "$120"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-2 md:px-[60px]">
        <div className="text-center mb-10">
          <p className="text-royal-blue text-xs uppercase tracking-[0.5em] font-bold mb-4">Living Catalog</p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-dark-gray">Cinematic Collections</h2>
        </div>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={2}
          navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {videoProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative h-[300px] md:h-[600px] overflow-hidden shadow-2xl"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                >
                  <source src={p.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 transition-all duration-500" />
                
                <div className="absolute bottom-4 md:bottom-10 left-4 md:left-8 text-white">
                  <h4 className="text-sm md:text-xl font-playfair font-bold mb-1 transform group-hover:translate-x-2 transition-transform duration-500">{p.title}</h4>
                  {/* <p className="text-sm font-bold text-royal-blue transform group-hover:translate-x-2 transition-transform duration-500 opacity-0 group-hover:opacity-100">{p.price}</p> */}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoProductGrid;
