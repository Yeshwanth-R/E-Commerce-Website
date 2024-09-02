import LayoutMain from "@/components/MainLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <LayoutMain>
        <div className="h-full bg-red-50 flex flex-col gap-10">
          <h1 className="font-semibold text-3xl text-center mt-5">Orders</h1>
          <table className="bg-white m-5 shadow-lg rounded-xl">
            <thead>
              <tr className="p-5">
                <th className="p-3 border-r-2 text-lg font-semibold">ID</th>
                <th className="p-3 border-r-2 text-lg font-semibold">
                  Recipient
                </th>
                <th className="p-3 text-lg font-semibold">Products</th>
              </tr>
            </thead>
          </table>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
