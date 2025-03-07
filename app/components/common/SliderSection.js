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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
