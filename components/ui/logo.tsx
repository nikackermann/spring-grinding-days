'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import LogoBlue from '../../public/logo-blue.svg';
import LogoWhite from '../../public/logo-white.svg';

export function Logo() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center justify-center">
            <Image
                src={theme === 'light' ? LogoBlue : LogoWhite}
                alt="logo"
                layout="fixed"
                placeholder="empty"
            />
        </div>
    );
}
