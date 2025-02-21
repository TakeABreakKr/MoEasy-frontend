import { MeetingDetailPage } from '@/page/meeting/detail';

import * as mainStyle from '../../main.css';

export default async function Page({ params }: { params: Promise<{ ['meeting-id']: string }> }) {
  const resolvedParams = await params;

  return (
    <main className={mainStyle.main}>
      <MeetingDetailPage meetingId={resolvedParams['meeting-id']} />
    </main>
  );
}
