import AllProducts from "@/components/allProducts";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import connectDB from "@/lib/connectDB";
import Products from "@/models/products";
import React from "react";

const page = async () => {
  await connectDB();
  const products = await Products.find({}, null, { sort: { _id: -1 } });
  //   console.log(products);
  //   console.log(product);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-[1200px] mx-auto p-5">
        <h1 className="text-3xl font-bold">All Products</h1>
        <AllProducts products={products} />
      </div>
    </div>
  );
};

export default page;
