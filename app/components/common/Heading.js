"use client";
import React from "react";

function Heading({ children }) {
  return (
    <>
      <hr className="absolute w-[30%] h-[5px] top-[21px]" />
      <h1 className="text-center  relative text-2xl md:text-5xl">{children}</h1>
      <hr className="absolute w-[30%] top-[21px] right-0 h-[1px]" />
    </>
  );
}

export default Heading;
