"use client";
import LayoutMain from "@/components/MainLayout";
import "@/public/Stylesheets/scrollBar.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {

  };
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
          <div className="bg-white m-3 overflow-y-scroll h-full rounded-xl rounded-r-xl shadow-2xl">
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

              <div className="relative md:overflow-x-auto my-4 border shadow-md sm:rounded-xl">
                <table className="w-full text-sm text-left rtl:text-right  text-gray-500 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-5 ">
                    <tr className="bg-red-200">
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Product name
                      </th>
                      {/* <th
                        scope="col"
                        className="px-6 py-3 font-bold text-sm"
                      ></th> */}
                      {/* <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Category
                      </th> */}
                      {/* <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Price
                      </th> */}
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Edit
                      </th>
                      <th scope="col" className="px-6 py-3 font-bold text-sm">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id} className="bg-white border-b hover:bg-gray-50">
                        <th
                          scope="row"
                          className="px-3 border py-3 md:px-6 md:py-4 font-semibold text-gray-900 whitespace-nowrap "
                        >
                          <span className="text-pretty">{product.Name}</span>
                        </th>
                        {/* <td className="px-6 py-4"></td> */}
                        {/* <td className="px-6 py-4">{product.description}</td> */}
                        {/* <td className="px-6 py-4">₹{product.Price}</td> */}
                        <td className="px-2 py-3 md:px-6 md:py-4 text-right">

                          <div
                            className="font-medium bg-blue-500 text-white rounded-lg hover:underline hover:bg-blue-600 focus:bg-blue-300 focus:ring-4"
                          >
                            <Link
                              href={"/products/editProducts/" + product._id}
                              className="flex justify-around py-2 px-3 items-center"
                            >
                              <span className="flex gap-2">
                                Edit
                                <HiOutlinePencilAlt className="text-xl" />
                              </span>
                            </Link>
                          </div>
                        </td>
                        <td className="px-2 py-3 md:px-6 md:py-4 text-right">
                          <div
                            className="font-medium bg-red-500 text-white rounded-lg hover:underline hover:bg-red-600 focus:bg-red-300 focus:ring-4"
                          >
                            <Link
                              href={"/products/deleteProduct/" + product._id}
                              className="flex justify-around py-2 px-3 items-center"
                            >
                              <span className="flex gap-2">
                                Delete
                                <HiOutlineTrash className="text-xl" />
                              </span>
                            </Link>
                          </div>
                          {/* <div>
                            <button
                              onClick={openModal}
                              className="flex justify-around text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                              type="button"
                            >
                              <HiOutlineTrash className="text-xl" />
                              <span>Delete</span>
                            </button>

                            {isModalOpen && (
                              <div tabIndex="-1" className="fixed backdrop-blur-sm inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                  <div className="relative bg-blue-50 rounded-lg shadow">
                                    <button
                                      type="button"
                                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                      onClick={closeModal}
                                    >
                                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                      </svg>
                                      Close span>
                                    </button>
                                    <div className="p-4 md:p-5 text-center">
                                      <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                      </svg>
                                      <h3 className="mb-5 text-lg font-normal text-black ">Are you sure you want to delete this product ?</h3>
                                      <button
                                        onClick={(e) => deleteProduct(product._id)}
                                        type="button"
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                      >
                                        Yes, I'm sure
                                      </button>
                                      <button
                                        onClick={closeModal}
                                        type="button"
                                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                      >
                                        No, cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div> */}


                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutMain >
    </div >
  );
};

export default page;
