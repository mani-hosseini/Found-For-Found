"use client";
import Image from "next/image";
import Link from "next/link";

export default function Carthome() {
    return (
        <div className="flex flex-col h-[460px] items-center justify-around border border-[#644FC1] rounded-lg px-4 py-6 mt-[50px] w-full max-w-[319px] mx-auto sm:px-8 sm:mt-[99px] sm:max-w-[319px]">
            <Image
                src="https://res.cloudinary.com/dkvbdk078/image/upload/v1745059589/Vector5_ogqneh.png"
                alt="profile"
                width={70}
                height={60}
                className="w-[60px] h-auto sm:w-[70px]"
            />
            <div className="flex flex-col justify-center items-center gap-3 mt-4">
                <h2 className="text-[#644FC1] text-[18px] sm:text-[24px] font-bold text-center">
                    Brand or organization
                </h2>
                <span className="text-xs text-center text-[#959595] px-2 sm:px-0">
                    If your brand is established and you are looking for continuous support, get started now.
                </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full mt-6">
                <button className="bg-[#644FC1] hover:bg-[#644FF1] text-white w-full max-w-[259px] py-2 rounded-lg cursor-pointer">
                    Start
                </button>
                <span className="text-[#8D75F7] text-xs cursor-pointer">
                    learn more
                </span>
            </div>
        </div>
    );
}
