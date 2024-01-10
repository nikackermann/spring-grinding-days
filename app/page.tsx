import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { ModeToggle } from '@/components/ui/mode-toggle';
import picture from '../public/logo-white.svg';

export default function Home() {
    return (
        <main className="h-screen overflow-hidden dark:bg-black bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.08] relative p-2">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>

            <div className="relative flex flex-col justify-start items-center pt-10 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-48 min-h-screen z-10">
                <div className="text-center space-y-1">
                    <div className="flex items-center justify-center">
                        <Image
                            src={picture}
                            alt="logo"
                            layout="fixed"
                            placeholder="empty"
                        />
                    </div>
                    <h1 className="text-3xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-2">
                        Spring & Grinding Days
                    </h1>
                    {/* <h3 className="max-w-2xl text-neutral-400 hidden md:block">
                        {`Join us for daily presentations at 11 AM and 3 PM,
                            where we'll showcase the latest advancements in
                            spring grinding and wire forming technology.`}
                    </h3> */}
                </div>
                <div className="font-extralight text-neutral-500 leading-loose tracking-wide mb-4 mt-2">
                    20 MARCH — 21 MARCH
                </div>
                <div className="w-full max-w-2xl">
                    <Card className="w-full">
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
                {/* <footer className="absolute bottom-0 w-full text-center py-4 text-neutral-400 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Wafios (WMC). All rights
                    reserved.
                </footer> */}
            </div>
        </main>
    );
}
