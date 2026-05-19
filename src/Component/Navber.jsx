'use client'
import { authClient } from '@/lib/auth-client';
import { ArrowRightArrowLeft, ArrowRightToSquare, CirclePlayFill, Firewall, HouseFill } from '@gravity-ui/icons';
import { Button, Popover } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProfileCard from './ProfileCard';

const Navber = () => {
   const { data: session, isPending } = authClient.useSession();
   console.log(session?.user?.image)
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
   <div className="flex items-center gap-4">
     <Popover>
        <Button className="w-full bg-none rounded-full" variant="none">
          <Image className='rounded-full w-10 h-10 border-2 border-orange-600' src={session?.user?.image} alt='image' width={200} height={200}></Image>
        </Button>
        <Popover.Content placement="left">
          <Popover.Dialog>
            <Popover.Arrow />
        
            <ProfileCard></ProfileCard>
          
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  ) : (
    <>
      <Link href="/login" className="flex items-center gap-1">
        <ArrowRightToSquare />
        Login
      </Link>

      <Link href="/singUp">
        <Button className="bg-orange-500 text-white rounded-sm">
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