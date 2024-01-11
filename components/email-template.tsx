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
            <Container>
                <Section>
                    <Img
                        src="https://sagd.wafios.online/static/logo.png"
                        width="160"
                        height="31"
                        alt="Wafios"
                    />
                    <Text>{`${baseUrl}/static/logo.png`}</Text>
                </Section>
                <Section>
                    <Heading>Hello, {name}!</Heading>
                    <Text>
                        {`We're excited to have you at Spring & Grinding Days
                        2024. Here are some details about the event`}
                    </Text>
                    <Hr />
                    <Text>Date — March 20 to 21, 2024</Text>
                    <Text>Location — Wafios Midwest Technical Center</Text>
                    <Hr />
                    <Heading>Getting There</Heading>
                    <Text>
                        {`The event is located at 9830 190th St, Unit D Mokena, IL
                        60448. You can get there by car, bus, or train. The
                        nearest train station is Mokena Station, which is a
                        short 10-minute drive from the event location. If you're
                        driving, there is ample parking available at the venue.`}
                    </Text>
                    <Hr />
                    <Heading>Hotel Information</Heading>
                    <Text>
                        We have partnered with Hotel XYZ to provide discounted
                        rates for attendees. You can book a room on their
                        website.
                    </Text>
                    <Hr />
                    <Heading>Contact Information</Heading>
                    <Text>
                        If you have any questions, please contact us at
                        info@example.com or call us at (123) 456-7890.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplate;
