"use client";
import LayoutMain from "@/components/MainLayout";
import "@/public/Stylesheets/scrollBar.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  const fecthData = async () => {
    let res = await fetch("http://localhost:3000/api/getProducts");
    let data = await res.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div>
      <LayoutMain>
        <div className="flex gap-5 flex-col h-full overflow-hidden bg-red-50">
          <div className="bg-white m-3 overflow-y-scroll h-full rounded-xl shadow-2xl">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
              <div className="flex w-full justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Products
                </h2>
                <Link
                  href="/products/new"
                  className="bg-red-500 text-white hover:bg-red-600 text-xl px-5 py-3 rounded-xl"
                >
                  Add Products
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="group relative shadow-lg p-2 rounded-lg border"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      {/* <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            /> */}
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={"/api/editProducts/" + product._id}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.Name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{product.Price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
