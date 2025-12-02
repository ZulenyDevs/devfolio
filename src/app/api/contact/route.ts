import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate email HTML
        const emailHtml = EmailTemplate({ name, email, message });

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // You'll need to update this with your verified domain
            to: process.env.TO_EMAIL || 'devfolio@gmail.com',
            replyTo: email,
            subject: `New Portfolio Contact from ${name}`,
            react: emailHtml,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
