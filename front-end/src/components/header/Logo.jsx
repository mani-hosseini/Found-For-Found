import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="https://res.cloudinary.com/dobwkbnfj/image/upload/v1745063455/Vector_tfywbx.png"
                alt="Kelasor Logo"
                width={40}
                height={40}
                priority
                loading="eager"
                unoptimized={false}
                className="w-auto h-10"
            />
        </Link>
    );
};

export default Logo;