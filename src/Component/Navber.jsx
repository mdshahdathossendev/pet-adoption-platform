'use client'
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { ArrowRightArrowLeft, ArrowRightToSquare, CirclePlayFill, Firewall, HouseFill } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navber = () => {
    const session = aut
    console.log(session)
   const handellogOut = async() => {
     await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      window.location.href='/'
    },
  },
});
    }
    return (
        <div className='bg-white shadow'>
            <div className='flex justify-between mx-auto container  items-center py-2'>
            <div>
                <Image src='/assets/ChatGPT Image May 17, 2026, 09_11_08 PM.png' width={120} height={200} alt='logo'></Image>

            </div>
            <div>
                <ul className='flex gap-8'>
                   <Link href={'/'}> <li className='flex items-center gap-1'><HouseFill></HouseFill>Home</li></Link>
                    <Link href={'/allpat'}><li className='flex items-center gap-1'><Firewall></Firewall> All Pets</li></Link>
                </ul>
            </div>
            <div className="flex gap-4 items-center">
  {session ? (
    <Button onClick={handellogOut} color="danger" className="bg-orange-500 text-white rounded-sm"  >Logout</Button>
  ) : (
    <>
      <Link href="/login" className="flex items-center gap-1">
        <ArrowRightToSquare />
        Login
      </Link>

      <Link href="/signup">
        <Button className="bg-orange-500 text-white">
          Get Started
        </Button>
      </Link>
    </>
  )}
</div>
        </div>
        </div>
    );
};

export default Navber;