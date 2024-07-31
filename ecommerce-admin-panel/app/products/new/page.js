import LayoutMain from "@/components/MainLayout";
import ProductForm from "@/components/ProductForm";
import React from "react";
import { Toaster } from "sonner";

const page = () => {


  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen overflow-hidden">
        <Toaster position="top-right" richColors />
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          New Product
        </span>
        <ProductForm />

      </div>
    </LayoutMain>
  );
};

export default page;
