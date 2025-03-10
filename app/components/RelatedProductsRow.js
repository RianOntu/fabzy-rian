"use client";
import React, { useContext, useState } from "react";
import SliderSection from "./common/SliderSection";
import { CartContext } from "../context/CartContext";
export default function RelatedProductsRow() {
  const { productsWithSimilarCategory } = useContext(CartContext);

  return (
    <>
      <div className="w-[80%] 2xl:w-[50%] mx-auto mt-[90px]">
        <SliderSection clothes={productsWithSimilarCategory} />
      </div>
    </>
  );
}
