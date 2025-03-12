import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaPaste } from "react-icons/fa6";
import VITE_API_BASE_URL_IMG from "../BaseImage";
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        className="bg-[#FFFFFF] relative overflow-hidden h-[388px] shadow-md w-[300px]  md:w-[230px] xl:w-[270px] rounded-lg mx-auto hover:shadow-lg transition duration-500 product_div margin_bottom"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Wrapper */}
        <div className="relative h-60 w-full overflow-hidden ">
          <img
            src={`${VITE_API_BASE_URL_IMG}/${product?.image}`}
            alt={product?.name}
            className="absolute top-0 left-0 w-full object-cover rounded-md transition-all duration-500"
          />
          {/* Buttons Coming from Top */}
          <div
            className={`flex flex-col absolute top-[12px] right-1 transition-transform duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <button className="text-white text-sm bg-[#976797] p-2">
              <FaHeart className="text-white" />
            </button>
            <button className="text-white text-sm bg-[#976797] p-2 mt-2">
              <FaEye className="text-white" />
            </button>
            <button className="text-white text-sm bg-[#976797] p-2 mt-2">
              <FaPaste className="text-white" />
            </button>
          </div>
        </div>

        {/* Product Info - Expands Upward on Hover */}
        <div
          className={`absolute bottom-0 w-full bg-white transition-all duration-500 ease-in-out ${
            isHovered ? "h-[200px]" : "h-[140px]"
          }`}
        >
          <h2 className="text-lg font-semibold mt-2 p-1 text-center">
            {product?.name}
          </h2>
          <p className="text-gray-600 text-sm p-1 text-center">
            {product?.short_desc?.slice(0, 100)}...See more
          </p>

          {isHovered && (
            <div className="flex justify-center p-3">
              <button className="text-white text-sm bg-[#976797] p-2 px-3">
                ADD TO CART
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
