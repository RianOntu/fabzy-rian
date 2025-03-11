"use client";
import React from "react";
import Heading from "./common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function ClientReviews() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px] mb-[50px] relative">
        <Heading>
          Client <b>Reviews</b>
        </Heading>
        <div className="w-full  mx-auto mt-[50px]">
          <Swiper
            className="w-full "
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation // Enable Next/Prev buttons
            autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
            loop={true} // Infinite scrolling
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <img
                  className="flex mx-auto w-[80px] h-[80px] rounded-full border-gray-300 border-2"
                  src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/t3-82x82-left.png"
                  alt="Slide 1"
                />
                {/* Centered Text */}
                <div className=" inset-0 flex items-center justify-center text-center">
                  <p className="w-[375px] md:w-[700px] text-[#9AAFAA] mt-[20px] justify-center text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also into electronic typesetting, remaining essentially
                    unchanged. It was popularised.
                  </p>
                </div>
                <div className="flex flex-col mt-[20px]">
                  <h3 className="font-semibold text-lg text-center">
                    UT TELLER
                  </h3>
                  <p className="text-md text-center mt-3">Iphone Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <img
                  className="flex mx-auto w-[80px] h-[80px] rounded-full border-gray-300 border-2"
                  src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/t1-82x82-left.png"
                  alt="Slide 1"
                />
                {/* Centered Text */}
                <div className=" inset-0 flex items-center justify-center text-center">
                  <p className="w-[375px] md:w-[700px] text-[#9AAFAA] mt-[20px] justify-center text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also into electronic typesetting, remaining essentially
                    unchanged. It was popularised.
                  </p>
                </div>
                <div className="flex flex-col mt-[20px]">
                  <h3 className="font-semibold text-lg text-center">
                    UT TELLER
                  </h3>
                  <p className="text-md text-center mt-3">Iphone Developer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ClientReviews;
