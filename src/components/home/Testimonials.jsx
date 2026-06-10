import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Bilal",
    pic: "/cardimages/fnest-gift-bouquet-celebrations-event-ocassions-paper-bag-trending.webp",
    rating: 5,
    comment: "bht acha gift pack tha, mother ko bht ziada acha laga. Thanks.",
    color: "bg-[#2c3e50]" // Matte Blue-Gray
  },
  {
    id: 2,
    name: "Toheed",
    pic: "/cardimages/fnest-classic-mukhwas-full-of-freshness-trending.webp",
    rating: 5,
    comment: "taste lajawab hai, or is main chezen bhi achi add hue hain. everyone like this product.",
    color: "bg-[#4a4036]" // Matte Brown
  },
  {
    id: 3,
    name: "Mushahid",
    pic: "/cardimages/fnest-classic-mukhwas-full-of-freshness-trending.webp",
    rating: 4,
    comment: "What an amazing flavor, highly recommended to u all.",
    color: "bg-[#2f4f4f]" // Matte Dark Slate Gray
  },
  {
    id: 4,
    name: "Fatima",
    pic: "/cardimages/fnest-gift-eid-wishes-surprise-trending.webp",
    rating: 5,
    comment: "a very beautiful gift pack for girls, highly recommended, my sister gave me this on sister's day, thank u",
    color: "bg-[#3e2723]" // Matte Dark Brown
  },
  {
    id: 5,
    name: "Gulzar",
    pic: "/cardimages/fnest-green-mukhwas-full-of-freshness-trending.webp",
    rating: 5,
    comment: "appearance bohat achi he , taste bhi alag he. i like this mukhwas",
    color: "bg-[#1c2833]" // Matte Navy
  },
    {
    id: 6,
    name: "Adeel",
    pic: "/cardimages/fnest-khoora-mix-mouth-freshness-flavor-trending.webp",
    rating: 5,
    comment: "bohat mazay ka hai.",
    color: "bg-[#1c2833]" // Matte Navy
  },
    {
    id: 7,
    name: "Basit",
    pic: "/cardimages/fnest-sada-mukhwas-full-of-freshness-trending.webp",
    rating: 5,
    comment: "sub ko bohat pasand aya, most favourtie mukhwas.",
    color: "bg-[#1c2833]" // Matte Navy
  },
    {
    id: 8,
    name: "Ubaid",
    pic: "/cardimages/fnest-sada-mukhwas-full-of-freshness-trending.webp",
    rating: 5,
    comment: "sub ko bohat pasand aya, most favourtie mukhwas.",
    color: "bg-[#1c2833]" // Matte Navy
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-dark-gray text-white relative overflow-hidden">
      {/* Decorative background element */}
      <Quote className="absolute top-10 right-10 text-white/5 w-64 h-64 -rotate-12" />
      
      <div className="w-full mx-auto px-4 md:px-[60px] relative z-10">
        <div className="text-center mb-10">
          <p className="text-green-400 text-[14px] uppercase tracking-[0.4em] font-bold mb-4">Customer's Feedback</p>
          <h2 className="text-2xl md:text-4xl font-playfair font-bold">What Our Customers Say</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="pb-16"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <div className={`text-center h-[320px] md:h-[450px] max-w-3xl mx-auto flex flex-col justify-between ${t.color} p-4 md:p-8 rounded-2xl shadow-xl transition-all duration-300`}>
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] md:text-lg font-playfair italic leading-relaxed mb-4 md:mb-8 text-gray-200 flex-grow">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={t.pic} 
                    alt={t.name} 
                    className="w-[100px] md:w-[160px] h-[75px] md:h-[120px] rounded-lg border-2 border-white/20 mb-2 md:mb-4 object-cover shadow-md" 
                  />
                  <h4 className="text-[10px] md:text-base font-bold uppercase tracking-widest text-white">{t.name}</h4>
                  {/* <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Client</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
