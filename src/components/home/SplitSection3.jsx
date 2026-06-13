import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../shared/ProductCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PRODUCTS3 = [
  {
    id: 6,
    title: "Premium Gift bag",
    subtitle: "Elegant Gift Hamper",
    price: "1450 - Rs.1650",
    // wasPrice: 1599,
    code: "FNP-301",
    description: "We create premium gift bags for all your corporate and festive gifting needs. Made with the finest materials and attention to detail, our gift bags are perfect for any occasion.",
    image: "/cardimages/fnest-gift-eid-wishes-surprise-trending.webp",
    hoverImage: "/cardimages/fnest-gift-eid-wishes-surprise-bangel-opened-trending.webp",
    category: "Gifts-Bouquets",
    netWeight: "N/A",
    bagLabel: "Items are",
    insideBag: "Jhumki / Earings, Tasbeeh Counter / Keychain, Choorian / Bangles, Catcher / Scrunchies, Chocolate (100 Rs), Cone Mehendi, Meetha Pan Masala Cone, Lights  .",
    bestUseFor: "Mothers day, Birthdays, Eid Gifts, Sisters Day, Friends Day, For Girls / ladies"
  },
  {
    id: 7,
    title: "Unique Style Gift Bag",
    subtitle: "Homemade gift bags",
    price: "2600 - Rs.3200",
    // wasPrice: 1599,
    code: "FNP-302",
    description: "We also create a unique style homemade customized gift bag for every ocassion and surprizes with best quality and affordable price.",
    image: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-paper-bag-trending.webp",
    hoverImage: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-paper-bag-opened-trending.webp",
    category: "Gifts-Bouquets",
    netWeight: "N/A",
    bagLabel: "Items are",
    insideBag: "Mini Jewellery Box, Face Powder / other 1 items of cosmetic, Ladies Wallet, Body Spray / Perfume, Catcher / Keychain, Mini Handheld Fan.",
    bestUseFor: "Mothers day, Birthdays, Eid Gifts, Sisters Day, Friends Day, For Girls / ladies, Wedding Gift, Anniversary Gift, Valentine Gift, Mehandi Gift"
  },
  {
    id: 8,
    title: "Chocolate Bouquet",
    subtitle: "Customized bouquets for every ocassion",
    price: "2800 - Rs. 4800",
    // wasPrice: 1599,
    code: "FNP-303",
    description: "We create unique style chocolate bouquets for every ocassion and surprizes with best quality and affordable price.",
    image: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending-small.webp",
    hoverImage: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending-small-2nd.webp",
    category: "Gifts-Bouquets",
    netWeight: "N/A",
    bagLabel: "Items are",
    insideBag: "Dairymilk (1), Kitkat (1),Snickers (1), Dubai Junafa (1), Twix (1), Ferrero Rocher (1)",
    bestUseFor: "Birthdays, Eid Gifts, Sisters Day, Friends Day, For Girls, Wedding Gift, Anniversary Gift, Valentine Gift.",
    hasVariants: true,
    variants: {
      types: ["Small", "Large"],
      details: {
        "Small": { price: "2800 - Rs.3000", items: "Dairymilk (1), Kitkat (1), Snickers (1), Dubai Junafa (1), Twix (1), Ferrero Rocher (1)" },
        "Large": { price: "4500 - Rs.4800", items: "Dairymilk (2), Kitkat (2), Snickers (2), Dubai Junafa (2), Twix (2), Ferrero Rocher (2)", image: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending-large.webp", hoverImage: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending-large-2nd.webp" }
      }
    }
  },
  {
    id: 22,
    title: "Toffee Bouquet",
    subtitle: "Customized Toffee bouquets for girls",
    price: "2600 - Rs. 4000",
    // wasPrice: 1599,
    code: "FNP-306",
    description: "We create unique style toffee bouquets for every ocassion and surprizes with best quality and affordable price.",
    image: "/cardimages/fnest-gift-toffee-bouquet-celebrations-event-ocassions-trending.webp",
    hoverImage: "/cardimages/fnest-gift-toffee-bouquet-celebrations-event-ocassions-trending-2nd.webp",
    category: "Gifts-Bouquets",
    netWeight: "N/A",
    bagLabel: "Items are",
    insideBag: "Dairymilk, Snickers, Kitkat, Twix, Masqara, Lip Gloss, Sponge, Eye Lashes, Catcher, Keychain, Jhumki",
    bestUseFor: "Birthdays, Eid Gifts, Sisters Day, Friends Day, For Girls, Wedding Gift, Anniversary Gift, Valentine Gift.",
    hasVariants: true,
    variants: {
      types: ["Small", "Large"],
      details: {
        "Small": { price: "2600 - Rs. 2900", items: "Dairymilk, Snickers, Kitkat, Masqara, Lip Gloss, Catcher, Keychain, Jhumki" },
        "Large": { price: "3700 - Rs. 4000", items: "Dairymilk, Snickers, Kitkat, Twix, Masqara, Lip Gloss, Sponge, Eye Lashes, Catcher, Keychain, Jhumki" }
      }
    }
  },
  {
    id: 23,
    title: "Customized Bouquet",
    subtitle: "Customized bouquets for every ocassion",
    price: "2800 - Rs. 4800",
    // wasPrice: 1599,
    code: "FNP-305",
    description: "We create unique style customized bouquets for every ocassion and surprizes with best quality and affordable price.",
    image: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending.webp",
    hoverImage: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-trending.webp",
    category: "Gifts-Bouquets",
    netWeight: "N/A",
    bagLabel: "Items are",
    insideBag: "customized according to customer requirements",
    bestUseFor: "Birthdays, Eid Gifts, Sisters Day, Friends Day, For Girls, Wedding Gift, Anniversary Gift, Valentine Gift.",

  },
];

const SplitSection3 = () => {
  const image = "/splitimages/fnest-gift-hamper-celebration-ocassion.webp";
  const title = "Royal Gift Studio";

  return (
    <section className="py-4 bg-white overflow-hidden">
      <div className="w-full px-2 md:px-[60px] mx-auto space-y-0">
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
              Premium Celebration Gifts
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
            {PRODUCTS3.map((product) => (
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

export default SplitSection3;
