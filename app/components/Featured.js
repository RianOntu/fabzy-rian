"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderSection from "./common/SliderSection";
export default function Featured() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((data) => setClothes(data?.data?.data));
  }, []);

  return (
    <>
      <div className="w-[80%] mx-auto">
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
