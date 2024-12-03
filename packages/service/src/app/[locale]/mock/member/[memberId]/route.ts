import { NextRequest, NextResponse } from 'next/server';

import { initializeMember } from '@/entities/member/api/mock';
import { isIdValid } from '@/widget/meeting/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(_: NextRequest, { params }: { params: { memberId: string } }) {
  const memberId = params.memberId;
  const ramdom = Math.random();
  if (ramdom < 0.5) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  try {
    if (isIdValid(memberId)) {
      const validMember = initializeMember(memberId);
      if (validMember) return NextResponse.json(validMember);
    }
    return NextResponse.json({ error: 'Invalid Id Sended' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
