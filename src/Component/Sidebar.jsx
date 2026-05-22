"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function Sidebar() {
  const handellogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.error("LogOut Success");
          window.location.href = "/login";
        },
      },
    });
  };

  const pathname = usePathname();

  const menu = [
    { name: "My Requests", path: "/desbord" },
    { name: "Add Pat", path: "/addpat" },
    { name: "My Listings", path: "/my-listing" },
  ];

  return (
    <div
      className="
        w-full md:w-64
        bg-white shadow-xl text-black border-r-2
        md:fixed left-0 top-0
        md:h-screen
        mt-0 md:mt-13
        z-50
      "
    >
      <ul
        className="
          flex md:flex-col
          overflow-x-auto md:overflow-visible
          gap-2
          mt-4
          px-2
          py-2
          md:space-y-2
        "
      >
        {menu.map((item) => (
          <li key={item.path} className="min-w-fit">
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded transition whitespace-nowrap ${
                pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-2 md:absolute md:bottom-4 md:w-full">
        <Button
          onClick={handellogOut}
          variant="outline"
          className="w-full rounded-sm hover:bg-red-600 hover:text-white"
        >
          LogOut
        </Button>
      </div>
    </div>
  );
}