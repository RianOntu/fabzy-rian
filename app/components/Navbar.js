"use client";
import React, { useState } from "react";
import Input from "./common/Input";
import Link from "next/link";

function Navbar() {
  const [isTopsOpen, setIsTopsOpen] = useState(false);
  const [isDenimsOpen, setIsDenimsOpen] = useState(false);

  return (
    <>
      {/* Purple Banner */}
      <div className="flex flex-col">
        <div className="absolute top-0 left-0 w-full h-10 bg-[#976797] flex justify-end mr-2 items-center">
          <div className="flex mr-2">
            <h1 className="text-md text-white mr-2">
              New Offer This Weekend Only! Hurry Shop Now!
            </h1>{" "}
            <h1 className="text-white"> |</h1>{" "}
            <h1 className="text-md text-white ml-2">Select Currency</h1>
          </div>
        </div>
      </div>

      <div className="relative flex items-center min-h-[200px] w-full">
        {/* Logo Section */}
        <div id="box" className="w-[20rem] shadow">
          <div id="content">
            <Link href="/">
              <img
                className="p-8 pt-[5rem] w-[19rem]"
                src="/logo.webp"
                alt=""
              />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center justify-between w-full">
          <div className="w-[500px] h-[120px]">
            <nav className="ml-10 flex space-x-8 text-black font-medium navbar mt-10">
              <div
                className="relative group"
                onMouseEnter={() => setIsTopsOpen(true)}
                onMouseLeave={() => setIsTopsOpen(false)}
              >
                <a href="#" className="hover:text-gray-600">
                  TOPS ▾
                </a>

                {/* Dropdown Menu */}
                {isTopsOpen && (
                  <div className="absolute top-4 left-0  mt-2 bg-[#F7F7F7] shadow-md shadow-white p-6 grid grid-cols-3 gap-8 w-[600px] border rounded-md z-50">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">FORMAL</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Metallic Halter
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Scoop Neck
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Sheer Tops
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">
                        OFF SHOULDER
                      </h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Echo Cropped
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Guipure Midi
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Short Sleeve
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">BATWING</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Asymmetric
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Dolan Sleeve
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Flecked Linen
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* DENIMS Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsDenimsOpen(true)}
                onMouseLeave={() => setIsDenimsOpen(false)}
              >
                <a href="#" className="hover:text-gray-600">
                  DENIMS ▾
                </a>

                {isDenimsOpen && (
                  <div className="absolute top-4 left-0 mt-2 bg-[#F7F7F7] shadow-md shadow-white p-6 grid grid-cols-3 gap-8 w-[600px] border rounded-md z-50">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">SKINNY</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            High Rise
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Low Rise
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Mid Rise
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">
                        STRAIGHT FIT
                      </h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Classic Fit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Regular Fit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Relaxed Fit
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h3 className="text-gray-800 font-bold mb-2">WIDE LEG</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Palazzo
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Baggy Fit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-purple-600">
                            Bootcut
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-gray-600">
                ACCESSORIES
              </a>
              <a href="#" className="hover:text-gray-600">
                MORE
              </a>
            </nav>
          </div>

          {/* Account & Cart Section (Pushed to Right) */}
          <div className="flex ml-auto">
            <div className="flex flex-col w-[300px] border-l-[0.5px]">
              <div className="border-r-[0.5px] h-[120px]">
                <div className="flex border-b-[0.5px]">
                  <div className="border-r-[0.5px] w-[150px]">
                    <h1 className="text-xs text-[#5C5C5C] p-2 py-6">
                      <i className="fa-solid fa-truck-fast mr-2 text-sm"></i>
                      FREE SHIPPING
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-xs p-2 py-6 text-[#5C5C5C]">
                      <i className="fa-solid fa-gift mr-2 text-sm"></i>
                      SPECIAL OFFER
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-xs p-5">
                    <i className="fa-solid fa-phone mr-2"></i>
                    Customer care : (+00) 12 3456 890
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[300px]">
              <div className="h-[120px]">
                <div className="flex">
                  <div className="border-r-[0.5px] w-[150px]">
                    <div className="flex items-center">
                      <i className="fa-solid fa-user text-sm mr-1 ml-1"></i>
                      <div className="flex flex-col p-4">
                        <h1 className="text-[12px]">ACCOUNT</h1>
                        <p className="text-[#5C5C5C] text-[10px]">
                          VIEW ALL OPTION
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <i className="fa-solid fa-cart-shopping text-sm mr-1 ml-1"></i>
                      <div className="flex flex-col p-4">
                        <h1 className="text-[12px]">VIEW CART</h1>
                        <p className="text-[#5C5C5C] text-[10px]">0</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Input placeholder="SEARCH THE STORE">
                  <i className="fa-solid fa-magnifying-glass absolute right-[13px] top-[24px]"></i>
                </Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
