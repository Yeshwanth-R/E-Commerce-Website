import LayoutMain from "@/components/MainLayout";
import connectDB from "@/lib/connectDB";
import Link from "next/link";
import React from "react";

const page = () => {
  const fecthData = async () => {
    let res = await fetch("");
  };
  return (
    <div>
      <LayoutMain>
        <div className="flex gap-10 flex-col">
          <label htmlFor="">To add new Product</label>
          <div>
            <Link
              href={"/products/new"}
              className="bg-red-500 text-white hover:bg-red-600 text-xl px-5 py-3 rounded-xl"
            >
              Add
            </Link>
          </div>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
