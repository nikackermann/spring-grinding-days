'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RegisterForm } from './register-form'
import { Logo, Logos } from '@/components/ui/logos'
import Banner from '@/components/ui/banner'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[url('/bg2.svg')] bg-cover bg-center bg-no-repeat">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)] dark:bg-black"></div>
            <div className="md: p-5 md:pl-10 md:pt-8">
                <Logo />
            </div>
            <motion.div
                className="flex flex-col md:space-y-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="relative z-10 mx-auto flex h-auto w-full flex-col items-center justify-center overflow-auto md:max-h-full md:min-h-[85vh] md:space-y-4"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    <div className="">
                        <div className="text-center text-xs font-light text-brandLight md:text-base lg:text-lg">
                            WAFIOS, with our partners invite you to the Second
                            Annual
                        </div>
                        <div className="flex items-center justify-center">
                            <Banner />
                        </div>
                    </div>

                    <div className="pb-6 pt-4 text-sm font-light leading-loose tracking-wide text-brandLight sm:text-base md:mb-6 md:mt-4 md:text-lg">
                        MAR 20 — MAR 21
                    </div>
                    <div className="flex w-full max-w-lg items-center justify-center pl-4 pr-4 md:max-w-xl">
                        <Card className="w-full">
                            <CardHeader className="-mt-5 md:mt-1">
                                <Logos />
                            </CardHeader>
                            <CardContent>
                                <RegisterForm />
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    )
}
