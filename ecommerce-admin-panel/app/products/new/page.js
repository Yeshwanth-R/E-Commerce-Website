"use client";
import LayoutMain from "@/components/MainLayout";
import React, { useState } from "react";
import "@/app/globals.css";
import "@/public/Stylesheets/style.css";
import axios from "axios";

const page = () => {
  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Price, setPrice] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    const data = { Name, description, Price };
    console.log(data);
    await axios.post("/api/productsAdd", data);
  };

  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen">
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          New Product
        </span>
        <div className="flex justify-center">
          <form
            onSubmit={addProduct}
            className="w-1/3 mt-5 rounded-xl border drop-shadow-xl bg-white p-3 flex flex-col gap-2"
          >
            <label className="text-lg pl-2 font-semibold">Product Name</label>

            <input
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Product Name"
            />

            <label className="text-lg pl-2 font-semibold">Description</label>

            <input
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Write Something"
            />

            <label className="text-lg pl-2 font-semibold">Price</label>

            <input
              type="text"
              className="border-2 rounded-3xl p-3 outline-none"
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price ₹"
            />

            <div className="">
              <button
                type="submit"
                class="text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
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
