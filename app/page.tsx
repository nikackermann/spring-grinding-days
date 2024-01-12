import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { Logo, Logos } from '@/components/ui/logos';
import Banner from '@/components/ui/banner';

export default async function Home() {
    return (
        <main className="bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat relative min-h-screen pl-3 pr-3">
            {/* <div className="circle w-80 h-80 top-[-25%] right-[-25%]"></div>
            <div className="circle w-64 h-64 bottom-[-25%] right-[-25%]"></div> */}
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-brand [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div> */}
            <div className="mx-auto md:absolute md:left-0 md:top-0 p-4">
                <Logo />
            </div>
            <div className="relative flex flex-col justify-start items-center pt-4 md:pt-20 min-h-screen z-10">
                <div className="text-brandLight font-light text-center text-xs md:text-lg">
                    WAFIOS, with our partners invite you to the Second Annual
                </div>

                <div className="text-center space-y-1">
                    <Banner />
                </div>

                <div className="font-light text-brandLight text-md md:text-lg leading-loose tracking-wide mb-4 md:mb-6 mt-2 md:mt-4">
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
