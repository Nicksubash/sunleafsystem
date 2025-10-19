import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Validate environment variable
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        const { name, email, company, subject, message } = await request.json();
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        console.log('Sending email with data:', { name, email, company, subject });

        // Try with your domain first, fallback to Resend's domain if not verified
        const senderEmail = process.env.RESEND_FROM_EMAIL || 'Sunleaf Contact Form <noreply@sunleafsystem.com.np>';
        
        const { data, error } = await resend.emails.send({
            from: senderEmail,
            to: ['sunleafsystem2025@gmail.com'],
            subject: `New Message from Sunleaf Contact Form: ${subject}`,
            replyTo: email,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h1>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <div style="margin: 20px 0;">
                        <h2 style="color: #374151;">Message:</h2>
                        <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                        </div>
                    </div>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                    <p style="color: #6b7280; font-size: 14px;">
                        This message was sent from the Sunleaf System contact form.
                    </p>
                </div>
            `
        });

        // If there's an error, return an error response
        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ message: 'Email sent successfully!', data });
        
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}