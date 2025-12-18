"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Gallery() {
  const images = [
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
    "/images/slider4.png",
    "/images/slider5.png",
    "/images/slider3.png",
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28  bg-[url('/images/space.jpg')] bg-cover bg-center overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-16"
    >
      <h3 className="text-center text-white sm:text-[16px] font-semibold tracking-widest text-sm md:text-lg  md:text-[32px] mb-12 md:mb-24 relative z-10">
        WHAT'S IT LIKE WHEN WE HAVE EVENTS
      </h3>

      <div className="w-full sm:w-[85%] md:w-[75%]  mx-auto">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
          grabCursor={true}
          speed={800}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 200,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          className="!overflow-visible"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex">
              <div className="w-full aspect-video rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-2xl">
                <img
                  src={img}
                  alt="event"
                  className="w-full lg:w-[800px] h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-12 relative z-20">
        <button className="custom-prev  transition-all cursor-pointer p-2">
          <ArrowLeft size={20} className="sm:w-6 " />
        </button>
        <div className="custom-pagination !static flex gap-2" />
        <button className="custom-next  transition-all cursor-pointer p-2">
          <ArrowRight size={20} className="sm:w-6 " />
        </button>
      </div>

      <style jsx global>{`
        .swiper-slide {
          transition: all 0.6s ease;
          transform: scale(0.75);
        }

        /* Mobile pe thoda zyada scale */
        @media (max-width: 640px) {
          .swiper-slide {
            transform: scale(0.85);
          }

          .swiper-slide-active {
            transform: scale(1.05) !important;
          }
        }

        /* Tablet pe medium scale */
        @media (min-width: 641px) and (max-width: 1023px) {
          .swiper-slide {
            transform: scale(0.8);
          }

          .swiper-slide-active {
            transform: scale(1.08) !important;
          }
        }

        /* Desktop pe full scale */
        @media (min-width: 1024px) {
          .swiper-slide {
            transform: scale(0.8);
          }

          .swiper-slide-active {
            transform: scale(1.1) !important;
          }
        }

        .swiper-slide-active {
          filter: brightness(1) !important;
          opacity: 1 !important;
          z-index: 50;
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #444;
          opacity: 1;
          transition: all 0.3s;
          border-radius: 50%;
        }

        @media (min-width: 640px) {
          .custom-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #7c6cff;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
