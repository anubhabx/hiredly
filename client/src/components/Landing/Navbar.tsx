import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const NavButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: "/signup" | "/signin";
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-6 py-3 rounded-full font-semibold text-sm transition duration-300",
        href === "/signup"
          ? "bg-accent text-background hover:bg-accent/80"
          : "bg-background text-foreground hover:bg-background/80"
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="max-w-[100%] w-full fixed top-0 left-0 z-100">
      <div className="py-4 px-6 rounded-full mx-8 md:mx-32 my-4 flex items-center justify-between bg-primary/15 backdrop-blur-md shadow-lg">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <p className="text-xl font-semibold">Hiredly.</p>
        </Link>

        <div className="hidden md:flex items-center gap-8 *:transition *:duration-300">
          <Link
            href={"/#features"}
            className="text-sm font-medium text-foreground hover:text-accent"
          >
            Features
          </Link>
          <Link
            href={"/#how-it-works"}
            className="text-sm font-medium text-foreground hover:text-accent"
          >
            How it works
          </Link>
          <Link
            href={"/#pricing"}
            className="text-sm font-medium text-foreground hover:text-accent"
          >
            Pricing
          </Link>
          <Link
            href={"/#contact"}
            className="text-sm font-medium text-foreground hover:text-accent"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavButton href="/signin">Login</NavButton>
          <NavButton href="/signup">Get Started</NavButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
