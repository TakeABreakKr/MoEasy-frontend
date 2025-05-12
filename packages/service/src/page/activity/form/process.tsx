import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';

export function ActivityStepProcess({ step }: { step: number }) {
  return (
    <CreateStepList
      steps={[
        { key: '1', text: '활동이름 / 소개' },
        { key: '2', text: '날짜 / 시간' },
        { key: '3', text: '진행방식' },
        { key: '4', text: '리마인드 알림' },
        { key: '5', text: '공지사항' },
        { key: '6', text: '참여 모임원 선택' },
      ]}
      currentStep={step.toString()}
    />
  );
}
