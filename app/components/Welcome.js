import React from "react";
import Heading from "./common/Heading";

export default function Welcome() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px] mb-[50px] relative">
        <Heading>
          Welcome to <b>Fabzy</b>
        </Heading>
        <p className=" text-[#9AAFAA] mt-[20px] justify-center text-center w-[300px] md:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also into electronic typesetting, remaining
          essentially unchanged. It was popularised.
        </p>
        <div className="flex flex-col md:flex-row mt-[20px] gap-4 justify-center">
          <div className="bg-[#F6F6F6] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] flex items-center gap-2 p-2 ">
            
            <img
              className="w-[80px] h-[70px] md:w-[100px] md:h-[80px] xl:w-[200px] xl:h-[190px] object-contain"
              src="https://www.pngarts.com/files/3/Leather-Boot-PNG-Transparent-Image.png"
              alt=""
            />
            <div className="flex flex-col lg:w-full">
              <h3 className="text-center">
                <span className="bg-[#976797] text-white text-md xl:text-2xl">
                  SMART
                </span>
                <span className="text-md xl:text-2xl"> SHOES</span>
              </h3>
              <p className="text-center text-sm text text-[#9AAFAA]">
                lorem ipsum is simply dummy text of printing typesing
              </p>
            </div>
          </div>
          <div className="bg-[#F6F6F6] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] flex items-center justify-around gap-2 p-2 px-3">
            <img
              className="w-[80px] h-[70px] md:w-[100px] md:h-[80px] xl:w-[200px] xl:h-[190px] object-contain"
              src="https://www.pngarts.com/files/4/Tom-Ford-Sunglasses-PNG-Image-Transparent-Background.png"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-center">
                <span className="bg-[#976797] text-white text-md xl:text-2xl">
                  SMART
                </span>
                <span className="text-md xl:text-2xl"> GLASS</span>
              </h3>
              <p className="text-center text-sm text text-[#9AAFAA]">
                lorem ipsum is simply dummy text of printing typesing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
