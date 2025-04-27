import TittleHead from "./TittleHead";
import Link from "next/link";

export default function Google() {
    return (
        <div className={'flex flex-col space-y-6 md:space-y-12 items-center'}>
            <TittleHead
                title="Create Your Personal Account"
                subtitle="FOUND-FOR-FOUND"
            />
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
