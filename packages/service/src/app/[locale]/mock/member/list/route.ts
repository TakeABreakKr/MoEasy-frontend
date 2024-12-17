import { NextRequest, NextResponse } from 'next/server';

import { mockmembers } from '@/entities/member/api/mock';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(_: NextRequest) {
  const ramdom = Math.random();
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    return NextResponse.json(mockmembers);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
