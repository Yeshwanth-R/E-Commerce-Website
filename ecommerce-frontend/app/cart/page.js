"use client";
import { CartContexts } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColoumWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 50px;
`;

const page = () => {
  const { cartProducts } = useContext(CartContexts);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fecthdata = async () => {
      try {
        const data = cartProducts;
        let response = await axios.post(
          "/api/cart",
          { ids: data },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await response.data;
        console.log(response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors appropriately
      }
    };
    fecthdata();
  }, [cartProducts]);

  return (
    <div className="h-screen">
      <Header />
      <Center>
        <ColoumWrapper>
          <div className="bg-white px-2 rounded-xl py-5 flex flex-col gap-2 h-full">
            {cartProducts?.length === 0 && <div>Your Cart is empty</div>}
            {cartProducts?.length > 0 && (
              <>
                <h2 className="font-bold text-3xl text-center">Cart</h2>
                {product?.map((product, index) => {
                  return (
                    <div key={index}>
                      {product.Name}:
                      {cartProducts.filter((id) => id === product._id).length}
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {cartProducts?.length > 0 && (
            <div className="bg-white px-2 rounded-xl py-5 flex flex-col gap-2 h-full">
              <h2 className="text-xl font-semibold text-center">
                Order Information
              </h2>
              <input
                type="text"
                className="border-2 px-3 py-2 rounded-lg"
                placeholder="Address 1"
              />
              <input
                type="text"
                className="border-2 px-3 py-2 rounded-lg"
                placeholder="Address 1"
              />

              <button className="bg-black text-white rounded-lg px-2 py-2">
                Continue to Payment
              </button>
            </div>
          )}
        </ColoumWrapper>
      </Center>
    </div>
  );
};

export default page;
