import { NextRequest, NextResponse } from 'next/server';

import { initializeMeetingList } from '@/entities/meeting/api/mock';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const ramdom = Math.random();
  const keyword = req.nextUrl.searchParams.get('keyword');
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    if (!keyword) return NextResponse.json(initializeMeetingList());
    return NextResponse.json(initializeMeetingList().filter((meeting) => meeting.keywords.includes(keyword)));
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
