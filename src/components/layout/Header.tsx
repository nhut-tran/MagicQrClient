'use client'
import Navlinks from "@/components/NavLink";
import Link from "next/link";
import Image from 'next/image'
import MobileNav from "@/components/nav/MobileNav";
import { useEffect, useState } from "react";


export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  console.log(isAtTop)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`z-50 fixed top-0 left-0 w-full text-white uncopyable  ${isAtTop ? "backdrop-blur-[5px] bg-transparent border-b border-[#ffffff14]" : "bg-[#1d2025b3]"}`}>
      <header className="flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          <Image alt="magicqr" src={"/logo.svg"} width={50} height={50} />
        </Link>
        <nav>
          <MobileNav />
          <ul className="hidden md:flex space-x-6">
            <Link className="px-1 py-2 hover:underline transition-all duration-200 ease-in-out" href="/feature">Features</Link>
            <Link className="px-1 py-2 hover:underline transition-all duration-200 ease-in-out" href="/pricing">Pricing</Link>
            <Link className="px-1 py-2 hover:underline transition-all duration-200 ease-in-out" href="/FAQ">FAQ</Link>
            <Link className="px-1 py-2 hover:underline transition-all duration-200 ease-in-out" href="/login">Login</Link>
            <Link className="px-4 flex items-center justify-center rounded-2xl bg-[#8952e0] hover:bg-[#7434db] transition-all duration-75 ease-in-out" href="/signup">Sign Up</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
