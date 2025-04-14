import { redirect } from 'next/navigation';

import { MeetingDetailPage } from '@/page/meeting/detail';
import { serverClient } from '@/shared/api/server-client';

import * as mainStyle from '../../main.css';

export default async function Page({ params }: { params: Promise<{ ['meeting-id']: string }> }) {
  const resolvedParams = await params;

  const { data } = await serverClient.GET('/meeting/get', {
    params: {
      query: {
        meetingId: resolvedParams['meeting-id'],
      },
    },
  });
  if (!data?.data) redirect('/meeting');

  return (
    <main className={mainStyle.main}>
      <MeetingDetailPage data={data.data} />
    </main>
  );
}
