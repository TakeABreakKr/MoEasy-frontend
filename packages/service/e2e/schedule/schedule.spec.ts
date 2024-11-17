import { test } from '@playwright/test';

test.describe('schedule create', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/schedule/create');
  });

  test('create whole process', async ({ page }) => {
    await test.step('스케쥴 작성', async () => {
      // 모임 이름/소개 입력
      await page.fill('input[name="name"]', '테스트 모임');
      await page.fill('textarea[name="explanation"]', '테스트 모임 소개입니다.');

      // 다음으로 이동
      await page.click('a:has-text("다음")');
    });
  });
});
