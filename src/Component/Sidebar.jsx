"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { LayoutDashboard, PlusCircle, List, LogOut } from "lucide-react";

export default function Sidebar() {
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
    <div
      className="
        w-full md:w-72
        bg-white/90 backdrop-blur-lg
        border-r border-gray-200
        shadow-2xl
        md:h-screen
        md:fixed left-0 top-0
        z-50
        flex flex-col
      "
    >
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-orange-500">
          Pet Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your pet listings
        </p>
      </div>

      {/* Menu */}
      <ul
        className="
          flex md:flex-col
          overflow-x-auto md:overflow-visible
          gap-3
          p-4
          md:flex-1
        "
      >
        {menu.map((item) => (
          <li key={item.path} className="min-w-fit">
            <Link
              href={item.path}
              className={`
                flex items-center gap-3
                px-5 py-3
                rounded-2xl
                font-medium
                transition-all duration-300
                whitespace-nowrap
                ${
                  pathname === item.path
                    ? "bg-orange-500 text-white shadow-lg scale-[1.02]"
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

      {/* Logout Button */}
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
            transition-all duration-300
          "
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </div>
  );
}