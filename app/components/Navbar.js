"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "./common/Input";
import Link from "next/link";
import {
  FaBars,
  FaCartArrowDown,
  FaGift,
  FaRegUser,
  FaShippingFast,
  FaTimes,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isTopsOpen, setIsTopsOpen] = useState(false);
  const [isDenimsOpen, setIsDenimsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { cart } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
    setActiveDropdown(!activeDropdown);
  };

  useEffect(() => {
    fetch(`https://admin.ezicalc.com/api/public/products/get/15`)
      .then((res) => res.json())
      .then((data) => console.log("data from API", data));
  }, []);
  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for mouse clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Purple Banner */}

      <div className="flex flex-col">
        <div className="relative top-0 z-51 left-0 w-full h-10 bg-[#976797] flex justify-end  items-center">
          <div className="hidden md:flex mr-2">
            <h1 className="text-sm md:text-md text-white mr-2">
              New Offer This Weekend Only! Hurry Shop Now!
            </h1>{" "}
            <h1 className="text-white"> |</h1>{" "}
            <h1 className="text-md text-white ml-2">Select Currency</h1>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-white lg:border-b-[0.5px] border-b-0">
        <div className=" flex justify-between items-center h-[120px]  w-[200px]  md:w-full">
          {/* Logo Section */}
          <div id="box" className="w-[20rem] shadow ">
            <div id="content" className="h-[120px] mt-[16px] md:mt-0">
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

          <Link
            href="/cart"
            className="relative flex lg:hidden right-[-60%] md:right-[32px] top-[1px]"
          >
            <FaCartArrowDown className="text-lg " />
            <h1 className="absolute text-white bg-red-600 w-[20px] [h-10px] rounded-full left-[19px] top-[-20px]">
              <span className="top-[1px] left-[5px] relative">
                {cart.length}
              </span>
            </h1>
          </Link>

          <button
            className="block xl:hidden text-black text-2xl relative right-[-74%] md:right-[32px] top-[1px]"
            onClick={toggleMenu}
          >
            {isOpen !== true ? <FaBars /> : <FaTimes />}
          </button>
          <div className="hidden xl:flex relative   items-center justify-between w-full">
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
                        <h3 className="text-gray-800 font-bold mb-2">
                          BATWING
                        </h3>
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
                        <h3 className="text-gray-800 font-bold mb-2">
                          WIDE LEG
                        </h3>
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
                <a href="/cart" className="hover:text-gray-600">
                  CART
                </a>
              </nav>
            </div>

            {/* Account & Cart Section (Pushed to Right) */}
            <div className="flex ml-auto">
              <div className="flex flex-col w-[300px] border-l-[0.5px]">
                <div className="border-r-[0.5px] h-[120px]">
                  <div className="flex border-b-[0.5px]">
                    <div className="border-r-[0.5px] w-[150px]">
                      <h1 className="text-xs flex items-center text-[#5C5C5C] p-2 py-6">
                        <FaShippingFast className="mr-2 text-lg" />
                        FREE SHIPPING
                      </h1>
                    </div>
                    <div>
                      <h1 className="flex items-center text-xs p-2 py-6 text-[#5C5C5C]">
                        <FaGift className="mr-2 text-lg" />
                        SPECIAL OFFER
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xs flex items-center p-5">
                      <BsFillTelephoneFill className="mr-2 text-lg" />
                      Customer care : (+00) 12 3456 890
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[300px]">
                <div className="h-[120px]">
                  <div className="flex">
                    <div className="border-r-[0.5px] w-[150px]">
                      <div className="flex items-center ">
                        <FaRegUser className=" text-lg" />
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
                        <FaCartArrowDown className="text-lg " />
                        <div className="flex flex-col p-4">
                          <Link href="/cart" className="text-[12px]">
                            VIEW CART
                          </Link>
                          <p className="text-[#5C5C5C] text-[10px]">
                            {cart.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Input placeholder="SEARCH THE STORE">
                    <FaMagnifyingGlass className="absolute right-[13px] top-[24px] mr-2 text-lg" />
                  </Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={sidebarRef} className="flex flex-col xl:hidden items-center">
          <div
            className={`fixed top-0 left-0 max-w-[100vw] h-full bg-white shadow-lg z-50 transform overflow-y-auto ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            {isOpen && (
              <FaTimes
                className="flex justify-end absolute right-[12px] top-[19px]"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <nav className="justify-start flex flex-col space-x-8 text-black font-medium navbar mt-[6.25rem] p-3">
              {/* TOPS Dropdown */}

              <div
                className="relative group  p-2"
                onClick={() => toggleDropdown(1)}
              >
                <a href="#" className="hover:text-gray-600 ml-10 p-2">
                  TOPS ▾
                </a>

                {/* Dropdown Menu */}
                <div
                  className={`relative  transition-all duration-300 ease-in-out ${
                    dropdownOpen === 1
                      ? "h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden lg:border lg:rounded-md lg:shadow-white lg:bg-[#F7F7F7] `}
                  style={{ width: "200px" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 ml-[40px] p-6">
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
                </div>
              </div>

              {/* DENIMS Dropdown */}
              <div
                className="relative group  p-2"
                onClick={() => toggleDropdown(2)} // Toggle Denims dropdown
              >
                <a
                  href="#"
                  className="hover:text-gray-600 text-center justify-center ml-4  "
                >
                  DENIMS ▾
                </a>

                {dropdownOpen === 2 && (
                  <div className="relative  left-0 mt-2 lg:shadow-white lg:bg-[#F7F7F7]  w-[160px] lg:w-[500px]  grid grid-cols-1 lg:grid-cols-3 lg:rounded-md p-6">
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
              <div className="relative group margin_left p-2">
                <a href="#" className="hover:text-gray-600  flex  ">
                  ACCESSORIES
                </a>
              </div>
              <div className="relative group margin_left p-2">
                <a href="/cart" className="hover:text-gray-600  flex mr-3  ">
                  CART
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
