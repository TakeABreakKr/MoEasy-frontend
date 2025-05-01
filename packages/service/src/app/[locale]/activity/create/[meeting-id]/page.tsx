import ActivityCreatePage from '@/page/activity';

export default async function Page({ params }: { params: Promise<{ ['meeting-id']: string }> }) {
  const resolvedParams = await params;
  return <ActivityCreatePage meetingId={resolvedParams['meeting-id']} />;
}
