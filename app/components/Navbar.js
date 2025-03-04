import React from "react";

function Navbar() {
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
            <img className="p-8 pt-[5rem] w-[19rem]" src="/logo.webp" alt="" />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center justify-between w-full">
          <div className="w-[500px] h-[120px]">
            <nav className="ml-10 flex space-x-8 text-black font-medium navbar mt-10">
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

                {/* Search Input */}
                <div className="relative">
                  <input
                    className="m-3 w-[280px] h-[40px] bg-[#F7F7F7] placeholder:text-[12px] placeholder:p-2 focus:outline-none"
                    type="text"
                    placeholder="SEARCH THE STORE"
                  />
                  <i className="fa-solid fa-magnifying-glass absolute right-[13px] top-[24px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Navbar;
