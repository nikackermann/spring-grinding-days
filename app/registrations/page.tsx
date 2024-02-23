import { EventRegistrationList } from '@/components/event-registration-list'
import { sql } from '@vercel/postgres'
import { Suspense } from 'react'

type Registration = {
    id: number
    name: string
    email: string
    company: string
    title: string
    attendance: string
    registered_date: Date
}

export const dynamic = 'force-dynamic'

export default async function Registrations() {
    let result = await sql`SELECT * FROM registrations`
    console.log(result.rows)
    let registrations: Registration[] = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        title: row.title,
        company: row.company,
        attendance: row.attendance,
        registered_date: row.registered_date
    }))

    return (
        <div className="bg-white">
            <div className="flex min-h-screen w-full flex-col px-4 py-6 md:px-6">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold">
                        Spring & Grinding Days
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        All registrations for Spring & Grinding Days
                    </p>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <EventRegistrationList registrations={registrations} />
                </Suspense>
            </div>
        </div>
    )
}
