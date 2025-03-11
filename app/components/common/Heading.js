"use client";
import React from "react";

function Heading({ children }) {
  return (
    <>
      <hr className="absolute w-[30%] h-[5px] top-[21px]  hidden xl:block" />
      <h1 className="text-center text-black relative text-2xl md:text-5xl">{children}</h1>
      <hr className="absolute w-[30%] top-[21px] right-0 h-[1px] hidden xl:block" />
    </>
  );
}

export default Heading;
