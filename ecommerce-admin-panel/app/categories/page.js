"use client";
import LayoutMain from "@/components/MainLayout";
import axios from "axios";
import "@/public/Stylesheets/scrollBar.css";
import React, { useState, useEffect } from "react";

const page = () => {
  const [Name, setName] = useState("");
  const [editName, setEditName] = useState("Category Name");
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [editedCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, [uploading]);

  const fetchCategories = async () => {
    try {
      let response = await fetch("/api/categories", {
        method: "GET",
      });
      let data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadCategory = async (e) => {
    setUploading(true);
    e.preventDefault();
    await axios.post("/api/categories", {
      name: Name,
      parent: parentCategory ? parentCategory : null,
    });

    console.log("Category uploaded", Name);
    setName("");
    setUploading(false);
    setParentCategory("");
  };

  const editCategory = (category) => {
    setEditName(`Edit ${category.name}`);
    setEditedCategory(category);
    console.log(editedCategory);
    setName(category.name);
    console.log(category?.parent?.name);
    setParentCategory(category.parent ? category.parent._id : "");
  };
  return (
    <div>
      <LayoutMain>
        <div className="flex items-center overflow-hidden flex-col gap-2 bg-red-50 h-full">
          <div>
            <span className="text-red-600 text-4xl text-center">
              Categories
            </span>
          </div>
          <div className="py-3 px-5 rounded-lg flex flex-col gap-5 w-3/4 h-[90%] border shadow-lg bg-white">
            <form onSubmit={uploadCategory}>
              <div className="flex flex-col gap-2">
                <label className="text-xl ml-1">{editName}</label>
                <div className="flex justify-between gap-2">
                  <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-1 px-4 w-full border-2 rounded-lg outline-none"
                    placeholder="Category"
                    required
                  />

                  <select
                    value={parentCategory}
                    onChange={(e) => setParentCategory(e.target.value)}
                    className=" border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
                  >
                    <option value="">No Parent Category</option>

                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category?.name}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    className="bg-red-500 text-xl text-white py-1 px-4 transition-all duration-200 rounded-xl hover:bg-red-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left border text-gray-500">
                <thead className="text-xs bg-red-50 border text-gray-900 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xl border-r">
                      Category name
                    </th>
                    <th scope="col" className="px-6 py-3 text-xl border-r">
                      Parent Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xl text-center"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index} className="bg-white hover:bg-gray-50">
                      <th
                        scope="row"
                        className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap text-lg"
                      >
                        {category.name}
                      </th>
                      <td className="px-6 py-4 border text-lg">
                        {category.parent ? category.parent.name : "No Parent"}
                      </td>

                      <td className="px-2 border py-4">
                        <div className="flex justify-between">
                          <button
                            onClick={() => {
                              editCategory(category);
                            }}
                            className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white text-lg py-1 px-3 rounded-xl"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                            <span>Edit</span>
                          </button>
                          <button
                            href={"/categories/deletecategory/" + category._id}
                            className="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-700 text-white text-lg py-1 px-3 rounded-xl"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>

                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
