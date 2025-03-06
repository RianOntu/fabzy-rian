import React from "react";


export default function Grid() {
  return (
    <div className="w-[80%] mx-auto mt-[30px] mb-[20px]">
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        {[
          { src: "/bag.jpg", alt: "Bag", span: "col-span-1 row-span-2" },
          { src: "/women.jpg", alt: "Women", span: "col-span-1 row-span-3" },
          {
            src: "/shoes-grid.jpg",
            alt: "Shoes",
            span: "col-span-1 row-span-2",
          },
          {
            src: "/glass-grid.jpg",
            alt: "Glasses",
            span: "col-span-1 row-span-1",
          },
          { src: "/watch.jpg", alt: "Watch", span: "col-span-1 row-span-1" },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.span} img_hover relative overflow-hidden`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 bg-[#BAA2AB]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
