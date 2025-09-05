import { NextResponse } from "next/server";
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request:Request){
    try{
        const{name, email,company, subject,message} = await request.json();
        const{data,error} = await resend.emails.send({
            from:'Sunleaf Contact Form <onboarding@resend.dev>',
            to:['sunleafsystem2025@gmail.com'],
            subject:`New Message from Sunleaf Contact Form: ${subject}`,
            replyTo:email,
            html:`
            <h1> New Contact From Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Name:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <hr>
            <h2>Message:</h2>
            <p>${message}</p>
            `
        });
            // If there's an error, return an error response
        if(error){
            return NextResponse.json({error:error.message}, {status:500})
        }

        //if successfull
        return NextResponse.json({ message: 'Email sent successfully!', data });
    }catch(error){
            // Catch any other errors
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
    }
}