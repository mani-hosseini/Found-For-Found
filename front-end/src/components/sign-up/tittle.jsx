import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Logo from "@/components/header/Logo";
import Link from "next/link";

export default function TittleSignUp() {
    return (
        <div className={'flex flex-col space-y-6 md:space-y-12 items-center'}>
            <div className="flex relative items-center w-full">
                <button className="w-12 h-12 text-[#644FC1] lg:block hidden">
                    <ArrowLeftIcon className="w-full h-full" />
                </button>
                <h3 className="flex-grow text-center text-[#444] text-xl md:text-4xl">Create Your Personal Account</h3>
            </div>
            <h3 className="flex-grow text-center text-[#644FC1] text-xl md:text-4xl">FOUND-FOR-FOUND</h3>
            <Logo size={60} />
            <button className={'bg-gray-100 text-gray-500 w-[80%] sm:w-[383px] py-2 border border-[#C7C6C6] rounded-md text-sm sm:text-base md:text-lg'}>
                <Link href={'/'}>Continue With Google</Link>
            </button>
            <div className="flex items-center w-[80%] sm:w-[383px]">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-sm sm:text-base text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
        </div>
    );
}
