import React from "react";

export default function Blog() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px] mb-[50px] relative">
        <div className="flex">
          <h1 className="text-md lg:text-4xl">
            Latest <b>Blog</b>
          </h1>
          <hr className="absolute w-[80%] top-[21px] left-0 md:left-[202px] h-[1px]" />
        </div>
        <div className="mt-5 flex flex-col md:flex-row justify-center gap-14">
          <div className="flex flex-col xl:flex-row gap-3 items-center">
            <img
              className="w-[250px] h-[250px] object-cover"
              src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/original/uploaded_images/2.jpg?t=1520920054"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-md">THE BEST HAT FOR ALL</h3>
              <p className="text-xs text-[#9D80BA]">13th March 2018</p>
              <div className="mt-5 flex flex-col">
                <p className="w-[250px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, atque?
                </p>
                <p className="text-xs mt-5">READ MORE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-3 items-center">
            <img
              className="w-[250px] h-[250px] object-cover"
              src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/original/uploaded_images/10.jpg?t=1521442302"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-md">THE BEST HAT FOR ALL</h3>
              <p className="text-xs text-[#9D80BA]">13th March 2018</p>
              <div className="mt-5 flex flex-col">
                <p className="w-[250px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, atque?
                </p>
                <p className="text-xs mt-5">READ MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
