import React from "react";
import LayoutMain from "@/components/MainLayout";
import { toast, Toaster } from "sonner";
import ProductForm from "@/components/ProductForm";


const editPro = () => {


  return (
    <LayoutMain>
      <div className="flex flex-col bg-red-50 h-screen overflow-hidden">
        <Toaster position="top-right" richColors />
        <span className="p-3 text-2xl text-center font-bold shadow-sm bg-white">
          Edit Product
        </span>
        <ProductForm />
      </div>
    </LayoutMain>
  );
};

export default editPro;
