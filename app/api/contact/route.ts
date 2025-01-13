import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const firstName = formData.get('firstName') || '';
        const lastName = formData.get('lastName') || '';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';

        if (!firstName && !lastName && !email && !message) {
            console.error("Request body is missing.");
            return NextResponse.json({ message: "Request body is missing." }, { status: 400 });
        }

        // Handle the form data as needed (e.g., save to database, send email, etc.)
        console.log("Form data received:", { firstName, lastName, email, message });

        return NextResponse.json({ message: "Your message has been sent successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
    }
    
}