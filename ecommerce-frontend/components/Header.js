"use client";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import Center from "./Center";
import { CartContexts } from "./CartContext";

const StyleHeader = styled.header`
  background-color: #222;
  color: white;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const { cartProducts } = useContext(CartContexts)
  return (
    <>
      <StyleHeader>
        <Center>
          <Wrapper>
            <Link className="text-2xl" href={"/"}>
              ShopSphere
            </Link>
            <nav className="text-gray-400 text-base flex gap-4">
              <Link
                className="hover:text-gray-200 transition-all duration-300"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-300"
                href={"/products"}
              >
                Products
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-300"
                href={"/categories"}
              >
                Categories
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-300"
                href={"/account"}
              >
                Account
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-300"
                href={"/cart"}
              >
                Cart ({cartProducts.length})
              </Link>
            </nav>
          </Wrapper>
        </Center>
      </StyleHeader>
    </>
  );
};

export default Header;
