import { test } from '@playwright/test';

test.describe('모임 관리 페이지', () => {
  test.beforeEach(async ({ page }) => {
    // 모임생성 Start
    await page.goto('/meeting');
  });

  test('모임 관리 화면 프로세스', async ({ page }) => {
    await test.step('모임 필터 기능', async () => {});
    await test.step('스크롤 이동 시 모임 추가로 불러옴', async () => {});
    await test.step('모임 카드 클릭 시 모임 정보 팝업 표시', async () => {});
    await test.step('모임 카드에서 멤버 클릭 시 멤버 정보 팝업 표시', async () => {});
    await test.step('모임 정보 팝업에서 멤버 클릭 시 멤버 정보 팝업으로 변경', async () => {});
    await test.step('유저 정보 팝업에서 섬네일 클릭 시 유저 정보 변경 이력 표시', async () => {});
    await test.step('유저 정보 변경 이력 팝업에서 뒤로가기', async () => {});
  });

  test('모임 카드 자세히 보기 권한별 다른 드롭다운 표시', async ({ page }) => {
    await test.step('권한이 매니저인 경우 수정, 초대, 탈퇴, 삭제 표시', async () => {
      // 수정 클릭 시 수정 페이지로 페이지 이동
      // 초대 클릭 시 코드 팝업 표시
      // 탈퇴 클릭 시 탈퇴 확인 팝업 표시
      // 삭제 클릭 시 삭제 확인 팝업 표시
    });
    await test.step('권한이 멤버인 경우 초대, 탈퇴 표시', async () => {
      // 초대 클릭 시 코드 팝업 표시
      // 탈퇴 클릭 시 탈퇴 확인 팝업 표시
    });
  });

  test('모임가입 수락 대기 아이콘 클릭 시 팝업 표시', async () => {
    await test.step('모임가입 수락 대기 아이콘 클릭 시 팝업 표시', async () => {});
    await test.step('모임가입 수락 팝업 체크박스 테스트', async () => {});
    await test.step('모임가입 수락 팝업 개별 수락', async () => {});
    await test.step('모임가입 수락 팝업 개별 거절', async () => {});
  });
});
