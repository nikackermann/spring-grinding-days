import Image from 'next/image'
import LogoWhite from '../../public/logo-white.svg'
import LogoIcon from '../../public/logo-icon.svg'
import Logo1 from '@/public/logo1.jpg'
import Logo2 from '@/public/logo2.png'
import Logo3 from '@/public/logo3.jpg'
import Logo4 from '@/public/logo4.jpg'
import Logo5 from '@/public/logo5.png'
import Logo6 from '@/public/logo6.jpg'

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

export function Logo({ className }: any) {
    return (
        <div className="flex justify-center md:justify-start">
            <Image
                src={LogoWhite}
                alt="logo"
                width={120}
                height={80}
                className="mb-3 mt-3 transform transition duration-500 ease-in-out md:hidden" // Show this logo on mobile only
                priority
            />
            <Image
                src={LogoWhite}
                alt="logo"
                width={120}
                height={80}
                className="hidden transform transition duration-500 ease-in-out md:block" // Hide this logo on mobile
                priority
            />
        </div>
    )
}

export function Logos({ className }: any) {
    return (
        <div className="hidden justify-center space-x-6 md:flex">
            {logos.map((logo, index) => (
                <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={60}
                    height={60}
                    priority
                />
            ))}
        </div>
    )
}
