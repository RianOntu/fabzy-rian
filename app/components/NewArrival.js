"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderSection from "./common/SliderSection";
export default function NewArrival() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((data) => setClothes(data?.data?.data));
  }, []);

  return (
    <>
      <div className="w-[80%] 2xl:w-[50%] mx-auto">
        <div className="flex justify-center mt-[100px] py-8">
          <h1 className="text-xl text-white mr-2">
            NEW <span className="text-black font-bold">ARRIVAL</span>
          </h1>
        </div>
        <SliderSection clothes={clothes} />
      </div>
    </>
  );
}
