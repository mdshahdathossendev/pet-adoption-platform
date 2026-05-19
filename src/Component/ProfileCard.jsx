"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LayoutDashboard, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function ProfileCard() {

  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="w-64 p-4">

      {/* Profile */}
      <div className="   gap-3">

        <Image
          src={
            session?.user?.image ||
            "https://i.ibb.co/2kR4x8D/user.png"
          }
          alt="profile"
          width={55}
          height={55}
          className="rounded-full object-cover border-2 h-15 w-15 border-orange-500 mx-auto"
        />

        <div className="text-center">
          <h2 className="font-semibold text-gray-800">
            {session?.user?.name || "Guest User"}
          </h2>

          <p className="text-sm text-gray-500">
            {session?.user?.email}
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-2">

        <Link href="/desbord">
          <Button className="w-full bg-orange-500 text-white rounded-xl flex items-center gap-2">
            <LayoutDashboard size={18} />
            Dashboard
          </Button>
        </Link>

        <Button
          onPress={handleLogout}
          className="w-full bg-red-500 text-white rounded-xl flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </Button>

      </div>

    </div>
  );
}