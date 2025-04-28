import { Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (

        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-full h-64 bg-indigo-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-purple-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="mb-5">
                        <Link aria-label="Magic QR" href="/">
                            <div className="flex items-center justify-center flex-col mb-4">
                                <Image alt="magicqr" src={"/logo.svg"} width={100} height={100} />
                                <h4 className="text-2xl font-bold flex items-center justify-center mt-4">Magic QR</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="lg:col-start-3">
                        <p className="font-medium text-white mb-4 text-lg border-b border-indigo-500/30 pb-2">Useful Links</p>
                        <nav className="flex flex-col mt-4 space-y-3 text-sm">
                            <Link className="text-gray-400 hover:text-indigo-300 transition-colors duration-300" href="/blog">Blog</Link>
                            <Link className="text-gray-400 hover:text-indigo-300 transition-colors duration-300" href="/privacy-policy">Privacy Policy</Link>
                            <Link className="text-gray-400 hover:text-indigo-300 transition-colors duration-300" href="/terms-and-conditions">Terms &amp; Conditions</Link>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium text-white mb-4 text-lg border-b border-indigo-500/30 pb-2">Contact Us</p>
                        <div className="space-y-3 mt-4">
                            <div className="flex items-start space-x-2">
                                <Link href="mailto:trannhut1707@gmail.com" className=" flex items-center text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                                    <span className="mr-1"><Mail size={15} /></span>
                                    trannhut1707@gmail.com</Link>
                            </div>
                            <div className="flex items-start space-x-2">

                                <Link className="flex items-center text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300" href="tel:0123456789">
                                    <span className="mr-1"><Phone size={15} /></span>
                                    0123456789
                                </Link>
                            </div>
                            <div className="flex items-start space-x-2">
                                <Link href="https://www.linkedin.com/" className=" flex items-center text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                                    <span className="mr-1"><Linkedin size={15} /></span>
                                    trannhut1707@gmail.com</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    )
}