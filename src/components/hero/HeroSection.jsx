import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Swiper CSS Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  IconArrowRight,

  IconChevronLeft,
  IconChevronRight,
  IconShieldCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&auto=format&fit=crop&q=80",
];

function HeroSection() {
  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative overflow-hidden bg-[#121417] h-[520px] sm:h-[580px] lg:h-[620px] shadow-lg">
      {/* 100% Full-Width Background Swiper (Only Images Slide) */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-swiper-pagination",
        }}
        navigation={{
          nextEl: ".hero-swiper-button-next",
          prevEl: ".hero-swiper-button-prev",
        }}
        className="w-full h-full absolute inset-0 z-0"
      >
        {HERO_IMAGES.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}

        {/* Custom Pagination Dots Container */}
        <div className="hero-swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2 [&_.swiper-pagination-bullet-active]:!bg-[#ffd700] [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet]:!bg-white/60 [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:transition-all"></div>
      </Swiper>

      {/* Dark & Gold Ambient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30 backdrop-blur-[1px] pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#121417] via-transparent to-black/50 pointer-events-none"></div>

      {/* 100% VISIBLE STATIC OVERLAY CONTENT (z-30 above Swiper) */}
      <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ffd700]/50 bg-black/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ffd700] backdrop-blur-md shadow-md">
              
                WELCOME TO JHALACOLLECTION
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight drop-shadow-lg">
              Handcrafted Elegance & Royal Heritage
            </h1>

            <p className="mt-4 max-w-2xl font-body text-sm sm:text-base lg:text-lg font-normal text-slate-200 leading-relaxed drop-shadow-md">
              Discover curated luxury apparel, traditional Jaipur jewelry, and bespoke home decor designed for royalty. Experience unmatched quality and express delivery.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
              <button
                onClick={handleScrollToProducts}
                className="flex items-center gap-2.5 rounded-2xl bg-[#705d00] px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-gold-subtle transition-all duration-300 hover:bg-[#544600] hover:scale-105"
              >
                Explore Collection
                <IconArrowRight size={20} />
              </button>

              <div className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-200 pl-2">
                <div className="flex items-center gap-1.5 text-[#ffd700]">
                  <IconShieldCheck size={18} /> 100% Authentic
                </div>
                <div className="flex items-center gap-1.5 text-[#ffd700]">
                  <IconTruckDelivery size={18} /> Free Express Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;