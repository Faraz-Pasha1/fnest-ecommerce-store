// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// // ─────────────────────────────────────────────────────────────
// //  5 carousel sections — each with its own identity
// //  Every carousel has exactly: 1 image slide + 1 video slide
// // ─────────────────────────────────────────────────────────────
// const CAROUSEL_SECTIONS = [

//   // ══════════════════════════════════════════════════════════
//   //  SECTION 1 — MAIN HERO  ·  "Timeless Elegance"
//   // ══════════════════════════════════════════════════════════
//   {
//     id: 'hero-elegance',
//     sectionLabel: 'Main Hero',
//     sectionHeight: 'h-[90vh]',
//     overlayColor: 'bg-black/40',
//     slides: [
//       {
//         type: 'image',
//         src: '/public/1-fnest-gifts-mukhwas-mouthfreshness-kunafa-chocolate-honey-sidr.png',
//         subtitle: 'Premium Collection 2026',
//         title: 'Timeless Elegance',
//         // description: 'Hand-curated pieces crafted for those who demand nothing but the finest. Elevate every detail of your lifestyle.',
//         buttonText: 'Shop The Collection',
//         // learnMoreText: 'Our Story',
//       },
//       // {
//       //   type: 'video',
//       //   url: 'https://cdn.pixabay.com/video/2016/03/18/2504-159392237_large.mp4',
//       //   subtitle: 'Behind the Collection',
//       //   title: 'Made with Mastery',
//       //   description: 'Watch our artisans at work — every thread, every fold, every finish perfected by hands trained in the world\'s finest ateliers.',
//       //   buttonText: 'Explore the Process',
//       //   learnMoreText: 'Watch Film',
//       // },
//     ],
//   },

//   // // ══════════════════════════════════════════════════════════
//   // //  SECTION 2 — THE CRAFT  ·  "Art of Making"
//   // // ══════════════════════════════════════════════════════════
//   // {
//   //   id: 'hero-craft',
//   //   sectionLabel: 'The Craft',
//   //   sectionHeight: 'h-[85vh]',
//   //   overlayColor: 'bg-stone-900/50',
//   //   slides: [
//   //     {
//   //       type: 'image',
//   //       url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop',
//   //       subtitle: 'Exclusive New Arrivals',
//   //       title: 'The Art of Craft',
//   //       description: 'Each piece tells a story of mastery. From rare materials to impeccable finishing — this is luxury redefined for the discerning few.',
//   //       buttonText: 'View New Arrivals',
//   //       learnMoreText: 'Behind the Brand',
//   //     },
//   //     {
//   //       type: 'video',
//   //       url: 'https://cdn.pixabay.com/video/2019/09/18/26834-361111186_large.mp4',
//   //       subtitle: 'Signature Craftsmanship',
//   //       title: 'Crafted for Icons',
//   //       description: 'Born from decades of heritage and refined through modern innovation. Every stitch, every finish, every detail speaks of uncompromising dedication.',
//   //       buttonText: 'Explore Heritage',
//   //       learnMoreText: 'Our Craftsmanship',
//   //     },
//   //   ],
//   // },

//   // // ══════════════════════════════════════════════════════════
//   // //  SECTION 3 — FASHION  ·  "Beyond Fashion"
//   // // ══════════════════════════════════════════════════════════
//   // {
//   //   id: 'hero-fashion',
//   //   sectionLabel: 'Fashion',
//   //   sectionHeight: 'h-[85vh]',
//   //   overlayColor: 'bg-indigo-950/50',
//   //   slides: [
//   //     {
//   //       type: 'image',
//   //       url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop',
//   //       subtitle: 'The Season\'s Finest',
//   //       title: 'Dressed to Define',
//   //       description: 'Fashion is fleeting, but style is eternal. Our seasonal edit brings together the world\'s most sought-after pieces for the truly style-conscious.',
//   //       buttonText: 'Shop This Season',
//   //       learnMoreText: 'Style Guide',
//   //     },
//   //     {
//   //       type: 'video',
//   //       url: 'https://cdn.pixabay.com/video/2020/07/29/46786-447087491_large.mp4',
//   //       subtitle: 'Curated for the Elite',
//   //       title: 'Beyond Fashion',
//   //       description: 'Style is not what you wear — it is who you are. Discover our signature line where heritage meets contemporary design.',
//   //       buttonText: 'Discover the Line',
//   //       learnMoreText: 'View Lookbook',
//   //     },
//   //   ],
//   // },

