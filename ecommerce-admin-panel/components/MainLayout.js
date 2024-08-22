"use client";
import MenuAdmin from "@/components/sidebarAdmin";
import "@/public/Stylesheets/FullScreenLoader.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import NavBar from "./NavBar";
import { useState } from "react";

export default function LayoutMain({ children }) {
  const [show, setShow] = useState(false);
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
        <div>
          <button
            onClick={() => {
              setShow(true);
            }}
            className={
              (show ? "hidden" : "") +
              " fixed z-20 bg-red-500 md:hidden transition-all duration-300 hover:bg-red-700 top-6 text-white p-2 rounded-r-lg"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="h-screen w-screen flex">
            <div className="md:w-1/5">
              <MenuAdmin show={show} />
            </div>
            <div className="flex md:w-4/5">
              <div className="flex flex-col w-screen">
                <NavBar />
                {children}
              </div>
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
