import QREditor from "@/components/QRCode/QREditor";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" style={{ opacity: 1, transform: 'none' }}>Tạo QR Code một lần chuyển tiếp nhiều link</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ opacity: 1, transform: 'none' }}>Chỉ cần tạo một QR bạn có thể chuyển tiếp nhiều link tùy biến thoải mái theo thời gian trong ngày.</p>
          <p className="text-xl text-gray-300 mb-8 max-w-6xl mx-auto" style={{ opacity: 1, transform: 'none' }}>Tạo mã QR chuyên nghiệp, <strong>tùy chỉnh miễn phí</strong> với trình tạo mã QR dễ sử dụng của chúng tôi. Dù bạn cần mã QR cho danh thiếp, bao bì sản phẩm hay tài liệu tiếp thị, công cụ của chúng tôi cho phép bạn thêm logo, chọn màu sắc tùy chỉnh và tải xuống mã QR chất lượng cao chỉ trong vài giây.</p>
          <div className="inline-block relative" style={{ opacity: 1, transform: 'none' }}><a href="#editor" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">Create Your QR Code</a>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 feature"><h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers text-purple-400"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg></div><h3 className="text-xl font-semibold">Custom Colors</h3>
            </div>
            <p className="text-gray-300">Choose from millions of color combinations to match your brand. Our <strong>QR code maker with custom colors</strong> ensures your codes stand out while remaining scannable.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pink-500 bg-opacity-20 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload text-pink-400">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
              </div>
              <h3 className="text-xl font-semibold">Logo Integration</h3>
            </div>
            <p className="text-gray-300">Upload your brand logo or any image to create <strong>personalized QR codes</strong>. Our <strong>QR code generator with logo</strong> feature places your image perfectly in the center.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw text-blue-400">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Style Options</h3>
            </div>
            <p className="text-gray-300">Add attractive frames to your QR codes with our <strong>QR code frame generator</strong>. Choose from classic borders, rounded corners, or 'Scan Me' indicators.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}><div className="flex items-center mb-4">
            <div className="p-2 bg-green-500 bg-opacity-20 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download text-green-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Instant Download</h3>
          </div>
            <p className="text-gray-300">Download your QR code as a high-quality PNG image. No waiting, no account required.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-500 bg-opacity-20 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical text-yellow-400">
                  <line x1="4" x2="4" y1="21" y2="14"></line>
                  <line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line>
                  <line x1="12" x2="12" y1="8" y2="3"></line>
                  <line x1="20" x2="20" y1="21" y2="16"></line>
                  <line x1="20" x2="20" y1="12" y2="3"></line>
                  <line x1="2" x2="6" y1="14" y2="14"></line>
                  <line x1="10" x2="14" y1="8" y2="8"></line>
                  <line x1="18" x2="22" y1="16" y2="16"></line>
                </svg></div>
              <h3 className="text-xl font-semibold">Adjustable Settings</h3>
            </div>
            <p className="text-gray-300">Fine-tune error correction levels, size, and margins. Create the perfect QR code for your specific needs.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-500 bg-opacity-20 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-red-400">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Completely Free</h3>
            </div>
            <p className="text-gray-300">All features are completely free to use. No hidden fees, no limitations, no watermarks.</p>
          </div>
        </div>
      </div>
      <section id="editor" className="py-12">
        <div>QR code</div>
        <QREditor />
      </section>
    </div>
  );
}
