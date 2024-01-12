import Image from 'next/image';
import LogoBlue from '../../public/logo-blue.svg';

export function Logo() {
    return (
        <div className="flex items-center justify-center">
            <Image
                src="/logo-icon.svg"
                alt="logo"
                width={150}
                height={150}
                className="w-auto md:hidden transition duration-500 ease-in-out transform" // Show this logo on mobile only
                priority
            />
            <Image
                src={LogoBlue}
                alt="logo"
                height={100}
                className="hidden w-auto md:block transition duration-500 ease-in-out transform" // Hide this logo on mobile
                priority
            />
        </div>
    );
}
