"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import { sliders } from "./Datas";

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
