"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderSection from "./common/SliderSection";
export default function RelatedProductsRow() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((data) => setClothes(data?.data?.data));
  }, []);

  return (
    <>
      <div className="w-[80%] 2xl:w-[50%] mx-auto mt-[90px]">
        <SliderSection clothes={clothes} />
      </div>
    </>
  );
}
