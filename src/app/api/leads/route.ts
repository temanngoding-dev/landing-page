import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');
    
    // Ensure the directory exists
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });

    let leads = [];
    try {
      const fileData = await fs.readFile(dataFilePath, 'utf-8');
      if (fileData) {
        leads = JSON.parse(fileData);
      }
    } catch (error: any) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    const newLead = {
      phone,
      timestamp: new Date().toISOString(),
    };

    leads.push(newLead);

    await fs.writeFile(dataFilePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, message: 'Lead saved successfully' });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
