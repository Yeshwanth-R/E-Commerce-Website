"use client";
import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
`;

const Des = styled.p`
  font-size: 0.8rem;
  color: rgb(156 163 175);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

const Coloum = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const HeroItem = ({ product }) => {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Coloum>
            <div className="flex flex-col gap-5">
              <Title>{product.Name}</Title>
              <Des>
                {product.description}
              </Des>
            </div>
            <div className="flex gap-3">
              <Link href={'/product/' + product._id} className="hover:bg-white text-white hover:text-black border-2 transition-all duration-300 text-lg px-2 py-1 rounded-lg">
                Read More
              </Link>
              <button className="flex justify-center gap-2 hover:text-gray-200 items-center bg-violet-600 px-2 py-1 rounded-lg border-2 border-violet-600 hover:bg-violet-800 hover:border-violet-800 transition-all duration-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className=""> Add To Card</span>
              </button>
            </div>
          </Coloum>
          <Coloum className="relative">
            <Image
              src={
                product.images[1]
              }
              fill
              alt="Picture of the Featured Product"
              priority
            />
          </Coloum>
        </Wrapper>
      </Center>
    </Bg>
  );
};

export default HeroItem;
