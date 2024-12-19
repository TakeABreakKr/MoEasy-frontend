import { NextRequest, NextResponse } from 'next/server';

import { mockmembers } from '@/entities/member/api/mock';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const ramdom = Math.random();
  const { name, code } = Object.fromEntries(req.nextUrl.searchParams);
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    return NextResponse.json(
      mockmembers.filter((member) => {
        const nameIncludes = !name || member.username.includes(name);
        const codeIncludes = !code || member.memberId === code;
        return nameIncludes && codeIncludes;
      }),
    );
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
