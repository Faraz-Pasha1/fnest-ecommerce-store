import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../shared/ProductCard';

const PRODUCTS = [
  {
    id: 3,
    title: "Classic Mukhwas",
    subtitle: "Daily Mouth Fresheners",
    price: 230,
    wasPrice: 250,
    code: "FNP-206",
    description: "Essajee's Classic Mukhwas is a premium, traditional mouth freshener designed to aid digestion and naturally refresh the breath.",
    image: "/bestseller/fnest-classic-mukhwas-full-of-freshness-trending.webp",
    hoverImage: "/bestseller/fnest-classic-premium-taste-foryou-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "105g",
    ingredients: "Sugar Coated, Fennel Seed, Sesame Seed, Coriander Seed, Misri (Rock Sugar), Almonds, Coconut, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Digestion, Mouth Freshening, Post Meal"
  },
  {
    id: 5,
    title: "Khopra Mix Mukhwas",
    subtitle: "Daily Mouth Fresheners",
    price: 210,
    wasPrice: 230,
    code: "FNP-210",
    description: "Essajee's Khopra Mix Mukhwas is a premium, coconut-forward mouth freshener that provides a satisfyingly sweet and crunchy finish to any meal.",
    image: "/bestseller/fnest-khoora-mix-mouth-freshness-flavor-trending.webp",
    hoverImage: "/bestseller/fnest-give-khopra-taste-mouth-feel-difference-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "150g",
    ingredients: "Sugar Coated, Fennel Seed, Coconut, Roasted Dry Dates, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Post-meal sweet cravings, breath freshening, Ideal for home diging"
  },
  {
    id: 15,
    title: "Happy Birthday Mouth Freshener",
    subtitle: "Chocolate Balls Mouth Freshener",
    price: 310,
    wasPrice: 350,
    code: "FNP-203",
    description: "Add a touch of celebration with Chakde Happy Birthday Mouth Freshner. Blend of chocolate flavor and other ingredients.",
    image: "/bestseller/fnest-celebrate-birthday-with-chocolate-balls-and-meetha-pan-masala-trending.webp",
    hoverImage: "/bestseller/fnest-celebration-taste-flavor-freshness-trending.webp",
    category: "mukhwas-mouth-fresheners",
    netWeight: "220g",
    ingredients: "Sugar Coated, Fennel Seed, Coconut, Cocoa Powder, Misri (Rock Sugar), Coriander Seed, Vermicelli, Natural & Artificial Flavor, Menthol",
    bestUseFor: "Parties, catering, breath freshening, post-meal entertainin."
  },
  {
    id: 9,
    title: "Dubai Kunafa Chocolate",
    subtitle: "Premium Pistachio Kunafa Chocolate from Dubai",
    price: 100,
    wasPrice: 120,
    code: "FNP-300",
    description: "Luxury Dubai viral kunafa chocolate filled with crispy kunafa and rich pistachio cream for a truly indulgent bite.",
    image: "/bestseller/fnest-dubai-kunafa-chocolate-premium-trending.webp",
    hoverImage: "/bestseller/fnest-dubai-viral-kunafa-chocolate-premium-trending.webp",
    category: "chocolates",
    netWeight: "20g",
    ingredients: "",
    bestUseFor: "Party, ocassion, sweet craving, snacking."
  },
  {
    id: 6,
    title: "Special Gift Bags",
    subtitle: "Gift Hampers for Girls, Mothers, Sisters, Birthdays & More",
    price: 1500,
    wasPrice: 1700,
    code: "AC-005",
    description: "Perfect for any occasion, these hampers are thoughtfully curated with premium items to delight your loved ones. Each bag features elegant design and high-quality materials, making them ideal for birthdays, festivals, anniversaries, marriage , wedding and other special moments.",
    image: "/bestseller/fnest-gift-eid-wishes-surprise-trending.webp",
    hoverImage: "/bestseller/fnest-gift-eid-wishes-surprise-bangel-trending.webp",
    category: "Gifts-Bouquets",
    netWeight: "NA",
    // ingredients: "Sugar Coated , Fennel Seed , Coconut , Cocoa Powder , Misri (Rock Sugar) , Coriander Seed , Vermicelli , Natural & Artificial Flavor , Menthol",
    bestUseFor: "Occasion, Party, Gift, Festivals, Anniversary, Marriage, Wedding, Mother's Day, Gift for Girls, Sister's Day, Birthday"
  },
  // {
  //   id: 6,
  //   title: "Luxury Scented Candle",
  //   subtitle: "Home Fragrance",
  //   price: 85,
  //   wasPrice: 110,
  //   code: "HM-772",
  //   description: "Hand-poured soy wax with notes of sandalwood, oud, and amber.",
  //   image: "/images/product-6.jpg",
  //   hoverImage: "/images/product-6-hover.jpg",
  //   category: "Home"
  // }
];
const BestSellers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-2 md:px-[60px]">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-olive-green text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-3 md:mb-4">Exclusive Edition</p>
          <h2 className="text-xl md:text-5xl font-playfair font-bold text-dark-gray">Our Best Selling Products</h2>
          <div className="w-16 md:w-24 h-1 bg-royal-blue mx-auto mt-4 md:mt-8" />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          slidesPerView={2}
          navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 2.4, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          className="pb-16"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellers;
