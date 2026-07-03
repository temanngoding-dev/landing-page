import { NextResponse } from 'next/server';

// Gunakan environment variable untuk URL Apps Script
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function GET() {
  try {
    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ success: true, data: [] });
    }

    // Fetch data dari Google Sheets (menjalankan doGet di Apps Script)
    const res = await fetch(GOOGLE_SCRIPT_URL);
    const data = await res.json();

    return NextResponse.json({ success: true, data: data.data || [] });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    if (!GOOGLE_SCRIPT_URL) {
      // Kita hanya log di internal server, tidak dikembalikan ke frontend
      console.error('SYSTEM WARNING: GOOGLE_SCRIPT_URL is missing. Check .env config.');
      return NextResponse.json({ error: 'Layanan sedang tidak tersedia. Silakan coba lagi nanti.' }, { status: 500 });
    }

    // Forward request ke Google Apps Script (menjalankan doPost di Apps Script)
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain', // Menggunakan text/plain untuk menghindari CORS preflight di Apps Script
      },
      body: JSON.stringify({ phone }),
    });

    const data = await res.json();

    if (data.exists) {
      return NextResponse.json({ error: 'Phone number already exists', exists: true }, { status: 409 });
    }

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Lead saved successfully' });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
