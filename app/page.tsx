

"use client";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export default function Home() {
    return (
        <div className="relative w-full h-screen">
            <DynamicMap />
        </div>
    );
}