"use client";
import LayoutMain from "@/components/MainLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <LayoutMain>
      <div className="flex flex-col h-screen">
        <div className="py-2 flex w-full justify-between px-5 text-lg items-center">
          <span>Welcome {session?.user.name}</span>
          <div className="flex gap-2 justify-center items-center py-1 bg-red-500 rounded-full px-2">
            <span className="text-white">{session?.user.name}</span>
            <div className="rounded-full overflow-hidden">
              {session ? (
                <Image src={session?.user.image} width={40} height={40} />
              ) : (
                <FaUser />
              )}
            </div>
          </div>
        </div>
        <div className="bg-red-50 h-full">body</div>
      </div>
    </LayoutMain>
  );
}
