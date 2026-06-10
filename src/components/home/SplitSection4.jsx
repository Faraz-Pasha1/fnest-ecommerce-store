import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../shared/ProductCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PRODUCTS4 = [
  {
    id: 9,
    title: "Dubai Kunafa Chocolate 20g (1 pc)",
    subtitle: "Crunchy Kunafa Filled with Rich Chocolate Delight with Pistachio",
    price: 100,
    wasPrice: 120,
    code: "FP-401",
    description: "Experience the luxurious taste of viral Dubai-style kunafa chocolate made with crispy kunafa layers, creamy filling, and premium chocolate for an unforgettable dessert experience.",
    image: "/cardimages/fnest-dubai-kunafa-chocolate-premium-trending.webp",
    hoverImage: "/cardimages/fnest-dubai-viral-kunafa-chocolate-premium-opened-trending.webp",
    category: "Chocolates",
    netWeight: "20 g",
    ingredients: "Milk Chocolate, Crispy Kunafa Flakes, Creamy Filling, Roasted Pistachios",
    bestUseFor: "Best for gifting, dessert serving, special occasions, tea-time treats, sweet cravings."
  },
  {
    id: 10,
    title: "Dubai Kunafa Chocolate 40g (1 pc)",
    subtitle: "Crunchy Kunafa Filled with Rich Chocolate Delight with Pistachio",
    price: 200,
    wasPrice: 220,
    code: "FP-402",
    description: "Experience the luxurious taste of viral Dubai-style kunafa chocolate made with crispy kunafa layers, creamy filling, and premium chocolate for an unforgettable dessert experience.",
    image: "/cardimages/fnest-dubai-kunafa-chocolate-premium-trending-40g.webp",
    hoverImage: "/cardimages/fnest-dubai-kunafa-chocolate-premium-trending-opened-40g.webp",
    category: "Chocolates",
    netWeight: "40 g",
    ingredients: "Milk Chocolate, Crispy Kunafa Flakes, Creamy Filling, Roasted Pistachios",
    bestUseFor: "Best for gifting, dessert serving, special occasions, tea-time treats, sweet cravings."
  }
];

const SplitSection4 = () => {
  const image = "/splitimages/fnest-premium-kunafa-chocolate-pistachio-crunchy-delight-desserts.webp";
  const title = "Premium Kunafa Chocolate";

  return (
    <section className="py-4 bg-white overflow-hidden">
      <div className="w-full px-2 md:px-[60px] mx-auto space-y-0">
        <div className="relative w-full h-[110px] md:h-[260px] overflow-hidden group rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-16 text-right">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-green-400 text-[11px] md:text-[14px] uppercase tracking-[0.2em] md:tracking-[0.5em] font-bold mb-2"
            >
              Premium Chocolate Collection
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg md:text-4xl font-playfair font-bold text-white tracking-tight mb-1 md:mb-4"
            >
              {title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 text-white text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold border-b border-white/50 pb-1.5 hover:border-white hover:text-green-400 transition-all duration-300 w-fit"
              >
                <span>Shop Now</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="bg-premium-bg py-8 rounded-b-xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={2}
            navigation
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2.4, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
            className="w-full px-4"
          >
            {PRODUCTS4.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SplitSection4;
