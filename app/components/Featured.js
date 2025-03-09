"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderSection from "./common/SliderSection";
export default function Featured() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`https://admin.ezicalc.com/api/public/products/get/15`)
        .then((data) => setClothes(data?.data?.data?.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="w-[80%] 2xl:w-[50%] mx-auto">
        <div className="flex justify-center mt-[100px] py-8">
          <h1 className="text-sm text-white mr-2">FEATURED</h1>
          <p className="text-white">|</p>
          <h1 className="text-sm ml-2 text-white">TOP RATED</h1>
        </div>
        <SliderSection clothes={clothes} />
      </div>
    </>
  );
}
