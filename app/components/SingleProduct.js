"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Star from "./Star";
import { CartContext } from "../context/CartContext";

export default function SingleProduct({ singleProduct, loading }) {
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

  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  console.log('cart',cart);
  

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
      setDiscountAmount(
        matched_variation?.discount_percent !== 0
          ? matched_variation.discount_percent
          : 0
      );
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
        <div className="mt-5 flex flex-col md:flex-row gap-4 w-[80%] mx-auto items-start mb-5">
          <img
            className="w-[397px] h-[397px]"
            src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/15/image/${singleProduct?.image}`}
            alt=""
          />
          <div className="flex flex-col">
            <div className="flex items-start justify-evenly gap-3">
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
              <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] ml-[50px] ">
                {" "}
                {/* Increase width on larger screens */}
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
                  {Array.isArray(variationsValues) &&
                    variationsValues.map((variation, index) => (
                      <button
                        key={index}
                        onClick={handleClick}
                        className="bg-gray-200 hover:bg-[#976797] text-black w-[100px] text-sm p-2 px-3 rounded-sm"
                      >
                        {variation}
                      </button>
                    ))}
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
            <p className="text-sm mt-3">{singleProduct?.short_desc}</p>

            <hr className="mt-5 mb-5" />
            <h2 className="text-lg font-semibold">
              {priceRange.length > 0 && `BDT ${minPrice} to ${maxPrice}`}
            </h2>
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
                <button
                  className="p-2 px-3 bg-[#976797] text-white text-sm"
                  onClick={() =>
                    addToCart(singleProduct, matchedVariation, count)
                  }
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