//   // // ══════════════════════════════════════════════════════════
//   // //  SECTION 4 — LIMITED  ·  "Rare & Refined"
//   // // ══════════════════════════════════════════════════════════
//   // {
//   //   id: 'hero-limited',
//   //   sectionLabel: 'Limited Edition',
//   //   sectionHeight: 'h-[85vh]',
//   //   overlayColor: 'bg-neutral-900/55',
//   //   slides: [
//   //     {
//   //       type: 'image',
//   //       url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop',
//   //       subtitle: 'Limited Edition Pieces',
//   //       title: 'Rare. Refined. Yours.',
//   //       description: 'Only the rarest materials. Only the finest craftsmanship. These limited pieces are made for those who understand that true luxury is never mass-produced.',
//   //       buttonText: 'Shop Limited Edition',
//   //       learnMoreText: 'Learn More',
//   //     },
//   //     {
//   //       type: 'video',
//   //       url: 'https://cdn.pixabay.com/video/2020/04/08/35402-406830904_large.mp4',
//   //       subtitle: 'World of FNEST',
//   //       title: 'An Ode to Luxury',
//   //       description: 'From the ateliers of Milan to the streets of New York — we bring you the very best the world has to offer, all in one place.',
//   //       buttonText: 'Enter the World',
//   //       learnMoreText: 'Our Brands',
//   //     },
//   //   ],
//   // },

//   // // ══════════════════════════════════════════════════════════
//   // //  SECTION 5 — GIFTING  ·  "Give Extraordinary"
//   // // ══════════════════════════════════════════════════════════
//   // {
//   //   id: 'hero-gifting',
//   //   sectionLabel: 'The Gift Edit',
//   //   sectionHeight: 'h-[85vh]',
//   //   overlayColor: 'bg-rose-950/45',
//   //   slides: [
//   //     {
//   //       type: 'image',
//   //       url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop',
//   //       subtitle: 'Exclusive Members Only',
//   //       title: 'Join the Inner Circle',
//   //       description: 'Become part of an exclusive community of tastemakers. Early access, private events, and curated picks — reserved for those who know.',
//   //       buttonText: 'Become a Member',
//   //       learnMoreText: 'Member Benefits',
//   //     },
//   //     {
//   //       type: 'video',
//   //       url: 'https://cdn.pixabay.com/video/2016/09/08/5073-181912538_large.mp4',
//   //       subtitle: 'The Art of Gifting',
//   //       title: 'Give Extraordinary',
//   //       description: 'The perfect gift is one that tells a story. Explore our curated gift selections — each wrapped in elegance, each chosen with intention.',
//   //       buttonText: 'Shop Gifts',
//   //       learnMoreText: 'Gift Guide',
//   //     },
//   //   ],
//   // },

// ];

// // ─────────────────────────────────────────────────────────────
// //  Single reusable Carousel block
// // ─────────────────────────────────────────────────────────────
// const HeroCarousel = ({ section }) => (
//   <section id={section.id} className={`relative ${section.sectionHeight} w-full overflow-hidden`}>
//     {/* Section badge — top-left */}
//     <div className="absolute top-6 left-6 z-30">
//       <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[10px] uppercase tracking-[0.4em] px-4 py-1.5 font-semibold">
//         {section.sectionLabel}
//       </span>
//     </div>

//     <Swiper
//       modules={[Navigation, Pagination, Autoplay, EffectFade]}
//       navigation
//       pagination={{ clickable: true }}
//       effect="fade"
//       autoplay={{ delay: 5500, disableOnInteraction: false }}
//       loop
//       className="h-full w-full"
//     >
//       {section.slides.map((slide, i) => (
//         <SwiperSlide key={i}>
//           <div className="relative h-full w-full flex items-center justify-center">

//             {/* Media */}
//             {slide.type === 'video' ? (
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//               >
//                 <source src={slide.url} type="video/mp4" />
//               </video>
//             ) : (
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.url})` }}
//               />
//             )}

//             {/* Colour overlay */}
//             <div className={`absolute inset-0 ${section.overlayColor}`} />

//             {/* Slide type badge */}
//             <div className="absolute bottom-16 right-6 z-20">
//               <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 text-[9px] uppercase tracking-[0.35em] px-3 py-1">
//                 {slide.type === 'video' ? '▶ Video' : '◼ Image'}
//               </span>
//             </div>

//             {/* Text content */}
//             <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//               <p className="text-white/75 text-xs uppercase tracking-[0.55em] mb-5 font-semibold">
//                 {slide.subtitle}
//               </p>
//               <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-7 tracking-tighter leading-none">
//                 {slide.title}
//               </h1>
//               <p className="text-white/65 text-base md:text-xl font-light max-w-2xl mx-auto mb-12">
//                 {slide.description}
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <button className="btn-premium px-12 py-4">
//                   {slide.buttonText}
//                 </button>
//                 <button className="px-12 py-4 border border-white/30 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-dark-gray transition-all duration-300">
//                   {slide.learnMoreText}
//                 </button>
//               </div>
//             </div>

//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );

// // ─────────────────────────────────────────────────────────────
// //  Main export — renders all 5 carousel sections
// // ─────────────────────────────────────────────────────────────
// const Hero = () => (
//   <>
//     {CAROUSEL_SECTIONS.map((section) => (
//       <HeroCarousel key={section.id} section={section} />
//     ))}
//   </>
// );

// export default Hero;
