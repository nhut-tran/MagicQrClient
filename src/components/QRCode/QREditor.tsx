'use client'
import { ReactNode, useReducer, useState } from "react";
import { AppQRCode } from "./AppQRCode";
import QRCodeCustomization from "./QRCodeCustomization";
import QRCodeContextProvider from "./QRCodeContext";



export default function QREditor(): ReactNode {
   

    return (
        <QRCodeContextProvider>
            <div className="mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-6">Powerfull QR Code Editor</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <AppQRCode />
                    <QRCodeCustomization />
                </div>
            </div>
        </QRCodeContextProvider>

    )
}