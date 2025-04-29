import { getHomeCache, getHomeData } from '@/entities/home/api/server';
import { getScopedI18n } from '@/locales/server';

import { MainCardActivitySection } from '../section/activity';
import { MainCategorySection } from '../section/category';
import { MainCardMeetingSection } from '../section/meeting';
import { MainLastSection } from '../section/neighborhood';
import { MainUpcommingSchedule } from '../section/upcoming';

export async function MainContent() {
  const t = await getScopedI18n('main');
  const homeData = await getHomeData();
  const cachedData = await getHomeCache();
  const { popularMeetings, newMeetings, closingTimeActivities, upcomingActivities } = homeData || {};
  const { categories, mostActivatedRegions } = cachedData || {};
  return (
    <>
      <MainCategorySection title={t('카테고리.어떤 모임을 찾으세요?')} categories={categories} />
      <MainCardMeetingSection title={t('this-week-pop-team')} href="#" data={popularMeetings} />
      <MainCardMeetingSection title={t('새로 생겼어요')} href="#" data={newMeetings} />
      <MainCardActivitySection title={t('마감임박 활동')} href="#" data={closingTimeActivities} />
      <MainUpcommingSchedule title={t('다가오는 활동')} data={upcomingActivities} />
      <MainLastSection mostActivatedRegions={mostActivatedRegions} />
    </>
  );
}
