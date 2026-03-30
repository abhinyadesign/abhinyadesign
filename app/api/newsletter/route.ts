import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required.' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if duplicate
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: 'Email already subscribed.' },
        { status: 200 } // Return 200 so UI shows success visually
      );
    }

    const newSubscriber = await Newsletter.create({ email });

    return NextResponse.json(
      { message: 'Subscribed successfully.', subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving newsletter:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
