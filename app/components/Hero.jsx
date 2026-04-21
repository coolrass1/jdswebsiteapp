"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import { sliders } from "./Datas";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 flex flex-col gap-2 sm:gap-3 justify-center items-center bg-black/25 backdrop-brightness-75 px-4">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center uppercase text-white font-semibold px-4">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl my-1 sm:my-3 text-primary uppercase">
                  {slide.text}
                </p>
                <button
                  onClick={() => router.push('/contact')}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-600 rounded-se text-white text-sm sm:text-base hover:bg-yellow-700 transition-colors"
                >
                  contact us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev hidden lg:flex justify-center items-center h-8 w-8 text-black hover:text-white rounded-full bg-gray-100 hover:bg-primary transition-colors after:content-[''] after:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="swiper-button-next hidden lg:flex justify-center items-center h-8 w-8 text-black hover:text-white rounded-full bg-gray-100 hover:bg-primary transition-colors after:content-[''] after:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 8px;
          border-radius: 4px;
          background: white;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #000000 !important;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #ffffff !important;
        }
        .swiper-button-prev svg,
        .swiper-button-next svg {
          stroke: currentColor !important;
        }
        .swiper-button-prev {
          left: 16px !important;
        }
        .swiper-button-next {
          right: 16px !important;
        }
        @media (min-width: 640px) {
          .swiper-button-prev {
            left: 32px !important;
          }
          .swiper-button-next {
            right: 32px !important;
          }
        }
        @media (min-width: 1024px) {
          .swiper-button-prev {
            left: 44px !important;
          }
          .swiper-button-next {
            right: 44px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
