"use client";
import React, { useEffect, useState } from "react";
import apiInstance from "../api/axiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import ProductCard from "./ProductCard";
export default function Featured() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((data) => setClothes(data?.data?.data));
  }, [apiInstance]);

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-center mt-[100px] py-8">
          <h1 className="text-sm text-white mr-2">FEATURED</h1>
          <p className="text-white">|</p>
          <h1 className="text-sm ml-2 text-white">TOP RATED</h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1} // Default to 1 for small screens
          slidesPerGroup={1} // Moves one slide at a time by default
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2 }, // 2 slides, moves 2 at a time
            1024: { slidesPerView: 3, slidesPerGroup: 3 }, // 3 slides, moves 3 at a time
            1280: { slidesPerView: 4, slidesPerGroup: 4 }, // 4 slides, moves 4 at a time
          }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Allows autoplay to continue after interaction
          }}
          loop={true}
        >
          {clothes.length > 0 ? (
            clothes.map((clothe) => (
              <SwiperSlide key={clothe._id}>
                <ProductCard product={clothe} />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-white">Loading...</p> // Placeholder text while loading
          )}
        </Swiper>
      </div>
    </>
  );
}
