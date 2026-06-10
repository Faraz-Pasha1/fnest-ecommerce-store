import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero1 = () => {
  const slides = [
    {
      type: 'image',
      url: '/1-fnest-gifts-mukhwas-mouthfreshness-kunafa-chocolate-honey-sidr.webp',
      mobileUrl: '/1-fnest-gifts-mukhwas-mouthfreshness-kunafa-chocolate-honey-sidr-portrait.webp',
      title: 'Premium FNEST Collections',
      buttonText: 'SHOP NOW',
    },
  ];

  return (
    <section className="sticky top-[80px] h-[calc(100dvh-80px)] w-full overflow-hidden">
      

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${slide.url})` }} />
              <div className="absolute inset-0 bg-cover bg-center block md:hidden" style={{ backgroundImage: `url(${slide.mobileUrl || slide.url})` }} />
              <div className="absolute inset-x-0 top-16 md:top-[30%] z-10 text-center px-2 flex justify-center">
                <div className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 shadow-2xl inline-block">
                  <h1 className="text-2xl md:text-4xl font-playfair font-medium text-white tracking-wider">{slide.title}</h1>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-40 md:bottom-24 z-10 flex justify-center px-4">
                <button className="btn-premium text-[24px] px-12 py-4">{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero1;
