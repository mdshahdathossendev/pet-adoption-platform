'use client'
import { authClient } from '@/lib/auth-client';
import {
  ArrowRightToSquare,
  Firewall,
  HouseFill,
} from '@gravity-ui/icons';
import { Button, Popover } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { MdAddIcCall } from 'react-icons/md';
import { List, Menu, X } from 'lucide-react';

const Navber = () => {
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState(false);

  const handellogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/';
        },
      },
    });
  };

  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div>
            <Image
              src="/assets/ChatGPT Image May 17, 2026, 09_11_08 PM.png"
              width={120}
              height={100}
              alt="logo"
              className="w-[100px] md:w-[120px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex gap-8 font-medium">
              <Link href="/">
                <li className="flex items-center gap-1 hover:text-orange-500 duration-200">
                  <HouseFill />
                  Home
                </li>
              </Link>

              <Link href="/allpat">
                <li className="flex items-center gap-1 hover:text-orange-500 duration-200">
                  <Firewall />
                  All Pets
                </li>
              </Link>

              <Link href="/addpat">
                <li className="flex items-center gap-1 hover:text-orange-500 duration-200">
                  <MdAddIcCall />
                  Add Pet
                </li>
              </Link>

              <Link href="/my-listing">
                <li className="flex items-center gap-1 hover:text-orange-500 duration-200">
                  <List size={18} />
                  My List
                </li>
              </Link>
            </ul>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex gap-4 items-center">
            {session ? (
              <div className="flex items-center gap-4">
                <Popover>
                  <Button
                    className="bg-transparent p-0 rounded-full"
                    variant="light"
                  >
                    <Image
                      className="rounded-full w-10 h-10 border-2 border-orange-600"
                      src={session?.user?.image || '/default-user.png'}
                      alt="image"
                      width={40}
                      height={40}
                    />
                  </Button>

                  <Popover.Content placement="left">
                    <Popover.Dialog>
                      <Popover.Arrow />
                      <ProfileCard />
                    </Popover.Dialog>
                  </Popover.Content>
                </Popover>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1 hover:text-orange-500"
                >
                  <ArrowRightToSquare />
                  Login
                </Link>

                <Link href="/singUp">
                  <Button className="bg-orange-500 text-white rounded-md">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white border rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col gap-5 font-medium">

              <Link href="/" onClick={() => setOpen(false)}>
                <li className="flex items-center gap-2">
                  <HouseFill />
                  Home
                </li>
              </Link>

              <Link href="/allpat" onClick={() => setOpen(false)}>
                <li className="flex items-center gap-2">
                  <Firewall />
                  All Pets
                </li>
              </Link>

              <Link href="/addpat" onClick={() => setOpen(false)}>
                <li className="flex items-center gap-2">
                  <MdAddIcCall />
                  Add Pet
                </li>
              </Link>

              <Link href="/my-listing" onClick={() => setOpen(false)}>
                <li className="flex items-center gap-2">
                  <List size={18} />
                  My List
                </li>
              </Link>

              {/* Mobile Auth */}
              {session ? (
                <div className="pt-2">
                  <ProfileCard />
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-2">
                  <Link href="/login">
                    <Button className="w-full" variant="bordered">
                      Login
                    </Button>
                  </Link>

                  <Link href="/singUp">
                    <Button className="w-full bg-orange-500 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;