import Link from "next/link";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        className="bg-[#FFFFFF] relative overflow-hidden h-[388px] shadow-md w-[300px]  lg:w-[230px] rounded-lg mx-auto hover:shadow-lg transition duration-500 product_div"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Wrapper */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/15/image/${product?.image}`}
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
              <i className="fa-solid fa-heart"></i>
            </button>
            <button className="text-white text-sm bg-[#976797] p-2 mt-2">
              <i className="fa-solid fa-eye"></i>
            </button>
            <button className="text-white text-sm bg-[#976797] p-2 mt-2">
              <i className="fa-solid fa-paste"></i>
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
