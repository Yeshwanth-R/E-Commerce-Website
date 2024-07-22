"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LayoutMain from "@/components/MainLayout";
import { toast, Toaster } from "sonner";
import "@/app/globals.css";
import "@/public/Stylesheets/style.css";
import { HiOutlineUpload } from "react-icons/hi";
import axios from "axios";

const editPro = () => {
  const params = useParams();
  const [data, setData] = useState({
    _id: "",
    Name: "",
    description: "",
    Price: 0,
    images: [],
  });

  useEffect(() => {
    if (params && params.id && params.id[0]) {
      const fetchDatabyId = async () => {
        try {
          let res = await fetch(
            `http://localhost:3000/api/findProducts/${params.id[0]}`
          );
          let product = await res.json();
          setData({
            _id: product._id,
            Name: product.Name,
            description: product.description,
            Price: product.Price,
          });
          setName(product.Name);
          setDescription(product.description);
          setPrice(product.Price);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchDatabyId();
    }
  }, [params.id]);
  // console.log(data)

  const Router = useRouter();
  const [Name, setName] = useState(data.Name || "");
  const [description, setDescription] = useState(data.description || "");
  const [Price, setPrice] = useState(data.Price || "");

  const addProduct = (e) => {
    e.preventDefault();

    let data = { Name, description, Price: parseInt(Price) };

    setDescription("");
    setName("");
    setPrice("");

    const myPromise = async () => {
      let res = await fetch(`/api/findProducts/${params.id[0]}`, {
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

  async function uploadPhotos(e) {
    e.preventDefault(); // Prevent default form submission behavior if this is used within a form
    let files = e.target.files;

    let data = new FormData();
    for (const file of files) {
      data.append("images", file);
    }
    const response = await axios.post("/api/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    // let res = await fetch(`http://localhost:3000/api/uploadPhotos`, {
    //   method: "POST",
    //   body: data,
    //   onuploadprogress: (progressEvent) => {
    //     console.log(
    //       "Upload Progress: " +
    //         Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //         "%"
    //     );
    //   },
    // });
    // res = await axios.post("http://localhost:3000/api/uploadPhotos", data, {
    //   onUploadProgress: (progressEvent) => {
    //     console.log(
    //       "Upload Progress: " +
    //         Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //         "%"
    //     );
    //   },
    //   headers: {
    //     "Custom-Header": "value",
    //   },
    // });
    // let result = await res.data;
    // console.log(result);
  }

  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen">
        <Toaster position="top-right" richColors />
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          Edit Product
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
            <label className="text-lg pl-2 font-semibold">Photos</label>

            {data.images?.length == 0 ? (
              "no images"
            ) : (
              <>
                <div className="flex pl-2 items-center">
                  <label
                    htmlFor="multiple_files"
                    className="text-4xl cursor-pointer text-gray-600 bg-gray-300 rounded-xl hover:bg-gray-500 focus:ring-4 focus:ring-gray-500  focus:outline-none hover:text-white transition-all duration-300 p-10"
                  >
                    <HiOutlineUpload />
                  </label>
                </div>
                <input
                  onChange={(e) => {
                    uploadPhotos(e);
                  }}
                  className="hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  id="multiple_files"
                  type="file"
                  multiple
                />
                <label className="text-lg pl-2">No photos found</label>
              </>
            )}

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

export default editPro;
