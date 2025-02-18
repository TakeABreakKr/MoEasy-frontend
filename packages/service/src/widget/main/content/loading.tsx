import { getScopedI18n } from '@/locales/server';
import { MainLastSection } from '@/widget/main/section/neighborhood';

import { MainCategorySectionFallback } from '../section/category/fallback';
import { MainCardSectionFallback } from '../section/fallback';
import { MainUpcommingScheduleFallback } from '../section/upcoming/fallback';

export async function MainContentLoadingFallback() {
  const t = await getScopedI18n('main');
  return (
    <>
      <MainCategorySectionFallback title={t('카테고리.어떤 모임을 찾으세요?')} />
      <MainCardSectionFallback />
      <MainCardSectionFallback />
      <MainCardSectionFallback type="activity" />
      <MainUpcommingScheduleFallback />
      <MainLastSection />
    </>
  );
}
