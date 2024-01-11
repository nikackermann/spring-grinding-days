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
        <Preview>
            {`We're excited to have you at Spring & Grinding Days 2024. Here are some details about the event`}
        </Preview>
        <Body>
            <Container>
                <Section>
                    <Img
                        src="https://sagd.wafios.online/static/logo.png"
                        width="160"
                        height="31"
                        alt="Wafios"
                    />
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
                        We have partnered with Even Hotel Chicago-Tinley
                        Park-Conv Ctr, an IHG Hotel located at 18501 Convention
                        Center Dr, Tinley Park, IL 60477 to provide discounted
                        rates for attendees. You can book a room by:
                    </Text>
                    <Text>
                        - Calling the front desk at 708-444-1100 and referencing
                        the Wafios - Midwest Technical Center, or group code WAF
                    </Text>
                    <Text>
                        - Going on their website{' '}
                        <Link href="http://www.evenhotels.com/chitinleypark">
                            http://www.evenhotels.com/chitinleypark
                        </Link>
                        , entering their stay dates & group code WAF
                    </Text>
                    <Text>
                        Link:{' '}
                        <Link href="http://www.evenhotels.com/chitinleypark">
                            Wafios - Midwest Technical Center
                        </Link>
                    </Text>
                    <Hr />
                    <Heading>Contact Information</Heading>
                    <Text>
                        If you have any questions, please feel free to reach
                        out:
                    </Text>
                    <Text>
                        <strong>Name:</strong> Brian Davi
                    </Text>
                    <Text>
                        <strong>Email:</strong>{' '}
                        <Link href="mailto:BrianD@wafios.us">
                            BrianD@wafios.us
                        </Link>
                    </Text>
                    <Text>
                        <strong>Phone:</strong> 203-871-2072
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplate;
