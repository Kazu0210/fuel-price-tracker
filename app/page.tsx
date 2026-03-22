

"use client";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export default function Home() {
    return (
        <div className="relative w-full h-screen">
            {/* Floating Input Field - Top Center */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full pointer-events-none">
                <input
                    type="text"
                    placeholder="Search location or station..."
                    className="pointer-events-auto bg-white/90 border border-gray-200 rounded-xl shadow-md px-4 py-2 w-[320px] max-w-full focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md text-base"
                />
            </div>
            <DynamicMap />
        </div>
    );
}