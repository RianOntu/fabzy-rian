import React from "react";
import Input from "./common/Input";

export default function Subscribe() {
  return (
    <>
      <hr />
      <div className="mt-5 w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center mt-[30px]">
          <div className="flex items-center">
            <i class="fa-solid fa-envelope text-[24px] mr-2"></i>
            <h1 className="text-md md:text-2xl">
              Subscribe <b>Us</b>
            </h1>
          </div>

          <Input placeholder="Your email address">
            <i class="fa-brands fa-telegram absolute right-[19px] top-[22px] text-[24px]"></i>
          </Input>
        </div>
      </div>
      <hr className="mt-[30px]" />
    </>
  );
}
