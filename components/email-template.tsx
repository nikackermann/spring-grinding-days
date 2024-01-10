import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

type Props = {
    name: string;
};

export const EmailTemplate = ({ name }: Props) => (
    <Html>
        <Head />
        <Preview>Welcome to Spring & Grinding Days 2024</Preview>
        <Body>
            <Container></Container>
        </Body>
    </Html>
);

export default EmailTemplate;
