'use server';

import { revalidatePath, unstable_noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend('re_VpXRBWW8_5uaxGh71GCiZYQ5tDqb5HUtc');

export async function createRegistration(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
        company: z.string().min(1, 'Company is required'),
        attendance: z.enum(['day-one', 'day-two', 'both']),
    });

    const validatedFormData = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        attendance: formData.get('attendance'),
    });

    // return zod form validation errors
    if (!validatedFormData.success) {
        // return the first error message
        return {
            message: validatedFormData.error.issues[0].message,
            email: validatedFormData.error.issues[0].path[0],
        };
    }

    const valid = validatedFormData.data;

    try {
        unstable_noStore();
        // Check if a registration with the given email already exists
        const existingRegistration = await sql`
            SELECT * FROM registrations WHERE email = ${valid.email}
        `;

        if (existingRegistration.rowCount > 0) {
            return {
                message: 'A registration with this email already exists',
                email: 'email',
            };
        }

        const currentDate = new Date().toISOString();

        // Optimistically return a success message
        const optimisticResponse = {
            message: `Registered!`,
            status: 'success',
        };

        // Start the SQL insert but don't await it
        sql`
            INSERT INTO registrations (name, email, company, attendance, registered_date)
            VALUES (${valid.name}, ${valid.email}, ${valid.company}, ${valid.attendance}, ${currentDate})
        `
            .then(() => {
                // If the SQL insert succeeds, revalidate the path
                revalidatePath('/');
            })
            .catch((e) => {
                // If the SQL insert fails, log the error
                console.error(e);
            });

        resend.emails.send({
            from: 'Spring and Grinding Day <event@updates.wafios.online>',
            to: valid.email,
            subject:
                'Welcome to Spring & Grinding Days 2024 - Presented by WAFIOS',
            react: EmailTemplate({
                name: valid.name,
            }) as React.ReactElement,
        });

        return optimisticResponse;
    } catch (e) {
        console.error(e);
        return { message: 'Failed to register' };
    }
}
