"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full  mx-auto ">
      <Swiper
        className="w-full "
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation // Enable Next/Prev buttons
        autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        loop={true} // Infinite scrolling
      >
        <SwiperSlide>
          <img className="w-full" src="/banner-1.jpg" alt="Slide 1" />
          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              ON TREND JERSEY
            </h1>
          </div>
          <div className="absolute top-[90px] inset-0 flex items-center justify-center text-cente">
            <h1 className="text-white text-2xl md:3xl font font-semibold">
              Everything 40% Disound On Handbags,Clothes and All Girl Items
            </h1>
          </div>
          <div className="absolute top-[200px] inset-0 flex items-center justify-center text-cente">
            <button className="text-white text-sm bg-black px-3 p-2">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/banner-2.jpg" alt="Slide 2" />
          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              ON TREND JERSEY
            </h1>
          </div>
          <div className="absolute top-[90px] inset-0 flex items-center justify-center text-cente">
            <h1 className="text-white text-2xl md:3xl font font-semibold">
              Everything 40% Disound On Handbags,Clothes and All Girl Items
            </h1>
          </div>
          <div className="absolute top-[200px] inset-0 flex items-center justify-center text-cente">
            <button className="text-white text-sm bg-black px-3 p-2">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
