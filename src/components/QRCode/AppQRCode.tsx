'use client'
import { useRef, useState } from 'react';
import { QRCode } from '../../lib/react-qrcode-logo/index.js';
import { FrameStyle, useQRCodeContext } from './QRCodeContext';
import { MdOutlineFileDownload } from "react-icons/md";
import { useColorPicker } from 'react-best-gradient-color-picker';
type QRImageType = "jpg" | "png" | "webp"

const transformFrameStyle = (frameStyle: FrameStyle, color: string) : {border: string, borderRadius: string} => {
       
    switch (frameStyle) {
       
        case "square":
            return ({border: `8px solid ${color}`, borderRadius: "8px"});
        case "rounded":
            return ({border: `8px solid ${color}`, borderRadius: "50%"});
        default:
            return  ({border: "none", borderRadius: ""});
    }
}
export function AppQRCode() {
    const [url, setUrl] = useState("https://github.com/gcoro/react-qrcode-logo");
    const [imageType, setImageType] = useState<QRImageType>("jpg");
    const { size, bgColor, fgColor, quiteZone, qrStyle, logo, frameStyle, frameColor } = useQRCodeContext();
    const { getGradientObject } = useColorPicker(bgColor, () => {});
    console.log(getGradientObject(bgColor))
    const ref = useRef<QRCode>(null);
    const handleDownload = (imageType: QRImageType) => {
        ref.current?.download(imageType, "magicqr");
    }
    const qrFrame =  transformFrameStyle(frameStyle, frameColor)
    return (
        <div className="lg:w-2/3 bg-gray-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">QR Code Preview</h2>
            <div className="flex flex-col items-center">
                <div className="bg-opacity-80 rounded-lg overflow-hidden shadow-xl">
                    <QRCode logoImage={logo} logoOpacity={0.3} logoHeight={200} logoWidth={200} logoPadding={0} logoPaddingStyle="circle" removeQrCodeBehindLogo={false} ref={ref} value={url} size={size} bgColor={bgColor} ecLevel={"H"} qrStyle={"squares"} fgColor={fgColor} quietZone={quiteZone} borderColor={frameColor} borderWidth={2} qrShape={frameStyle} />
                </div>
               
                <div className="mt-8 w-full max-w-md">
                    <label className="block mb-2 text-gray-300">QR Code Data (URL or Text)</label>
                    <input type="text" placeholder="https://example.com"
                        onChange={(e) => { setUrl(e.target.value) }}
                        className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" value={url} />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
                    <button onClick={() => {
                        handleDownload(imageType);
                    }} className="cursor-pointer flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors" tabIndex={0} style={{ transform: 'none' }}>
                        <MdOutlineFileDownload /> Download QR Code</button>
                    <div>
                        <select onChange={(e) => { setImageType(e.target.value as QRImageType) }} className="cursor-pointer w-full py-3 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="png">PNG</option>
                            <option value="jpg">JPEG</option>
                            <option value="webp">WEBP</option>
                        </select>
                    </div>
                </div>

            </div>

        </div>

    )
}