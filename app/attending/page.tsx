const attendees = [
    { name: 'John Doe', company: 'Company A' },
    { name: 'Jane Smith', company: 'Company B' },
    // Add more attendees as needed
];

export default function Attending() {
    return (
        <div>
            <h1>Attendees</h1>
            <ul>
                {attendees.map((attendee, index) => (
                    <li key={index}>
                        {attendee.name} from {attendee.company}
                    </li>
                ))}
            </ul>
        </div>
    );
}
