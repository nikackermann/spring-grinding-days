import { Html, Heading, Text } from '@react-email/components';

const EmailTemplate = ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    return (
        <Html lang="en">
            <Heading as="h1">Test Registration Confirmation Email</Heading>
            <Text>
                Thank you for registering for Wafios Spring & Grinding Days
            </Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
        </Html>
    );
};
export default EmailTemplate;
