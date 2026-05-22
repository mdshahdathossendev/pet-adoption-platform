import { auth } from '@/lib/auth';
import {
  ArrowRightArrowLeft,
  ArrowRightToSquare,
  CirclePlayFill,
  Firewall,
  HouseFill,
} from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DesNav = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="bg-white shadow fixed top-0 left-0 w-full z-[9999]">
      <div className="flex justify-between mx-auto container items-center py-2 px-4">
        
        <div>
          <Image
            className="h-5 hidden lg:block w-auto"
            src="/assets/ChatGPT Image May 17, 2026, 09_11_08 PM.png"
            width={130}
            height={180}
            alt="logo"
          />
        </div>

        <div className="flex items-center font-semibold gap-2">
          <Image
            className="rounded-full w-10 h-10 border-2 border-orange-600"
            src={session?.user?.image || '/default-user.png'}
            alt="image"
            width={200}
            height={200}
          />

          <h2 className="hidden lg:block">
            {session?.user?.name}
          </h2>
        </div>

      </div>
    </div>
  );
};

export default DesNav;