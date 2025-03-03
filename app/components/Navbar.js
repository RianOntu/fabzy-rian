import React from "react";

function Navbar() {
  return (
    <>
      {/* Purple Banner */}
      <div className="absolute top-0 left-0 w-full h-10 bg-purple-600"></div>

      <div className="relative flex items-center h-[200px]">
        {/* Logo Section with Clipped Background */}
        <div id="box" className="w-[20rem]">
            <div id="content">
            <img className="p-8 pt-[5rem] w-[19rem]"  src="/logo.webp" alt="" />
            </div>
         
          <div id="shadow" className="w-[19rem]"></div>
        </div>

        {/* Navigation Menu */}
        <nav className="ml-10 flex space-x-8 text-black font-medium">
          <a href="#" className="hover:text-gray-600">
            TOPS ▾
          </a>
          <a href="#" className="hover:text-gray-600">
            DENIMS ▾
          </a>
          <a href="#" className="hover:text-gray-600">
            ACCESSORIES
          </a>
          <a href="#" className="hover:text-gray-600">
            PARTY WEAR
          </a>
          <a href="#" className="hover:text-gray-600">
            SHIPPING & RETURNS
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
