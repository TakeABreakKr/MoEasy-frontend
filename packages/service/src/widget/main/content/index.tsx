import { getScopedI18n } from '@/locales/server';
import { serverClient } from '@/shared/api/server-client';
import { MainCardActivitySection } from '@/widget/main/section/activity';
import { MainCategorySection } from '@/widget/main/section/category';
import { MainLastSection } from '@/widget/main/section/last';
import { MainCardMeetingSection } from '@/widget/main/section/meeting';
import { MainUpcommingSchedule } from '@/widget/main/section/upcoming';

export async function MainContent() {
  const t = await getScopedI18n('main');
  const { data } = await serverClient.GET('/home');
  return (
    <>
      <MainCategorySection title={t('카테고리.어떤 모임을 찾으세요?')} />
      <MainCardMeetingSection title={t('this-week-pop-team')} href="#" data={data?.popularMeetings} />
      <MainCardMeetingSection title={t('새로 생겼어요')} href="#" data={data?.newMeetings} />
      <MainCardActivitySection title={t('마감임박 활동')} href="#" data={data?.closingTimeActivities} />
      <MainUpcommingSchedule title={t('다가오는 활동')} data={data?.upcomingActivities} />
      <MainLastSection />
    </>
  );
}
