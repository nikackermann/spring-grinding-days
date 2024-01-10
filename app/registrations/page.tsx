import { EventRegistrationList } from '@/components/event-registration-list';
import { sql } from '@vercel/postgres';

type Registration = {
    id: number;
    name: string;
    email: string;
    company: string;
    attendance: string;
    registered_date: Date;
};

export const dynamic = 'force-dynamic';

export default async function Registrations() {
    let result = await sql`SELECT * FROM registrations`;
    console.log(result.rows);
    let registrations: Registration[] = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        company: row.company,
        attendance: row.attendance,
        registered_date: row.registered_date,
    }));

    console.log(registrations);

    return (
        <div>
            <EventRegistrationList registrations={registrations} />
        </div>
    );
}
