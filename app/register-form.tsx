'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createRegistration } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ClockIcon } from '@radix-ui/react-icons';

import dynamic from 'next/dynamic';

const initialState = {
    message: '',
    email: '',
};

function Spinner() {
    return (
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}

// Dynamically import the Success component
const Success = dynamic(() => import('@/components/ui/success'), {
    // This option will make the component get preloaded in the background
    ssr: true, // Add this line
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            aria-label="Register"
            type="submit"
            aria-disabled={pending}
            className="rounded-full h-10 relative flex items-center justify-center bg-brand text-white hover:bg-brand/90 hover:text-white transition-colors duration-200"
        >
            {pending ? <Spinner /> : 'Register'}
        </Button>
    );
}

export function RegisterForm() {
    const [state, formAction] = useFormState(createRegistration, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.status === 'success') {
            formRef.current?.reset();
        }
    }, [state.status]);

    // if (pending) {
    //     return <Loading />;
    // }

    if (state.status === 'success') {
        return (
            <div className="h-12 relative flex justify-center">
                <Success className="absolute" />
            </div>
        );
    }

    return (
        <form ref={formRef} className="w-full " action={formAction}>
            <div className="grid w-full items-center gap-5">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="py-2 w-full rounded-full h-12 text-base"
                    autoComplete="off"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    aria-live="polite"
                    className={`py-2 w-full rounded-full h-12 text-base ${
                        state.email === 'email' ? 'border-red-500' : ''
                    }`}
                    autoComplete="off"
                />
                <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    required
                    className="py-2 w-full rounded-full h-12 text-base"
                    autoComplete="off"
                />
                <Label className="mt-2 ml-2">I will be attending...</Label>
                <RadioGroup
                    defaultValue="both"
                    className="flex flex-col py-2 w-full ml-2 space-y-3"
                    name="attendance"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="day-one"
                            id="day-one"
                            className="h-6 w-6"
                            aria-label="Day 1 - Wednesday"
                            required
                        />
                        <Label htmlFor="option-one">Day 1</Label>
                        <ClockIcon />
                        <span className="text-xs font-light">
                            (9 AM - 5 PM with lunch)
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="day-two"
                            id="day-two"
                            className="h-6 w-6"
                            aria-label="Day 2 - Thursday"
                            required
                        />
                        <Label htmlFor="option-two">Day 2</Label>
                        <ClockIcon />
                        <span className="text-xs font-light">
                            (9 AM - 12 PM no lunch)z
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="both"
                            id="both"
                            className="h-6 w-6"
                            aria-label="Both days"
                            required
                        />
                        <Label htmlFor="option-three">Both</Label>
                    </div>
                </RadioGroup>
                <SubmitButton />
            </div>
        </form>
    );
}
