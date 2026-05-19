"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "My Requests", path: "/desbord" },
    { name: "Add Pat", path: "/addpat" },
    { name: "My Listings", path: "/my-listing" },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-xl text-black border-r-2 fixed left-0 top-0 mt-13">
      <ul className="mt-4 space-y-2 px-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block p-2 rounded transition ${
                pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button variant="outline" className={'mt-75 w-full rounded-sm  mx-auto hover:bg-red-600 hover:text-white'}>LogOut</Button>
    </div>
  );
}