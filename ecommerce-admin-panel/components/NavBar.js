import React from "react";
import Link from "next/link";
import Image from "next/image";
import nameLogo from "@/public/images/nameLogo.png";

const NavBar = () => {
  return (
    <div className="flex mb-1 border-b-2">
      <Link
        href="/"
        className="flex justify-center mt-1 items-center text-gray-900 rounded-lg rounded-r-none"
      >
        <Image
          width={200}
          src={nameLogo}
          className="rounded-xl mx-5 p-1 hover:bg-red-300"
        ></Image>
      </Link>
    </div>
  );
};

export default NavBar;
