import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero5 = () => {
  const slides = [
    {
      type: 'image',
      url: '/5-fnest-kunafa-chocolate-premium.webp',
      mobileUrl: '/5-fnest-kunafa-chocolate-premium-portrait.webp',
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
              {/* <div className="absolute inset-x-0 bottom-24 z-10 flex justify-center px-4">
                <button className="btn-premium px-12 py-4">{slide.buttonText}</button>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero5;
