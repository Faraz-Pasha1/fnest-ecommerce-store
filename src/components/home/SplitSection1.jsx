import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../shared/ProductCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PRODUCTS1 = [
  {
    id: 3,
    title: "Classic Mukhwas",
    subtitle: "Tradition in Every Bite",
    price: 220,
    wasPrice: 250,
    code: "FNP-206",
    description: "Essajee's Classic Mukhwas is a premium, traditional mouth freshener designed to aid digestion and naturally refresh the breath.",
    image: "/cardimages/fnest-classic-mukhwas-full-of-freshness-trending.webp",
    hoverImage: "/cardimages/fnest-classic-premium-taste-foryou-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "105 g",
    ingredients: "Sugar Coated, Fennel Seed, Sesame Seed, Coriander Seed, Misri (Rock Sugar), Almonds, Coconut, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Digestion, Mouth Freshening, Post Meal"
  },
  {
    id: 4,
    title: "Mouth Freshener",
    subtitle: "Refresh Your Every Moment",
    price: 210,
    wasPrice: 230,
    code: "FNP-209",
    description: "A premium mouth freshener crafted to provide lasting freshness and enjoyable flavor.",
    image: "/cardimages/fnest-mouth-uth-freshness-flavor-trending.webp",
    hoverImage: "/cardimages/fnest-mouth-uth-freshness-flavor-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "150 g",
    ingredients: "Sugar Coated, Fennel Seed, Coconut, Misri (Rock Sugar), Roasted Dry Dates, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Digestion, Mouth Freshening, Post Meal"
  },
  {
    id: 5,
    title: "Khopra Mix Mukhwas",
    subtitle: "Coconut Rich Flavor Mix",
    price: 210,
    wasPrice: 230,
    code: "FNP-210",
    description: "A delicious khopra mix blended with crunchy and flavorful ingredients for a premium snacking experience.",
    image: "/cardimages/fnest-khoora-mix-mouth-freshness-flavor-trending.webp",
    hoverImage: "/cardimages/fnest-khoora-mix-mouth-freshness-flavor-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "150 g",
    ingredients: "Sugar Coated, Fennel Seed, Coconut, Roasted Dry Dates, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Sweet snacking, tea time, gifting, and festive serving."
  },
  {
    id: 12,
    title: "Sada Mukhwas",
    subtitle: "Simple, Fresh & Traditional",
    price: 230,
    wasPrice: 250,
    code: "FNP-207",
    description: "A light and refreshing sada mukhwas perfect for daily freshness and digestion support.",
    image: "/cardimages/fnest-sada-mukhwas-full-of-freshness-trending.webp",
    hoverImage: "/cardimages/fnest-sada-mukhwas-full-of-freshness-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "90g",
    ingredients: "Sugar Coated, Fennel Seed, Sesame Seed, Coriander Seed, Watermelon Seed, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Daily use, light refreshment, and simple traditional flavor."
  },
  {
    id: 13,
    title: "Green Mukhwas",
    subtitle: "Refreshing Green Blend",
    price: 210,
    wasPrice: 230,
    code: "FNP-208",
    description: "A refreshing green mukhwas packed with flavorful ingredients and cooling freshness.",
    image: "/cardimages/fnest-green-mukhwas-full-of-freshness-trending.webp",
    hoverImage: "/cardimages/fnest-green-mukhwas-full-of-freshness-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "140 g",
    ingredients: "Sugar Coated, Fennel Seed, Coriander Seed, Coconut, Misri (Rock Sugar), Roasted Dry Dates, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Cooling freshness, guest serving, and after-meal refreshment."
  },
  {
    id: 14,
    title: "Coconut Mouth Freshener",
    subtitle: "Coconut Flavor & Freshness",
    price: 330,
    wasPrice: 350,
    code: "FNP-205",
    description: "A delicious coconut-flavored mouth freshener with a sweet and refreshing taste.",
    image: "/cardimages/fnest-coconut-mouth-feel-difference-jar-trending.webp",
    hoverImage: "/cardimages/fnest-coconut-mouth-feel-difference-for-jar-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220 g",
    ingredients: "Sugar Coated, Fennel Seed, Roasted Dates, Misri (Rock Sugar), Coconut, Cocoa Powder, Food Color, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Sweet coconut flavor lovers and refreshing breath after meals"
  },
  {
    id: 15,
    title: "Happy Birthday Mouth Freshener",
    subtitle: "Celebrate with Freshness",
    price: 330,
    wasPrice: 350,
    code: "FNP-203",
    description: "A colorful and festive mouth freshener crafted for parties, celebrations, and joyful moments.",
    image: "/cardimages/fnest-celebrate-birthday-with-chocolate-balls-and-meetha-pan-masala-trending.webp",
    hoverImage: "/cardimages/fnest-celebration-taste-flavor-freshness-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220 g",
    ingredients: "Sugar Coated, Fennel Seed, Coriander Seed, Coconut, Misri (Rock Sugar), Roasted Dry Dates, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Best for birthday parties, celebrations, return gifts, and event tables."
  },
  {
    id: 16,
    title: "Meethas Delicious Meva",
    subtitle: "Premium Dry Fruit Delight",
    price: 330,
    wasPrice: 350,
    code: "FNP-200",
    description: "A rich and flavorful blend of premium meva crafted for taste, freshness, and daily enjoyment.",
    image: "/cardimages/fnest-decilcious-meetha-pan-masala-jar-trending.webp",
    hoverImage: "/cardimages/fnest-decilcious-meetha-pan-masala-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220 g",
    ingredients: "Sugar Coated , Fennel Seed , Misri (Rock Sugar) , Roasted Dry Dates , Almonds , Coconut , Food Color , Artificial Food Flavor",
    bestUseFor: "Best for daily snacking, guest serving, tea time, and healthy energy intake."
  },
  {
    id: 17,
    title: "Roasted Mouth Freshener",
    subtitle: "Roasted Taste with Freshness",
    price: 330,
    wasPrice: 350,
    code: "FNP-202",
    description: "A premium roasted mouth freshener offering rich flavor and long-lasting freshness after meals.",
    image: "/cardimages/fnest-roasted-mouth-jar-freshener-full-of-freshness-trending.webp",
    hoverImage: "/cardimages/fnest-roasted-mouth-freshener-full-of-freshness-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "140 g",
    ingredients: "Roasted Fennel Seed, Roasted Sesame Seed, Roasted Coriander, Roasted Watermelon Seed, Roasted Coconut",
    bestUseFor: "Best after meals for long-lasting freshness and digestive comfort."
  },
  {
    id: 18,
    title: "Baat Cheet Mouth Freshener",
    subtitle: "Refresh Every Conversation",
    price: 330,
    wasPrice: 350,
    code: "FNP-204",
    description: "A refreshing mouth freshener designed to keep your breath pleasant and confidence high.",
    image: "/cardimages/fnest-baat-cheet-meetha-pan-masala-jar-trending.webp",
    hoverImage: "/cardimages/fnest-baat-cheet-meetha-pan-masala-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220 g",
    ingredients: "Sugar Coated, Fennel Seed, Roasted DAtes, Misri (Rock Sugar), Coconut, Cocoa Powder, Food Color, Natural & Artifical Flavor, Menthol",
    bestUseFor: "Best before meetings, conversations, social gatherings, and daily freshness."
  },
  {
    id: 19,
    title: "Mix Max Classic Mouth Freshener",
    subtitle: "Crunchy & Flavorful Mix",
    price: 330,
    wasPrice: 350,
    code: "FNP-201",
    description: "A tasty classic mix filled with refreshing flavors and crunchy ingredients for every moment.",
    image: "/cardimages/fnest-mixmax-mouth-freshener-full-of-freshness-jar-trending.webp",
    hoverImage: "/cardimages/fnest-mixmax-mouth-freshener-full-of-freshness-for-jar-opened-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220 g",
    ingredients: "Sugar Coated, Fennel Seed, Sesame Seeds, Misri (Rock Sugar), Roasted Dry Dates, Coriander Seeds, Food Color, Artificial Food Flavor",
    bestUseFor: "Best for gatherings, casual snacking, travel, and refreshment after meals."
  }
];

const SplitSection1 = () => {
  const image = "/splitimages/fnest-mouth-freshener-mukhwas-premium-collection-freshness.webp";
  const title = "World Traditional Taste";

  return (
    <section className="py-4 bg-white overflow-hidden">
      <div className="w-full px-2 md:px-[60px] mx-auto space-y-0">
        {/* ─── Wide Banner ─── */}
        <div className="relative w-full h-[110px] md:h-[260px] overflow-hidden group rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-green-400 text-[11px] md:text-[14px] uppercase tracking-[0.2em] md:tracking-[0.5em] font-bold mb-1 md:mb-2"
            >
              Premium Freshness Collection
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-4xl font-playfair font-bold text-white tracking-tight mb-1 md:mb-4"
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
                className="inline-flex items-center space-x-2 text-white text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold border-b border-white/50 pb-1.5 hover:border-white hover:text-green-400 transition-all duration-300 w-fit"
              >
                <span>Shop Now</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ─── Product Cards Carousel ─── */}
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
            {PRODUCTS1.map((product) => (
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

export default SplitSection1;
