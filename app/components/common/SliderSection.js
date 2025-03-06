"use client";
import React from "react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSection({ clothes = [] }) {
  // Ensure clothes is an array to prevent errors
  if (!Array.isArray(clothes)) {
    return <p className="text-center text-white">Error loading products</p>;
  }

  const settings = {
    dots: true, // Show indicator dots
    infinite: true, // Infinite loop only if enough items
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Change to 1 for smooth scrolling
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: clothes.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: clothes.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {clothes.length > 0 ? (
        <Slider {...settings}>
          {clothes.map((clothe) => (
            <div key={clothe._id} className="p-2">
              {" "}
              {/* Add padding for better spacing */}
              <ProductCard product={clothe} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-white">Loading...</p>
      )}
    </div>
  );
}
