'use client';

import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { createRegistration } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Success } from '@/components/ui/success';
import Loading from './loading';

const initialState = {
    message: '',
    email: '',
};

export function RegisterForm() {
    const [state, formAction] = useFormState(createRegistration, initialState);
    const { pending } = useFormStatus();
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.status === 'success') {
            formRef.current?.reset();
            setLoading(false);
        }
    }, [state.status]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        // handle form submission
    };

    if (loading) {
        return <Loading />;
    }

    if (state.status === 'success') {
        return (
            <div className="transition-opacity duration-500 ease-in-out opacity-0 animate-fade-in">
                <Success />
            </div>
        );
    }

    return (
        <form
            ref={formRef}
            className="w-full"
            action={formAction}
            onSubmit={handleSubmit}
        >
            <div className="grid w-full items-center gap-4">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="py-2 w-full rounded-full h-12 text-base border-2 focus-visible:ring-2"
                    autoComplete="off"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    aria-live="polite"
                    className={`py-2 w-full rounded-full h-12 text-base border-2 ${
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
                    className="py-2 w-full rounded-full h-12 text-base border-2"
                    autoComplete="off"
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
                <Button
                    aria-label="Register"
                    type="submit"
                    aria-disabled={pending}
                    className="rounded-full h-10"
                >
                    Register
                </Button>
            </div>
        </form>
    );
}
