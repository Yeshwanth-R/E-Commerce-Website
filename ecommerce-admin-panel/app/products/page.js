"use client";
import LayoutMain from "@/components/MainLayout";
import "@/public/Stylesheets/scrollBar.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

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

              <div className="relative overflow-x-auto my-4 border shadow-md sm:rounded-xl">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-5 ">
                    <tr className="bg-red-200">
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Product name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-bold text-sm"
                      ></th>
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-semibold  text-gray-900 whitespace-nowrap "
                        >
                          {product.Name}
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">{product.description}</td>
                        <td className="px-6 py-4">₹{product.Price}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={"/products/editProducts/" + product._id}
                            className="font-medium bg-blue-600 text-white py-2 px-3 rounded-lg hover:underline hover:bg-blue-700"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
