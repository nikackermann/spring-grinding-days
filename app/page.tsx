import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { MovingBorder } from '@/components/ui/moving-border';

export default function Home() {
    return (
        <main className="h-screen overflow-auto dark:bg-black bg-white dark:bg-grid-white/[0.12] bg-grid-black/[0.12] relative p-2">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>

            <div className="relative flex flex-col justify-start items-center pt-10 sm:pt-20 md:pt-32 lg:pt-40 xl:pt-48 min-h-screen z-10">
                <div className="text-center space-y-2 mb-6">
                    <div className="flex justify-center items-center">
                        <span>
                            <Image
                                src="/logo-white.svg"
                                alt="logo"
                                width={130}
                                height={50}
                            />
                        </span>
                        {/* <h3 className="ml-2">Presents</h3> */}
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-2">
                            Spring & Grinding Days
                        </h1>
                    </div>
                    <div className="font-light text-sm text-neutral-400">
                        March 20th, 2024 - March 21st, 2024
                    </div>
                </div>

                <div className="w-full max-w-2xl">
                    <Card className="w-full">
                        {/* <CardHeader>
                            <CardTitle>
                                Join Us at Spring & Grinding Days!
                            </CardTitle>
                        </CardHeader> */}
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
