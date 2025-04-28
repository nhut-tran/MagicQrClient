import { Check } from "lucide-react";

function Pricing() {
    return (
        <div className="section-padding relative min-h-screen" style={{
            backgroundImage: `
    radial-gradient(at top left, #4f1d9e 30%, transparent 80%),
    radial-gradient(at bottom, #2ab4d9 0%, transparent 60%),
    radial-gradient(at bottom left, #2ab4d9 0%, transparent 50%),
    radial-gradient(at top right, #1d979e, transparent),
    radial-gradient(at bottom right, #4f1d9e 0%, transparent 50%)
`, backgroundBlendMode: "multiply"
        }}>
            <div className="absolute inset-0 bg-black opacity-65 pointer-events-none"></div>
            <div className="relative z-10">
                <div className="text-center text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-1">Pricing</h1>
                    <p>Choose a plan that fits your needs.</p>
                </div>
                <div className="relative z-10 flex flex-col flex-wrap md:flex-row justify-center items-center gap-4 mt-10">
                    <div className="flex flex-col cursor-pointer bg-[rgba(0,0,0,0.5)] min-h-80 min-w-[290px] md:w-[20%] rounded-lg hover:shadow-[#7434db] hover:shadow-md hover:transform hover:translate-y-[-10px] p-6 border border-[rgba(0,0,0,1)] hover:border hover:border-[#7434db] transition duration-400 ease-in-out">
                        <h3 className="text-center font-bold text-3xl mb-4">Free Trial</h3>
                        <h3 className="text-center font-bold text-xl mb-4">0 VND</h3>
                        <ul className="flex flex-col gap-10 font-medium">
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 URL Shortener</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Month</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                        </ul>
                        <div className="flex justify-center mt-8">
                            <a href="#editor" className="px-4 py-2 bg-[#8952e0] text-white rounded hover:bg-[#7434db] active:bg-[#7434db] transition duration-200">Get Started</a>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer bg-[rgba(0,0,0,0.5)] min-h-80 min-w-[290px] md:w-[20%] rounded-lg hover:shadow-[#7434db] hover:shadow-md hover:transform hover:translate-y-[-10px] p-6 border border-[rgba(0,0,0,1)] hover:border hover:border-[#7434db] transition duration-400 ease-in-out">
                    <h3 className="text-center font-bold text-3xl mb-4">Premium</h3>
                    <h3 className="text-center font-bold text-xl mb-4">200.000VND/month</h3>
                        <ul className="flex flex-col gap-10 font-medium">
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 URL Shortener</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom Domain</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                        </ul>
                        <div className="flex justify-center mt-8">
                            <a href="#editor" className="px-4 py-2 bg-[#8952e0] text-white rounded hover:bg-[#7434db] active:bg-[#7434db] transition duration-200">Get Started</a>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer bg-[rgba(0,0,0,0.5)] min-h-80 min-w-[290px] md:w-[20%] rounded-lg hover:shadow-[#7434db] hover:shadow-md hover:transform hover:translate-y-[-10px] p-6 border border-[rgba(0,0,0,1)] hover:border hover:border-[#7434db] transition duration-400 ease-in-out">
                        <h3 className="text-center font-bold text-3xl mb-4">Custom</h3>
                        <h3 className="text-center font-bold text-xl mb-4">Contact Sales</h3>
                        <ul className="flex flex-col gap-10 font-medium">
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 URL Shortener</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom Domain</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                            <li className="flex items-center"><Check color="#7434db" size={20} /> <span className="ml-3">1 Custom QR Code</span></li>
                        </ul>
                        <div className="flex justify-center mt-8">
                            <a href="#editor" className="px-4 py-2 bg-[#8952e0] text-white rounded hover:bg-[#7434db] active:bg-[#7434db] transition duration-200">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pricing;