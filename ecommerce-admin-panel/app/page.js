"use client";
import LayoutMain from "@/components/MainLayout";
import { useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <LayoutMain>
      <div className="bg-red-50 h-full">
        Body
      </div>
    </LayoutMain>
  );
}
