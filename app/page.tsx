import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { Logo, Logos } from '@/components/ui/logos';
import Banner from '@/components/ui/banner';

export default async function Home() {
    return (
        <main className="dark:bg-brand bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative p-2">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
            <div className="mx-auto md:absolute md:left-0 md:top-0 p-4">
                <Logo />
            </div>
            <div className="relative flex flex-col justify-start items-center pt-4 md:pt-20 min-h-screen z-10">
                <div className=" font-light text-center text-xs md:text-lg">
                    WAFIOS, with our partners invite you to the Second Annual
                </div>

                <div className="text-center space-y-1">
                    <Banner />
                </div>

                <div className="font-light text-md md:text-lg leading-loose tracking-wide mb-4 md:mb-6 mt-2 md:mt-4">
                    MAR 20 — MAR 21
                </div>
                <div className="w-full max-w-lg">
                    <Card className="min-w-full">
                        <CardHeader className="-mt-5 md:mt-1">
                            <Logos />
                        </CardHeader>
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
