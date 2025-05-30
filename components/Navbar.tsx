import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-2 py-4 bg-white max-sm:px-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={50} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />

        {/* If signed out display sign-in */}
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>

        {/* If signed in display userButton */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
