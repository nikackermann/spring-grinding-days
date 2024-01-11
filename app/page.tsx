import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from './register-form';
// import { ModeToggle } from '@/components/ui/mode-toggle';
import { Logo } from '@/components/ui/logo';
import Banner from '@/components/ui/banner';

export default async function Home() {
    return (
        <main className="h-screen overflow-hidden dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative p-2">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
            {/* <ModeToggle /> */}
            <div className="relative flex flex-col justify-start items-center pt-6 md:pt-24 min-h-screen z-10">
                <Logo />
                <div className="text-center space-y-1">
                    <Banner />
                    {/* <h3 className="max-w-2xl text-neutral-400 hidden md:block">
                        {`Join us for daily presentations at 11 AM and 3 PM,
                            where we'll showcase the latest advancements in
                            spring grinding and wire forming technology.`}
                    </h3> */}
                </div>
                <div className="font-light text-md md:text-lg text-neutral-500 leading-loose tracking-wide mb-4 md:mb-8 mt-2 md:mt-6">
                    MAR 20 — MAR 21
                </div>
                <div className="w-full max-w-2xl">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>
                                Join us at our Midwest Technical Center
                            </CardTitle>
                        </CardHeader>
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
