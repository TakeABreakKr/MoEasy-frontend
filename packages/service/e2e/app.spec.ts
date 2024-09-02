import { expect, test } from '@playwright/test';

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
