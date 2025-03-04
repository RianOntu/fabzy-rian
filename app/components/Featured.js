"use client";
import React, { useEffect, useState } from "react";
import apiInstance from "../api/axiosInstance";
import api_base_url from "../api/constant";
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
          spaceBetween={20}
          slidesPerView={4} // Ensure multiple slides are visible
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-[100px] gap-2">
            {clothes.map((clothe) => (
              <ProductCard product={clothe} />
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
