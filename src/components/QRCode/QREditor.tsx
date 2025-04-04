'use client'
import { ReactNode, useReducer, useState } from "react";
import { AppQRCode } from "./AppQRCode";
import QRCodeCustomization from "./QRCodeCustomization";
import QRCodeContextProvider from "./QRCodeContext";



export default function QREditor(): ReactNode {
   

    return (
        <QRCodeContextProvider>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    <AppQRCode />
                    <QRCodeCustomization />
                </div>
            </div>
        </QRCodeContextProvider>

    )
}