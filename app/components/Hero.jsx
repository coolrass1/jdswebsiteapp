"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import { sliders } from "./Datas";
import { FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[340px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-screen"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
                <div className="absolute inset-0 flex flex-col gap-2 sm:gap-3 justify-center items-center bg-black/25 backdrop-brightness-75 px-4">
                  <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center uppercase text-white font-black px-4 leading-tight">
                  {slide.title}
                </h1>
                  <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl my-2 sm:my-4 text-primary font-bold uppercase tracking-widest backdrop-blur-sm bg-black/20 px-3 py-1 rounded text-center">
                  {slide.text}
                </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-4 w-full max-w-md">
                    <a
                      href="tel:02073666409"
                      aria-label="Call 02073666409"
                      className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary rounded-lg text-secondary font-black text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(216,164,46,0.5)]"
                    >
                    <FaPhoneAlt className="group-hover:animate-bounce" />
                    CALL 02073666409
                    </a>
                  <button
                    onClick={() => router.push('/contact')}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white rounded-lg font-bold text-sm sm:text-lg hover:bg-white hover:text-secondary transition-all"
                  >
                    BOOK A CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

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
      `}</style>
    </div>
  );
};

export default Hero;
