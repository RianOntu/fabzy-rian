"use client";

import React, { useState } from "react";
import Star from "./Star";

export default function SingleProduct({ singleProduct, loading }) {
  const [count, setCount] = useState(0);
  return (
    <>
      {loading ? (
        <div className=" flex items-center justify-center text-light">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col md:flex-row gap-4 w-[80%] mx-auto items-center mb-5">
          <img
            className="w-[397px] h-[397px]"
            src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/15/image/${singleProduct?.image}`}
            alt=""
          />
          <div className="flex flex-col">
            <h3 className="text-md font-semibold">{singleProduct?.name}</h3>
            <div className="flex gap-3 mt-3">
              <div className="flex gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-sm">(No reviews yet)</p>
              <p className="text-sm">Write a review</p>
            </div>
            <p className="text-sm mt-3">{singleProduct?.short_desc}</p>
            <div className="flex flex-col mt-5">{/* variations */}</div>
            <hr className="mt-5 mb-5" />
            <h2 className="text-lg font-semibold">${singleProduct?.price}</h2>
            <div className="mt-3 flex flex-col">
              <p className="text-sm">Quantity:</p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  className="p-2 px-3 bg-[#976797]"
                  onClick={() => setCount(count - 1)}
                >
                  <i class="fa-solid fa-angle-down text-white"></i>
                </button>
                <h3 className="text-md">{count}</h3>
                <button
                  className="p-2 px-3 bg-[#976797]"
                  onClick={() => setCount(count + 1)}
                >
                  <i class="fa-solid fa-angle-up text-white"></i>
                </button>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <button className="p-2 px-3 bg-[#976797] text-white text-sm">
                  ADD TO CART
                </button>

                <button className="p-2 px-3 bg-[#976797] text-white text-sm flex items-center gap-2">
                  <p>ADD TO WISHLIST</p>
                  <i class="fa-solid fa-angle-down text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
