"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function WelcomePage() {
    const router = useRouter();

    useEffect(() => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';
        
        return () => {
            if (header) header.style.display = '';
            if (footer) footer.style.display = '';
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#644FC1] mb-8">
                    Welcome to 3f
                </h1>
                
                <div className="relative w-64 h-64 mx-auto mb-8">
                    <Image
                        src="/happy-purple.png"
                        alt="Happy Illustration"
                        fill
                        className="object-contain"
                    />
                </div>

                <h2 className="text-4xl font-bold text-[#644FC1] mb-8">
                    Your journey being ready to start
                </h2>

                <div className="flex space-x-4 justify-center">
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-3 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4] w-40"
                    >
                        Go Homepage
                    </button>
                    <button
                        onClick={() => router.push("/explore")}
                        className="px-6 py-3 bg-[#644FC1] text-white rounded-md hover:bg-[#5c3ec4] w-40"
                    >
                        Start Project
                    </button>
                </div>
            </div>
        </div>
    );
} 