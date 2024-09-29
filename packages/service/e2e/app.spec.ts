import { expect, test } from '@playwright/test';
import path from 'path';

import { delay } from '@moeasy/storybook/utils/lib/delay';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MoEasy/);
});

test('meeting link click', async ({ page }) => {
  await page.goto('/mypage');

  // Click the get started link.
  await page.getByRole('link', { name: '그룹 생성' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: '모임 생성' })).toBeVisible();
});

test.describe('모임 생성하는 플로우', () => {
  test.beforeEach(async ({ page }) => {
    // 모임생성 Start
    await page.goto('/meeting/create');
  });

  test('전체 모임 생성 프로세스', async ({ page }) => {
    // 모임생성 참 입력
    await test.step('모임 기본 정보 입력', async () => {
      // 모임 이름/소개 입력
      await page.fill('input[name="name"]', '테스트 모임');
      await page.fill('textarea[name="explanation"]', '테스트 모임 소개입니다.');

      // 다음으로 이동
      await page.click('a:has-text("다음")');
    });

    await test.step('썸네일 설정', async () => {
      // 썸네일 업로드 구현
      const fileChooserPromise = page.waitForEvent('filechooser');
      await page.getByTestId('file-upload').click();

      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(path.join(__dirname, '../public/vercel.svg'));

      // PC 내 폴더 선택 (시뮬레이션)
      // await page.click('a:has-text("폴더 선택")');

      // 선택한 이미지 보여줌 (확인)
      await expect(page.getByAltText('Cropped')).toBeVisible();

      // 다음으로 이동
      await page.click('a:has-text("다음")');
    });

    await test.step('키워드 설정', async () => {
      // 키워드 입력 폼
      await page.fill('input[name="keyword"]', '테스트키워드');
      await page.press('input[name="keyword"]', 'Enter');
      await page.fill('input[name="keyword"]', '테스트키워드2');
      await page.press('input[name="keyword"]', 'Enter');

      // 키워드 리스트에 추가 (확인)
      await expect(page.getByRole('button', { name: /테스트키워드/i })).toHaveCount(2);

      // 다음으로 이동
      await page.click('a:has-text("다음")');
    });

    await test.step('인원제한/모임원초대', async () => {
      // 인원수 설정
      await page.fill('input[name="limit"]', '10');

      // 모임원 초대 (시뮬레이션)
      await page.click('button:has-text("유저 닉네임을 검색해보세요.")');

      // 팝업에서 유저 한 명 클릭 후 확인
      await page.getByRole('checkbox').first().click();
      await delay(1000);
      await page.getByRole('button', { name: `확인` }).click();

      // 초대된 모임원 확인
      await expect(page.getByTestId('member-item')).toBeVisible();
    });

    await test.step('모임 생성 완료', async () => {
      // 모임생성 요청
      await page.getByRole('button', { name: '모임 생성' }).click();
      await page.getByRole('link', { name: `확인` }).click();

      // 모임생성 성공 확인
      await expect(page).toHaveURL('/meeting');
    });
  });

  test('모임 생성 제한', async ({ page }) => {
    await test.step('키워드 10명 제한', async () => {
      await page.goto('/meeting/create?step=3');
      // 키워드 입력 폼
      for await (const keyword of Array.from({ length: 10 }, (_, idx) => `키워드${idx}`)) {
        await page.fill('input[name="keyword"]', keyword);
        await page.press('input[name="keyword"]', 'Enter');
      }
      await expect(page.getByTestId('keyword-item')).toHaveCount(10);
      await expect(page.getByText(/키워드는 최대 10개까지 등록 가능합니다./)).toBeVisible();
    });
  });
});
