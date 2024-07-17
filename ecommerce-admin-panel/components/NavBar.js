import React from 'react'
import { useSession } from "next-auth/react";
import { FaBell, FaUser } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col h-20 border shadow-red-500">
        <div className="py-2 flex w-full justify-between px-5 text-lg items-center">
          <span>Welcome {session?.user.name}</span>
          <div className='flex w-1/4 gap-1'>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/inbox"} className='bg-red-50 border cursor-pointer p-3 flex justify-center items-center rounded-full'>

              <HiOutlineBell  className=''/>
              </Link>
            </div>
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
        </div>
        
      </div>
  );
};

export default NavBar
