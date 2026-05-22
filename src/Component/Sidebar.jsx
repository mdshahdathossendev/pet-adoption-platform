"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import {
  LayoutDashboard,
  PlusCircle,
  List,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handellogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout Success");
          window.location.href = "/login";
        },
      },
    });
  };

  const pathname = usePathname();

  const menu = [
    {
      name: "My Requests",
      path: "/desbord",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Add Pet",
      path: "/addpat",
      icon: <PlusCircle size={18} />,
    },
    {
      name: "My Listings",
      path: "/my-listing",
      icon: <List size={18} />,
    },
  ];

  return (
    <>
    
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed top-2 left-4 z-[100]
          bg-orange-500 text-white
          p-2 rounded-xl shadow-lg
          md:hidden
        "
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

    
      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          bg-white/90 backdrop-blur-lg
          border-r border-gray-200
          shadow-2xl
          flex flex-col
          transition-all duration-300

          ${
            open ? "translate-x-0" : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between mt-4">
          <div>
            <h1 className="text-2xl font-bold text-orange-500">
              Pet Dashboard
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your pet listings
            </p>
          </div>

          {/* Close button mobile */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-3 p-4 flex-1">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3
                  px-5 py-3
                  rounded-2xl
                  font-medium
                  transition-all duration-300

                  ${
                    pathname === item.path
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={handellogOut}
            className="
              w-full
              bg-red-500
              hover:bg-red-600
              text-white
              rounded-2xl
              py-6
              text-base
              font-semibold
            "
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}