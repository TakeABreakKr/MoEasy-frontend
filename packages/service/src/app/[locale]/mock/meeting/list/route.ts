import { NextRequest, NextResponse } from 'next/server';

import { initializeMeetingList } from '@/entities/meeting/api/mock';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const ramdom = Math.random();
  const { keyword, name, code } = Object.fromEntries(req.nextUrl.searchParams);
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    if (!keyword && !name && !code) return NextResponse.json(initializeMeetingList());
    return NextResponse.json(
      initializeMeetingList().filter((meeting) => {
        const keywordIncludes = !keyword || meeting.keywords.includes(keyword);
        const nameIncludes = !name || meeting.name.includes(name);
        const codeIncludes = !code || meeting.meetingId === code;
        return keywordIncludes && nameIncludes && codeIncludes;
      }),
    );
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
