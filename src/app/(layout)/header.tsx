import Navlinks from "@/components/NavLink";
import Link from "next/link";

export default function Header() {
    return (
      <div className="text-white uncopyable bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="flex flex-row justify-between items-center mx-5 pt-2 py-4">
          <div>
            <a href="/"><svg fill="none" height="36" viewBox="0 0 32 32" width="36" xmlns="http://www.w3.org/2000/svg"><rect fill="var(--secondary)" height="100%" rx="16" width="100%"></rect><path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path></svg></a>
          </div>
          <div className="lg:flex hidden flex-row justify-between font-semibold items-center">
              <Navlinks info={{url:'/about', text: 'Gioi thieu'}}></Navlinks>
              <Navlinks info={{url:'/pricing', text: 'Pricing'}}></Navlinks>
              <Navlinks info={{url:'/pricing', text: 'Pricing'}}></Navlinks>
              <Link href='/login' className="mx-5 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative text-sm">Dang Nhap</span>
              </Link>
              <Link href='/register' className="mx-5 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative text-sm">Dang Ky</span>
              </Link>
          </div>
        </div>
        
      </div>
    );
  }