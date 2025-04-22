import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Logo from "@/components/header/Logo";
import Link from "next/link";

export default function TittleHead({ title, subtitle }) {
    return (
        <div className={'flex flex-col space-y-6 md:space-y-12 items-center'}>
            <div className="flex relative items-center w-full">
                <h3 className="flex-grow text-center text-[#444] text-xl md:text-4xl">{title}</h3>
            </div>
            <h3 className="flex-grow text-center text-[#644FC1] text-xl md:text-4xl">{subtitle}</h3>
            <Logo size={60} />
        </div>
    );
} 