import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
} from '@react-email/components';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>New Contact Form Submission</Heading>

                    <Section style={section}>
                        <Text style={label}>
                            <strong>Name:</strong> {name}
                        </Text>

                        <Text style={label}>
                            <strong>Email:</strong> {email}
                        </Text>

                        <Text style={label}>
                            <strong>Message:</strong>
                        </Text>

                        <Text style={messageBox}>{message}</Text>
                    </Section>

                    <Text style={footer}>
                        This email was sent from your portfolio contact form.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f6f9fc',
    padding: '20px',
};

const container = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '40px',
};

const heading = {
    color: '#333333',
    fontSize: '24px',
    marginBottom: '20px',
};

const section = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
};

const label = {
    margin: '10px 0',
    color: '#333333',
    fontSize: '14px',
};

const messageBox = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap' as const,
    color: '#333333',
    fontSize: '14px',
    lineHeight: '1.5',
};

const footer = {
    color: '#666666',
    fontSize: '12px',
    marginTop: '20px',
    textAlign: 'center' as const,
};
