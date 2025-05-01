import { redirect } from 'next/navigation';

import { getMeeting } from '@/entities/meeting/api/server';
import { MeetingDetailPage } from '@/page/meeting/detail';

import * as mainStyle from '../../main.css';

export default async function Page({ params }: { params: Promise<{ ['meeting-id']: string }> }) {
  const resolvedParams = await params;

  const meetingId = resolvedParams['meeting-id'];
  const data = await getMeeting(meetingId);
  if (!data) redirect('/meeting');

  return (
    <main className={mainStyle.main}>
      <MeetingDetailPage data={data} meetingId={meetingId} />
    </main>
  );
}
