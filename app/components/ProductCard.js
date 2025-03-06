import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  // const [isHovered,setIsHovered]=use
  return (
    <Link href={`/shop/${product._id}`}>
      <div className="bg-[#FFFFFF] shadow-md w-300 md:w-[300px] lg:w-[230px]  rounded-lg  hover:shadow-lg transition duration-300 product_div">
        <img
          src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/27/223/22__97286.1518852179.jpg?c=2"
          alt={product.name}
          className="w-full h-60 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2 p-1 text-center">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm p-1 text-center">
          {product.description}
        </p>
        <p className="text-green-600 font-bold text-xl mt-2 p-1 text-center">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
