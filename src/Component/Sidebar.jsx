"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  const menu = [
    { name: "My Requests", path: "/desbord" },
    { name: "Add Pet", path: "/addpat" },
    { name: "My Listings", path: "/my-listing" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-orange-500">Dashboard</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72 bg-white shadow-2xl border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-2xl font-bold text-orange-500">
            Dashboard
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <ul className="mt-6 space-y-3 px-4">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg font-medium transition-all duration-200
                  ${
                    pathname === item.path
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-100 hover:text-orange-600"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <Button
            onClick={handellogOut}
            variant="bordered"
            className="w-full rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            LogOut
          </Button>
        </div>
      </div>
    </>
  );
}