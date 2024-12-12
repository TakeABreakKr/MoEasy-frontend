import { NextRequest, NextResponse } from 'next/server';

import { initializeMeeting } from '@/entities/meeting/api/mock';
import { isIdValid } from '@/widget/meeting/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(_: NextRequest, { params }: { params: { meetingId: string } }) {
  const meetingId = params.meetingId;
  const ramdom = Math.random();
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    if (isIdValid(meetingId)) {
      const parsedId = Number(meetingId.slice(2));
      return NextResponse.json(initializeMeeting(parsedId));
    }
    return NextResponse.json({ error: 'Invalid Id Sended' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
