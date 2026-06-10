import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../shared/ProductCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PRODUCTS2 = [
  {
    id: 1,
    title: "Pure Sidr Honey - 450g",
    subtitle: "100% Pure & Natural Honey  and Beri ka Shehad",
    price: 1600,
    wasPrice: 1750,
    code: "FP-102",
    description: "Experience the rich, authentic taste of pure Sidr Honey, harvested from the sacred Sidr trees. This premium, organic honey is renowned for its dark amber color, thick consistency",
    image: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-450g.webp",
    hoverImage: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-opened-450g.webp",
    category: "Honey",
    netWeight: "450 g",
    ingredients: "100% Natural Sidr Honey",
    bestUseFor: "Immunity Boosting, Digestive Aid, General Wellness."
  },
  {
    id: 2,
    title: "Pure Sidr Honey - 250g",
    subtitle: "100% Pure & Natural Honey  and Beri ka Shehad",
    price: 850,
    wasPrice: null,
    code: "FP-103",
    description: "Experience the rich, authentic taste of pure Sidr Honey, harvested from the sacred Sidr trees.",
    image: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-250g.webp",
    hoverImage: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-opened-250g.webp",
    category: "Honey",
    netWeight: "250 g",
    ingredients: "100% Natural Sidr Honey",
    bestUseFor: "Immunity Boosting, Digestive Aid, General Wellness."
  },
  {
    id: 20,
   title: "Pure Sidr Honey - 950g",
    subtitle: "100% Pure & Natural Honey and Beri ka Shehad",
    price: 3200,
    wasPrice: null,
    code: "FP-101",
    description: "Experience the rich, authentic taste of pure Sidr Honey, harvested from the sacred Sidr trees.",
    image: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-950g.webp",
    hoverImage: "/cardimages/fnest-honey-shehad-healthy-eating-nutrition-organic-sidr-pakistan-natural-opened-950g.webp",
    category: "Honey",
    netWeight: "950 g",
    ingredients: "100% Natural Sidr Honey",
    bestUseFor: "Immunity Boosting, Digestive Aid, General Wellness."
  }
];

const SplitSection2 = () => {
  const image = "/splitimages/fnest-pure-honey-shehad-natural-organic-taste-freshness.webp";
  const title = "Purest Taste of Nature";

  return (
    <section className="py-8 bg-white overflow-hidden">
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
              className="text-green-400 text-[11px] md:text-[14px] uppercase tracking-[0.2em] md:tracking-[0.5em] font-bold mb-1 md:mb-2"
            >
              Organic Selection
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[22px] md:text-4xl font-playfair font-bold text-white tracking-tight mb-1 md:mb-4"
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
                className="inline-flex items-center space-x-2 text-white text-white text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold border-b border-white/50 pb-1.5 hover:border-white hover:text-green-400 transition-all duration-300 w-fit"
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
            {PRODUCTS2.map((product) => (
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

export default SplitSection2;
