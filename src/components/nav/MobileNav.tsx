
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
function MobileNav() {
     const [open, setOpen] = useState(false);
    return (<div className="block md:hidden zoom-in-70">
        <Menu className="cursor-pointer" onClick={() => setOpen(prev => !prev)} />
        <div className={`absolute top-0 right-0 w-full h-screen bg-[#000000eb] backdrop-blur-sm transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
           {open && <div className="flex flex-col items-center justify-center h-full text-2xl">
                <Link href="/" className="tblock ext-white text-lg py-2 border-b border-[#ffffff14] w-full bg-transparent active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">Home</Link>
                <Link href="/features" className="text-white text-lg py-2 border-b border-[#ffffff14] w-full active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">Features</Link>
                <Link href="/pricing" className="text-white text-lg py-2 border-b border-[#ffffff14] w-full active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">Pricing</Link>
                <Link href="/faq" className="text-white text-lg py-2 border-b border-[#ffffff14] w-full active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">FAQ</Link>
                <Link href="/login" className="text-white text-lg py-2 border-b border-[#ffffff14] w-full active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">Login</Link>
                <Link href="/login" className="text-white text-lg py-2 border-b border-[#ffffff14] w-full active:bg-[#ffffff0f] duration-75 ease-in-out ps-10 pe-10">Sign Up</Link>
                <span onClick={() => setOpen(false)} className="absolute top-0.5 left-0.5 cursor-pointer"><X /></span>
            </div>
}
        </div>
    </div>
    )
}

export default MobileNav;

