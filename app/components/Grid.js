import React from "react";

export default function Grid() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-3 grid-rows-4 gap-3">
          <div className="col-span-1 rows-span-3">
            <img src="/bag.jpg" alt="" />
          </div>
          <div className="col-span-1 row-span-4">
            <img src="/women.jpg" alt="" />
          </div>
          <div className="col-span-1 row-span-3">
            <img src="/shoes-grid.jpg" alt="" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="glass-grid.jpg" alt="" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/watch.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
