import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    if (!firstName || !lastName || !email || !message) {
      console.error('Request body is missing required fields.');
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 },
      );
    }

    console.log('Form data received:', { firstName, lastName, email, message });

    // Ensure email is a string
    const senderEmail = typeof email === 'string' ? email : '';

    if (!senderEmail) {
      console.error('Invalid email format.');
      return NextResponse.json(
        { message: 'Invalid email format.' },
        { status: 400 },
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider or SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email details
    const mailOptions = {
      from: senderEmail, // Use the sender's email address
      to: process.env.EMAIL_USER, // Recipient email address
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `You have received a new message from your contact form:
            Name: ${firstName} ${lastName}
            Email: ${email}
            Message:${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully.');
    return NextResponse.json(
      { message: 'Your message has been sent successfully.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error occurred:', error);

    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      return NextResponse.json(
        { message: 'Something went wrong. Please try again.', error: error.message },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { message: 'An unknown error occurred.' },
        { status: 500 },
      );
    }
  }
}