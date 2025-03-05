import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col border-r-[0.5px] p-8 px-12 w-[400px]">
          <img src="/logo_footer.webp" alt="" />
          <p className="text-xs mt-4">Lorem ipsum</p>
          <p className="text-xs mt-2">Lorem ipsum</p>
          <p className="text-xs mt-2">Lorem ipsum</p>
          <p className="text-xs mt-2">Lorem ipsum</p>
        </div>
        <div className="flex flex-col border-r-[0.5px] p-8 px-12 w-[400px]">
          <h1 className="text-md font-bold">NAVIGATE</h1>
          <p className="text-xs mt-4 flex gap-2">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col border-r-[0.5px] p-8 px-12 w-[400px]">
          <h1 className="text-md font-bold">CATEGORIES</h1>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-arrow-right-long"></i>Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col  p-8 px-12 w-[400px]">
          <h1 className="text-md font-bold">INFORMATION</h1>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-location-dot text-[#976797]"></i>33 New
            Montgomery San Francisco St. Ste 750 San Francisco, CA, USA 94105
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-phone text-[#976797]"></i>(+00) 12 3456 890
          </p>
          <p className="text-xs mt-4 flex gap-2 items-center">
            <i class="fa-solid fa-envelope text-[#976797]"></i>Testing@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
