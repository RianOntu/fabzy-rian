"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Star from "./Star";
import { CartContext } from "../context/CartContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import VITE_API_BASE_URL_IMG from "../BaseImage";
import axios from "axios";
import { useParams } from "next/navigation";

export default function SingleProduct({ singleProduct, loading }) {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [variationsValues, setVariationValues] = useState([]);
  const [buttonText, setButtonText] = useState("");
  const [price, setPrice] = useState(0);
  const [matchedVariationPrice, setmMtchedVariationPrice] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [actualPrice, setActualPrice] = useState(0);
  const [matchedVariation, setMatchedVariation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
 

  useEffect(() => {
   

    if (singleProduct?.image) {
      setSelectedImage(`${VITE_API_BASE_URL_IMG}/${singleProduct?.image}`);
    }
  }, [singleProduct]);

  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  console.log("cart", cart);
  console.log("pr_images", singleProduct?.product_images);

  const variations =
    singleProduct?.has_variation == 1 &&
    singleProduct?.product_variation?.length > 0
      ? singleProduct.product_variation
      : [];

  const variationValuess =
    variations.length > 0 ? variations[0]?.variaton_values || "" : "";
  const variationValuesArray = variationValuess
    .split(",")
    .map((val) => val.trim());

  const priceRange =
    singleProduct?.has_variation == 1 &&
    Array.isArray(singleProduct?.variation_combinations)
      ? singleProduct.variation_combinations.map(
          (variation) => variation?.price
        )
      : [];

  const min_price = priceRange.length > 0 ? Math.min(...priceRange) : 0;
  const max_price = priceRange.length > 0 ? Math.max(...priceRange) : 0;

  useEffect(() => {
    setMinPrice(min_price);
    setMaxPrice(max_price);
    setVariationValues(variationValuesArray);
  }, [min_price, max_price]);

  const handleClick = (event) => {
    const clickedText = event.target.textContent;
    setButtonText(clickedText);
  
    const variation_combinations =
      singleProduct?.has_variation == 1 &&
      singleProduct?.variation_combinations?.length > 0
        ? singleProduct.variation_combinations
        : [];
  
    const matched_variation = variation_combinations.find(
      (vc) => vc.values === clickedText
    );
    setMatchedVariation(matched_variation);
  
    if (matched_variation) {
      setmMtchedVariationPrice(matched_variation.price || "N/A");
  
      // Check if discount date is valid
      const discountDate = matched_variation?.discount_date;
      const today = new Date();
  
      if (discountDate && new Date(discountDate) >= today) {
        setDiscountAmount(
          matched_variation.discount_percent !== 0
            ? matched_variation.discount_percent
            : 0
        );
      } else {
        setDiscountAmount(0); // No discount if date is null or expired
      }
    }
  };
  

  // useEffect to update actualPrice when matchedVariationPrice or discountAmount changes
  useEffect(() => {
    const calculatedPrice =
      Number(matchedVariationPrice) -
      Number(matchedVariationPrice * (discountAmount / 100));

    setActualPrice(calculatedPrice);
  }, [matchedVariationPrice, discountAmount]);

  return (
    <>
      {loading ? (
        <div className=" flex items-center justify-center text-light">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col lg:flex-row gap-4 w-[80%] mx-auto items-start mb-5">
          <div className="flex flex-col w-full">
            <img
              className="w-full h-full main_image"
              src={selectedImage}
              alt=""
            />
            <div className="grid grid-cols-3 md:grid-cols-5 mt-5 gap-1">
              {singleProduct?.product_images?.map((image, index) => (
                <img
                  key={index}
                  className="w-full h-full object-cover cursor-pointer"
                  src={`${VITE_API_BASE_URL_IMG}/${image?.name}`}
                  alt={`Product Thumbnail ${index}`}
                  onClick={() =>
                    setSelectedImage(`${VITE_API_BASE_URL_IMG}/${image?.name}`)
                  }
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col  width">
            <div className="flex flex-col  xl:flex-row items-start  gap-3">
              <h3 className="text-md font-semibold">
                {singleProduct?.name || ""}{" "}
              </h3>

              {actualPrice == 0 ? (
                <h3 className="text-sm">Please select a variation</h3>
              ) : (
                <h3 className="text-md font-semibold">
                  BDT {Number(actualPrice * count)}{" "}
                </h3>
              )}

              <h3 className="text-md font-semibold line-through">
                {discountAmount == 0 ? "" : matchedVariationPrice}
              </h3>
              <h3 className="text-md font-semibold">
                {discountAmount == 0 ? "" : `Save ${discountAmount} %`}
              </h3>
              <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]  ">
                {" "}
                {/* Increase width on larger screens */}
                <div className="flex flex-col md:flex-row gap-1">
                  <h3 className="text-sm font-semibold">Variations:</h3>
                  <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto">
                    {Array.isArray(variationsValues) &&
                      variationsValues.map((variation, index) => (
                        <button
                          key={index}
                          onClick={handleClick}
                          className="bg-gray-200 focus:bg-[#976797] hover:bg-[#976797] text-black w-[100px] text-sm p-2 px-3 rounded-sm"
                        >
                          {variation}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>

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
            <div className="flex flex-col md:flex-row items-start gap-3 mt-5 w-full  lg:w-[500px] ">
              <h3 className="text-sm font-semibold">Description:</h3>
              <p className="text-sm ">{singleProduct?.short_desc}</p>
            </div>

            <hr className="mt-5 mb-5" />
            <h2 className="text-lg font-semibold">
              {priceRange.length > 0 && `BDT ${minPrice} to ${maxPrice}`}
            </h2>
            <div className="mt-3 flex flex-col">
              <p className="text-sm">Quantity:</p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  className="p-2 px-3 bg-[#976797]"
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                >
                  <FaChevronDown className="text-white" />
                </button>
                <h3 className="text-md">{count}</h3>
                <button
                  className="p-2 px-3 bg-[#976797]"
                  onClick={() => setCount(count + 1)}
                >
                  <FaChevronUp className="text-white" />
                </button>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <button
                  className="p-2 px-3 bg-[#976797] text-white text-sm"
                  onClick={() => addToCart(singleProduct, matchedVariation, 1)}
                >
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
