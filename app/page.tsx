import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { Logo, Logos } from '@/components/ui/logos';
import Banner from '@/components/ui/banner';

export default async function Home() {
    return (
        <main className="bg-[url('/bg2.svg')] bg-cover bg-center bg-no-repeat relative min-h-screen pl-3 pr-3">
            {/* <div className="circle w-80 h-80 top-[-25%] right-[-25%]"></div>
            <div className="circle w-64 h-64 bottom-[-25%] right-[-25%]"></div> */}
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-brand [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div> */}
            <div className="pt-5 pl-3 mb-4">
                <Logo />
            </div>
            <div className="flex flex-col md:space-y-14">
                <div className="relative flex flex-col justify-center items-center h-auto md:min-h-[85vh] overflow-auto max-h-[90vh] md:max-h-full z-10 mx-auto">
                    <div className="text-brandLight font-light text-center text-xs sm:text-sm md:text-base lg:text-lg">
                        WAFIOS, with our partners invite you to the Second
                        Annual
                    </div>

                    <div className="flex justify-center items-center space-y-1">
                        <Banner />
                    </div>

                    <div className="font-light text-brandLight text-sm sm:text-base md:text-lg leading-loose tracking-wide mb-4 md:mb-6 mt-2 md:mt-4">
                        MAR 20 — MAR 21
                    </div>
                    <div className="flex justify-center items-center w-full max-w-lg">
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
            </div>
        </main>
    );
}
