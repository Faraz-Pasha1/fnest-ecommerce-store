import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoCarouselSection = () => {
  const videos = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/video/2016/09/14/5155-182352229_large.mp4",
      title: "Handcrafted Luxury",
      tag: "Process"
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/video/2016/09/21/5341-183378512_large.mp4",
      title: "Timeless Design",
      tag: "Heritage"
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/video/2021/08/30/86824-601705609_large.mp4",
      title: "Elite Materials",
      tag: "Quality"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="text-green-400 text-[14px] uppercase tracking-[0.4em] font-bold mb-4">Visual Stories</p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-dark-gray">Craftsmanship In Motion</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          loop
          className="h-[50vh] md:h-[85vh]"
        >
          {videos.map((v) => (
            <SwiperSlide key={v.id}>
              <div className="relative w-full h-full group">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                >
                  <source src={v.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 transition-all duration-700" />
                
                <div className="absolute bottom-12 md:bottom-20 left-6 md:left-24 text-white">
                  <p className="text-royal-blue text-xs uppercase tracking-[0.5em] font-bold mb-4 bg-white/10 backdrop-blur-md px-4 py-2 w-fit">
                    {v.tag}
                  </p>
                  <h3 className="text-3xl md:text-6xl font-playfair font-bold tracking-tight">
                    {v.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoCarouselSection;
