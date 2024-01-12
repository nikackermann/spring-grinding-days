import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from './register-form';
// import { ModeToggle } from '@/components/ui/mode-toggle';
import { Logo } from '@/components/ui/logo';
import Banner from '@/components/ui/banner';
import Image from 'next/image';

export default async function Home() {
    return (
        <main className="h-screen overflow-hidden dark:bg-brand bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative p-2">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
            {/* <ModeToggle /> */}
            <div className="relative flex flex-col justify-start items-center pt-14 md:pt-32 min-h-screen z-10">
                <div className="absolute left-0 top-0 p-2">
                    <Logo />
                </div>
                <div className=" font-light text-center text-xs md:text-lg">
                    WAFIOS, with our partners invite you to the Second Annual
                </div>

                <div className="text-center space-y-1">
                    <Banner />
                </div>

                <div className="font-light text-md md:text-lg leading-loose tracking-wide mb-4 md:mb-6 mt-2 md:mt-4">
                    MAR 20 — MAR 21
                </div>
                <div className="w-full max-w-2xl">
                    <Card className="min-w-full">
                        <CardHeader className="-mt-2">
                            <div className="md:flex hidden space-x-10 justify-center">
                                <Image
                                    src="/logo1.jpg"
                                    alt="Logo 1"
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src="/logo2.png"
                                    alt="Logo 2"
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src="/logo3.jpg"
                                    alt="Logo 3"
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src="/logo4.jpg"
                                    alt="Logo 4"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </CardHeader>
                        {/* <CardHeader>
                            <CardTitle className="text-brand">
                                Join us at our Midwest Technical Center
                            </CardTitle>
                        </CardHeader> */}
                        <CardContent className="">
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
