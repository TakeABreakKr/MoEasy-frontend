import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';

export default function CreatingStepProcess({ step }: { step: number }) {
  return (
    <CreateStepList
      steps={[
        { key: '1', text: '모임이름 / 소개' },
        { key: '2', text: '카테고리 / 키워드' },
        { key: '3', text: '인원 제한' },
        { key: '4', text: '썸네일' },
      ]}
      currentStep={step.toString()}
    />
  );
}
