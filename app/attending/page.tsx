import { EventRegistrationList } from '@/components/event-registration-list';

const attendees = [
    { name: 'John Doe', company: 'Company A' },
    { name: 'Jane Smith', company: 'Company B' },
    // Add more attendees as needed
];

export default function Attending() {
    return (
        <div>
            <EventRegistrationList />
        </div>
    );
}
