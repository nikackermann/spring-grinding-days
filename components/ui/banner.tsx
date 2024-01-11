'use client';
import { useTheme } from 'next-themes';

export default function Banner() {
    const { theme } = useTheme();

    const bannerClass =
        theme === 'light'
            ? 'text-3xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-800 bg-opacity-50 p-2'
            : 'text-3xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-2';

    return <h1 className={bannerClass}>Spring & Grinding Days</h1>;
}
