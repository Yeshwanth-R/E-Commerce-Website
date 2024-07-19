"use client";
import LayoutMain from "@/components/MainLayout";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import "@/app/globals.css";
import "@/public/Stylesheets/style.css";
import { useRouter } from "next/navigation";

const page = () => {
  const Router = useRouter();

  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Price, setPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    let data = { Name, description, Price: parseInt(Price) };

    setDescription("");
    setName("");
    setPrice("");

    const myPromise = async () => {
      let res = await fetch("/api/productsAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const result = await res.json();
        console.log(result);
      } else {
        console.error("Failed to add product", await res.text());
      }

      return data;
    };

    toast.promise(myPromise, {
      loading: "Adding the Product",
      success: (data) => {
        return `${data.Name} added Successfully`;
      },
      error: "Error adding the product",
    });

    Router.push("/products");

  };

  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen">
        <Toaster position="top-right" richColors />
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          New Product
        </span>
        <div className="flex justify-center">
          <form
            onSubmit={addProduct}
            className="w-1/2 mt-5 rounded-xl border drop-shadow-xl bg-white p-3 flex flex-col gap-2"
          >
            <label className="text-lg pl-2 font-semibold">Product Name</label>

            <input
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              required
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Product Name"
            />

            <label className="text-lg pl-2 font-semibold">Description</label>

            <textarea
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Write Something"
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Photos
            </label>

            <div className="flex items-center">
              <label htmlFor="multiple_files"
                className="p-3 border-dashed border-4 border-gray-900 cursor-pointer text-2xl">
                +
              </label>
              <input
                className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="multiple_files"
                type="file"
                multiple

              />
            </div>


            <label className="text-lg pl-2 font-semibold">Price</label>


            <input
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              required
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price ₹"
            />

            <div className="">
              <button
                type="submit"
                className="text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutMain>
  );
};

export default page;
