"use client";
import MenuAdmin from "@/components/sidebarAdmin";
import "@/public/Stylesheets/FullScreenLoader.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function LayoutMain({ children }) {
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
          <MenuAdmin />
          <div className="flex-grow">{children}</div>
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
