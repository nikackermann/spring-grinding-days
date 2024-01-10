'use client';

import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createUser } from '@/app/actions';
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
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
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
    const [state, formAction] = useFormState(createUser, initialState);

    return (
        <form className="w-full">
            <div className="grid w-full items-center gap-4">
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    className="py-2 w-full rounded-full h-12 text-base"
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="py-2 w-full rounded-full h-12 text-base"
                />
                <Input
                    type="text"
                    id="company"
                    placeholder="Company"
                    required
                    className="py-2 w-full rounded-full h-12 text-base"
                />
                <RadioGroup
                    defaultValue="option-one"
                    className="py-2 w-full space-y-2"
                >
                    <Label>I will be attending... </Label>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="option-one"
                            id="option-one"
                            className="h-5 w-5"
                        />
                        <Label htmlFor="option-one">Day 1 - Wednesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="option-two"
                            id="option-two"
                            className="h-5 w-5"
                        />
                        <Label htmlFor="option-two">Day 2 - Thursday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="option-three"
                            id="option-three"
                            className="h-5 w-5"
                        />
                        <Label htmlFor="option-three">Both days</Label>
                    </div>
                </RadioGroup>
                <SubmitButton />
            </div>
        </form>
    );
}
