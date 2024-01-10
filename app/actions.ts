'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

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
        return { message: validatedFormData.error.issues[0].message };
    }

    const data = validatedFormData.data;

    try {
        // Check if a registration with the given email already exists
        const existingRegistration = await sql`
            SELECT * FROM registrations WHERE email = ${data.email}
        `;

        if (existingRegistration.rowCount > 0) {
            return { message: 'A registration with this email already exists' };
        }

        const currentDate = new Date().toISOString();

        await sql`
            INSERT INTO registrations (name, email, company, attendance, registered_date)
            VALUES (${data.name}, ${data.email}, ${data.company}, ${data.attendance}, ${currentDate})
        `;

        revalidatePath('/');
        return { message: `Registered!` };
    } catch (e) {
        console.error(e);
        return { message: 'Failed to register' };
    }
}
