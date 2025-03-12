import React from "react";

export default function ShopTheLook() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold mt-[50px]">
        Shop The Look
      </h1>
      <h3 className="text-lg font-medium text-center mt-5">
        Inspire and let yourself be inspired, from one unique fashion to
        another.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-[50px]">
        <img src="/model.jpg" className="object-contain w-full" alt="" />
        <img src="/model1.jpg" className="object-contain w-full" alt="" />
      </div>
    </>
  );
}
