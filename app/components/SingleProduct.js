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
        <div className="mt-5 flex gap-4 w-[80%] mx-auto items-center mb-5">
          <img
            className="w-[397px] h-[397px]"
            src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/1280x1280/products/27/228/21__77186.1518852172.jpg?c=2"
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
            <p className="text-sm mt-3">{singleProduct?.description}</p>
            <div className="flex flex-col mt-5">
              <div className="flex gap-10">
                <p className="text-sm">SKU:</p>
                <p className="text-sm text-[#CDA697]">APPLE-BLUE</p>
              </div>
              <div className="flex gap-10">
                <p className="text-sm">SKU:</p>
                <p className="text-sm text-[#CDA697]">APPLE-BLUE</p>
              </div>
              <div className="flex gap-10">
                <p className="text-sm">SKU:</p>
                <p className="text-sm text-[#CDA697]">APPLE-BLUE</p>
              </div>
            </div>
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
