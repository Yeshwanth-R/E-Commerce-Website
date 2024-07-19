"use client";
import MenuAdmin from "@/components/sidebarAdmin";
import "@/public/Stylesheets/FullScreenLoader.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import NavBar from "./NavBar";
import { useState } from "react";

export default function LayoutMain({ children }) {
  const [show, setShow] = useState("hidden")
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="fullscreen-loader">
        <div className="loader"></div>
      </div>
    );
  }
  if (session) {
    let s = session;

    return (
      <>
        <div className="h-screen w-screen flex">
          <div className={"w-1/5 hidden md:block"}>

            <MenuAdmin />
          </div>
          <div className="flex w-4/5">
            <div className="flex flex-col w-screen">
              <NavBar />
              <button
                className="flex md:hidden absolute left-[-1px] top-4 justify-center items-center p-2 text-sm font-medium text-white bg-red-500 border border-gray-300 rounded-r-lg shadow-sm hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

              </button>

              {children}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="bg-[#b0d4ef] w-screen h-screen flex flex-col justify-center items-center gap-10">
        <label className="text-[#000000] text-4xl">Welcome Back Admin</label>
        <div className="container flex justify-center items-center flex-col gap-5">
          <label className="text-xl">Login</label>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => signIn("google")}
              className="p-5 rounded-full bg-red-600 hover:bg-red-700 text-4xl text-white "
            >
              <FaGoogle />
            </button>
            <span className="text-xl text-white">OR</span>
            <button
              onClick={() => signIn("github")}
              className="p-5 rounded-full bg-black hover:bg-slate-900 text-4xl text-white "
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
