"use client";
import Image from "next/image";
import Link from "next/link";

export default function Description() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-[#270F94] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-center">
                Create your profile and take the first step towards new opportunities
            </h1>
            <p className="text-[#717171] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-justify lg:text-center max-w-[900px] mt-6">
                By creating your account, you all gain access to a thriving community
                where brands and individuals are committed to offering you ongoing
                support. This support network will empower you with the resources,
                guidance, and connections you need to succeed, ensuring that you’re
                never alone on your journey.
            </p>
        </div>
    );
}
