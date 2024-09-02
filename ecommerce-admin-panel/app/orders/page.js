"use client";
import LayoutMain from "@/components/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fecthOrders = async () => {
      let response = await axios.get("/api/orders");
      setOrders(response.data);
    };
    fecthOrders();
  }, []);

  return (
    <div>
      <LayoutMain>
        <div className="h-full bg-red-50 flex flex-col gap-10">
          <h1 className="font-semibold text-3xl text-center mt-5">Orders</h1>
          <table className="bg-white m-5 shadow-lg rounded-xl rounded-b-none">
            <thead className="border-b-2">
              <tr className="p-5">
                <th className="p-3 border-r-2 text-lg font-semibold">ID</th>
                <th className="p-3 border-r-2 text-lg font-semibold">
                  Recipient
                </th>
                <th className="p-3 text-lg font-semibold">Products</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders.map((order) => (
                  <tr className="text-center">
                    <td className="border-r-2 py-2 border-b-2">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="border-r-2 py-2 border-b-2">
                      {order.name} {order.email} <br />
                      {order.city} {order.pincode}
                    </td>
                    <td className="py-2 border-b-2">
                      {order.line_items.map((l) => (
                        <>
                          {l.price_data.product_data.name} X {l.quantity} =
                          {l.price_data.unit_amount / 100}
                          <br />
                          {/* {JSON.stringify(l)} <br /> */}
                        </>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </LayoutMain>
    </div>
  );
};

export default page;
