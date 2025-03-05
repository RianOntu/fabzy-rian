import React from "react";

export default function Input({ placeholder, children }) {
  return (
    <div className="relative">
      <input
        className="m-3 w-[280px] h-[40px] bg-[#F7F7F7] placeholder:text-[12px] placeholder:p-2 focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
      {children}
     
    </div>
  );
}
