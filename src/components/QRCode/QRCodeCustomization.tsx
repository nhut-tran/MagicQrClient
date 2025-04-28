import { useRef, useState } from "react";
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import { HexColorPicker } from "react-colorful";
import { FrameStyle, useQRCodeContext } from "./QRCodeContext";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";
import { MdOutlineFileUpload } from "react-icons/md";



export default function QRCodeCustomization() {
    const { size, bgColor, fgColor, quiteZone,
        frameStyle, frameColor, handleSize,
        handleFgColor, handleBgColor, handleQuiteZone,
        handleLogo, handleFrameStyle, handleFrameColor} = useQRCodeContext();
    const [openColor, setOpenColor] = useState(false);
    const [openFgColor, setFgOpenColor] = useState(false);
    const [openFrameColor, setFrameOpenColor] = useState(false);
    //const { setSolid, setGradient, isGradient } = useColorPicker(bgColor, handleBgColor);
    
    
    const ref = useRef<HTMLInputElement>(null);
    const refColor = useRef<string>("#ffff");
    const refRadian = useRef<string>(`linear-gradient(90deg, ${bgColor} 100%, ${bgColor} 100% , ${bgColor} 100%)`);
    console.log(bgColor, "----", refColor.current)
    // if (isGradient) {
    //     refRadian.current = `linear-gradient(90deg, ${bgColor} 100%, ${bgColor} 100% , ${bgColor} 100%)`
    // } else {
    //     refColor.current = bgColor;
    // }
    refColor.current = bgColor;
    const retrievePathFile = (files: any) => {

        const file = files[0];
        if (file) {
            if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/svg+xml') {
                console.error('Only png and jpg/jpeg allowed.')
            } else {
                const target: any = {};
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = e => {
                    target.name = name;
                    target.value = reader.result;
                    target.logoName = file.name;
                    
                    handleLogo(target.value)
                };
            }
        }
    }
    return (

        <div className="py-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HiMiniAdjustmentsVertical color="purple" />
                Customization
            </h2>
            <div className="space-y-6"><div>
                <h3 className="text-lg font-medium mb-3 text-gray-200">Colors</h3>
                <div className="flex flex-row justify-start items-center mb-5">
                    <label className="block mb-2 text-sm text-gray-300 mr-3">Foreground Color</label>
                    <div className="relative">
                        <div onClick={(e) => {
                            e.stopPropagation();
                            setFgOpenColor(prev => !prev)
                        }} className="w-full h-10 rounded-lg cursor-pointer border border-gray-600 flex items-center justify-between px-3" style={{ backgroundColor: '#ffffff' }}>
                            <span className="text-xs">'#ffffff'</span>

                        </div>
                        <div className="absolute z-10 mt-2">
                            {openFgColor && <HexColorPicker color={fgColor} onChange={handleFgColor} />}
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-gray-300">Background Color</label>
                            <div className="flex items-center gap-2">
                                <button onClick={() => {
                                    // isGradient ? setSolid(refColor.current) : setGradient(refRadian.current)
                                }} className="cursor-pointer px-2 py-1 text-xs rounded bg-gray-600">{"Solid"}</button>
                                <div onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenColor(prev => !prev);
                                }} className="w-6 h-6 rounded cursor-pointer border border-gray-600" style={{ backgroundColor: bgColor }}>
                                </div>

                            </div>
                        </div>
                        {openColor && <div className="mt-2 p-2 justify-center items-center bg-gray-700 rounded-lg">
                            <ColorPicker value={bgColor} onChange={handleBgColor} />
                        </div>}
                    </div>
                </div>
            </div>
                <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-200">Size</h3>
                    <label className="block mb-2 text-sm text-gray-300">QR Code Size: {size} px</label>
                    <input type="range" min="100" max="400" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" value={size} onChange={(e) => { handleSize(+e.target.value) }} />
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-200">Padding</h3>
                    <label className="block mb-2 text-sm text-gray-300">QR Code Padding: {quiteZone} px</label>
                    <input type="range" min="0" max="100" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" value={quiteZone} onChange={(e) => { handleQuiteZone(+e.target.value) }} />
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-200">Frame</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Frame Style</label>
                            <select onChange={(e) => {handleFrameStyle(e.target.value as FrameStyle)}} className="cursor-pointer w-full py-2 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="none">None</option>
                                <option value="square">Square</option>
                                <option value="rounded">Rounded</option>
                                <option value="circle">Circle</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Frame Color</label>
                            <div className="relative">
                                <div onClick={() => setFrameOpenColor(prev => !prev)} className="w-full h-10 rounded-lg cursor-pointer border border-gray-600 flex items-center justify-between px-3" style={{ backgroundColor: frameColor }}>
                                    <span className="text-xs">{frameColor}</span>
                                </div>
                                <div className="absolute z-10 mt-2">
                            {openFrameColor && <HexColorPicker color={frameColor} onChange={handleFrameColor} />}
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-200">Logo</h3>
                    <div className="flex items-center mb-4">
                        <input ref={ref} onChange={e => retrievePathFile((e.target as HTMLInputElement).files)} type="file" accept="image/*" className="hidden" />
                        <button onClick={() => { ref.current?.click() }} className="cursor-pointer flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                            <MdOutlineFileUpload />
                            Upload Logo
                        </button>
                        <button onClick={() => {
                            {
                                if (ref.current) {
                                    ref.current.value = "";
                                    handleLogo("");
                                }
                            }
                        }} className="ml-2 text-red-400 hover:text-red-300 text-sm">Remove</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-200">Additional Options</h3>
                    <div className="space-y-3">
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Error Correction Level</label>
                            <select className="w-full py-2 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="L">Low (7%)</option><option value="M">Medium (15%)</option>
                                <option value="Q">Quartile (25%)</option>
                                <option value="H">High (30%)</option>
                            </select>
                            <p className="text-xs text-gray-400 mt-1">Higher levels allow for more damage to the QR code while remaining scannable.</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="includeMargin" className="w-4 h-4 accent-purple-500" />
                            <label className="ml-2 text-sm text-gray-300">Include Margin (Quiet Zone)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}