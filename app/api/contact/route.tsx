import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Initialize Google Sheets API with null checks
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const sheetsId = process.env.GOOGLE_SHEETS_ID;

        if (!privateKey || !clientEmail || !sheetsId) {
            throw new Error('Missing required environment variables for Google Sheets API');
        }

        const auth = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        });

        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: sheetsId,
            range: "Sheet1",
            valueInputOption: "RAW",
            requestBody: {
                values: [[name, email, subject, message || ""]],
            },
        });


        console.log('Message received:', body);
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}