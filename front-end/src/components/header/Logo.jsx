import Link from "next/link";
import Image from "next/image";

const Logo = ({ size = 30 }) => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="https://res.cloudinary.com/dobwkbnfj/image/upload/v1745063455/Vector_tfywbx.png"
                alt="Kelasor Logo"
                width={size}
                height={size}
                priority
                loading="eager"
                unoptimized={false}
                className="w-[size] h-[size]"
            />

        </Link>
    );
};

export default Logo;
