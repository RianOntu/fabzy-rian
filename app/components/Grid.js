import React from "react";

export default function Grid() {
  return (
    <div className="w-[80%]  mx-auto mt-[30px] mb-[20px]">
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        <div className="col-span-1 row-span-2">
          <img src="/bag.jpg" alt="Bag" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-3">
          <img src="/women.jpg" alt="Women" className="w-full h-full  object-cover" />
        </div>
        <div className="col-span-1 row-span-2">
          <img src="/shoes-grid.jpg" alt="Shoes" className="w-full h-full  object-cover" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/glass-grid.jpg" alt="Glasses" className="w-full  object-contain" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/watch.jpg" alt="Watch" className="w-full  object-contain" />
        </div>
      </div>
    </div>
  );
}
