"use client";
import qr from "../../../src/app/asset/qr.json";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
function Hero() {
    return (
        <div className="relative overflow-hidden">
        <div className=" absolute left-0 w-full h-full z-0 opacity-30 overflow-hidden pointer-events-none" style={{
          backgroundImage: `
        radial-gradient(at top left, #4f1d9e 30%, transparent 80%),
        radial-gradient(at bottom, #2ab4d9 0%, transparent 60%),
        radial-gradient(at bottom left, #2ab4d9 0%, transparent 50%),
        radial-gradient(at top right, #1d979e, transparent),
        radial-gradient(at bottom right, #4f1d9e 0%, transparent 50%)
    `, backgroundBlendMode: "saturation"
        }}>
        </div>
        <div className="relative px-10 pt-30 md:pt-10 pb-40 z-10 flex items-center text-center md:text-left">
          <div className="flex flex-col items-center justify-center md:items-start  mx-auto">
            <div className="flex flex-col justify-center md:items-start md:justify-start">
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                One QR
              </span>
              <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                To Rule Them All!
              </span>
              <p>Create one QR, change the destination at any time. With our great QR editor</p>
            </div>
            <div className="flex gap-x-2.5 mt-5">
              <a href="#editor" className="px-4 py-2 bg-[#8952e0] text-white rounded hover:bg-[#7434db] active:bg-[#7434db] transition duration-200">Get Started</a>
              <a href="#editor" className="px-4 py-2 text-white rounded border bg-transparent border-[#7434db] active:bg-[#7434db]  hover:bg-[#7434db] transition duration-200">Sign Up</a>
            </div>
          </div>
          <div className="hidden md:block min-w-[50%] max-w-[50%] h-auto">
            {/* <img src="/logo.svg" alt="QR Code" className="w-1/2 h-auto max-w-lg mx-auto" /> */}
            <Lottie animationData={qr} loop={false} />
          </div>
        </div>
      </div>
    )
}

export default Hero