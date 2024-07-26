"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import LayoutMain from "@/components/MainLayout";
import { toast, Toaster } from "sonner";
import "@/app/globals.css";
import "@/public/Stylesheets/style.css";
import { HiOutlineUpload } from "react-icons/hi";
import axios from "axios";
import Image from "next/image";

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
            images: product.images,
          });
          setName(product.Name);
          setDescription(product.description);
          setPrice(product.Price);
          setImages(product.images);
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
  const [images, setImages] = useState(data.images || []);

  const addProduct = (e) => {
    e.preventDefault();

    let data = { Name, description, Price: parseInt(Price), images };

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
        setDescription("");
        setName("");
        setPrice("");
        setImages([]);
        console.log(result);
      } else {
        console.error("Failed to add product", await res.text());
      }

      return data;
    };

    myPromise()
      .then((data) => {
        toast.success(`${data.Name} Edited successfully`, {
          onAutoClose: () => Router.push("/products"),
          duration: 2000,
        });
      })
      .catch((error) => {
        toast.error("Error Editing the product");
      });
  };

  async function uploadPhotos(e) {
    e.preventDefault(); // Prevent default form submission behavior if this is used within a form
    let files = e.target.files;

    let data = new FormData();
    for (const file of files) {
      data.append("images", file);
    }
    const response = await axios.post("/api/upload  ", data);
    console.log(response.data);
    console.log(response.data.link);
    setImages((pre) => {
      return [...pre, ...response.data.link];
    });
  }

  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen overflow-hidden">
        <Toaster position="top-right" richColors />
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          Edit Product
        </span>
        <div className="flex justify-center pb-5 h-1/2 sm:h-[100%] overflow-y-scroll">
          <form
            onSubmit={addProduct}
            className="sm:w-1/2 w-3/4 mt-5 rounded-xl h-fit  border drop-shadow-xl bg-white p-3 flex flex-col gap-2 "
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

            <input
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

            {images?.length == 0 ? (
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
            ) : (
              <div className="flex flex-wrap gap-4 items-center">
                {
                  <div className="flex gap-3 pl-2 flex-wrap p-1">
                    {images.map((key) => {
                      return (
                        <div className="flex ">
                          <Image
                            className="border p-1 rounded shadow-md"
                            alt="Image"
                            src={key}
                            width={116}
                            height={116}
                            key={key}
                            priority
                          />
                        </div>
                      );
                    })}
                  </div>
                }
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
              </div>
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
