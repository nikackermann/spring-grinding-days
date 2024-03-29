'use server'

import { revalidatePath, unstable_noStore } from 'next/cache'
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function createRegistration(prevState: any, formData: FormData) {
    console.log(formData)
    const schema = z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
        company: z.string().min(1, 'Company is required'),
        title: z.string().min(1, 'Title is required'),
        attendance: z.enum(['day-one', 'day-two', 'both'])
        // phone: z.string().min(1, 'Phone is required')
    })

    const validatedFormData = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        title: formData.get('title'),
        attendance: formData.get('attendance')
    })

    // return zod form validation errors
    if (!validatedFormData.success) {
        // return the first error message
        console.error(validatedFormData.error)
        return {
            message: validatedFormData.error.issues[0].message,
            email: validatedFormData.error.issues[0].path[0]
        }
    }

    const valid = validatedFormData.data

    try {
        unstable_noStore()
        // Check if a registration with the given email already exists
        const existingRegistration = await sql`
            SELECT * FROM registrations WHERE email = ${valid.email}
        `

        if (existingRegistration.rowCount > 0) {
            return {
                message: 'A registration with this email already exists',
                email: 'email'
            }
        }

        const currentDate = new Date().toISOString()
        console.log(valid)

        await sql`
            INSERT INTO registrations (name, email, company, title, attendance, registered_date)
            VALUES (${valid.name}, ${valid.email}, ${valid.company}, ${valid.title}, ${valid.attendance}, ${currentDate})
        `

        resend.emails.send({
            from: 'Spring and Grinding Day <event@updates.wafios.online>',
            to: valid.email,
            subject:
                'Welcome to Spring & Grinding Days 2024 - Presented by WAFIOS',
            react: EmailTemplate({
                name: valid.name
            }) as React.ReactElement
        })

        revalidatePath('/')
        return { message: `Registered!`, status: 'success' }
    } catch (e) {
        console.error(e)
        return { message: 'Failed to register' }
    }
}
