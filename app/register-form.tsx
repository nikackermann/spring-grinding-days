'use client';

import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createRegistration } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const initialState = {
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            aria-label="Register"
            type="submit"
            aria-disabled={pending}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block"
        >
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 text-base">
                <span>Register</span>
                <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 24 24"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
    );
}

export function RegisterForm() {
    const [state, formAction] = useFormState(createRegistration, initialState);

    return (
        <form action={formAction} className="w-full">
            <div className="grid w-full items-center gap-4">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="py-2 w-full rounded-full h-12 text-base border-2 focus-visible:ring-2"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="py-2 w-full rounded-full h-12 text-base border-2"
                />
                <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    required
                    className="py-2 w-full rounded-full h-12 text-base border-2"
                />
                <RadioGroup
                    defaultValue="both"
                    className="py-2 w-full space-y-2 ml-4"
                    name="attendance"
                >
                    <Label>I will be attending... </Label>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="day-one"
                            id="day-one"
                            className="h-6 w-6"
                            aria-label="Day 1 - Wednesday"
                            required
                        />
                        <Label htmlFor="option-one">Day 1 - March 20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="day-two"
                            id="day-two"
                            className="h-6 w-6"
                            aria-label="Day 2 - Thursday"
                            required
                        />
                        <Label htmlFor="option-two">Day 2 - March 21</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="both"
                            id="both"
                            className="h-6 w-6"
                            aria-label="Both days"
                            required
                        />
                        <Label htmlFor="option-three">Both days</Label>
                    </div>
                </RadioGroup>
                <SubmitButton />
            </div>
            <p aria-live="polite">{state?.message}</p>
        </form>
    );
}
