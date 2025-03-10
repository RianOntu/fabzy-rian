"use client";
import { useParams, usePathname } from "next/navigation";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "@/app/components/SingleProduct";
import Subscribe from "@/app/components/Subscribe";
import Link from "next/link";
import RelatedProducts from "@/app/components/RelatedProducts";
import RelatedProductsRow from "@/app/components/RelatedProductsRow";
import { FaHome } from "react-icons/fa"; // Import the home icon

export default function page() {
  const [singleProduct, setSingleProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Map path segments to breadcrumb labels
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label = segment.replace(/-/g, " "); // Replace hyphens with spaces
    return { href, label };
  });

  useEffect(() => {
    setLoading(true);
    // Fetch all products
    axios
      .get(`https://admin.ezicalc.com/api/public/products/get/15`)
      .then((response) => {
        const products = response?.data?.data?.data;
        setLoading(false);
        console.log("products", products);

        setAllProducts(products); // Set all products

        // Find the single product by ID
        const product = products.find((product) => product.id == id);
        if (!product) {
          setLoading(false);
          return null;
        }
        setSingleProduct(product); // Set the single product
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [id]); // Dependency on `id`

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#F7F7F7] relative top-[1px]">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-bold uppercase text-center">
            {singleProduct?.name}
          </h3>
          <p className="text-md text-center">
            <span className="inline-flex items-center">
              {/* Home Icon */}
              <FaHome className="mr-2 text-gray-900" />
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <span className="mx-2">/</span>
              {breadcrumbs.map((breadcrumb, index) => (
                <span key={breadcrumb.href}>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-900">{breadcrumb.label}</span>
                  ) : (
                    <>
                      <Link
                        href={breadcrumb.href}
                        className="hover:text-gray-900"
                      >
                        {breadcrumb.label}
                      </Link>
                      <span className="mx-2">/</span>
                    </>
                  )}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
      <SingleProduct loading={loading} singleProduct={singleProduct} />
      <div className="w-[80%] mx-auto mt-[5.25rem]">
        <div className="p-6 bg-[#F7F7F7] relative top-[-40px]">
          <button className="bg-white p-3 px-5">DESCRIPTION</button>
          <h3 className="text-md font-medium mt-5">
            {singleProduct?.short_desc}
          </h3>
        </div>
      </div>
      <RelatedProducts />
      <RelatedProductsRow />
      <Subscribe />
      <Footer />
    </>
  );
}
