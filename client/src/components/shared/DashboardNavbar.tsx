"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { AvatarFallback } from "@radix-ui/react-avatar";

const DashboardNavbar = () => {
  const { user } = useAuth();

  return (
    <nav className="py-4 px-4 rounded-full flex items-center justify-between bg-accent/15 backdrop-blur-md shadow-lg">
      <Link href={"/dashboard"} className="items-center gap-2 flex">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <p className="text-xl font-semibold">Hiredly.</p>
      </Link>

      <Avatar>
        <AvatarImage
          src={user?.photoURL || "/profilePictureDefault.png"}
          alt="User Avatar"
        />
        <AvatarFallback>
          {user?.displayName
            ? user.displayName.split(" ")[0].charAt(0).toUpperCase() +
              user.displayName.split(" ")[1].charAt(0).toUpperCase()
            : "NU"}
        </AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default DashboardNavbar;
