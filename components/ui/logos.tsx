import Image from 'next/image';
import LogoBlue from '../../public/logo-blue.svg';
import Logo1 from '@/public/logo1.jpg';
import Logo2 from '@/public/logo2.png';
import Logo3 from '@/public/logo3.jpg';
import Logo4 from '@/public/logo4.jpg';
import Logo5 from '@/public/logo5.png';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

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

export function Logos() {
    return (
        <div className="md:flex hidden space-x-10 justify-center">
            {logos.map((logo, index) => (
                <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={62}
                    height={62}
                    priority
                />
            ))}
        </div>
    );
}
