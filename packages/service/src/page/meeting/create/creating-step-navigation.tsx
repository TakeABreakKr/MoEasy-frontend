import { CreateButtonCommon } from '@moeasy/storybook/ui/create/step-button';

export function CreatingStepNavigation({
  step,
  goToPrevStep,
  goToNextStep,
}: {
  step: number;
  goToPrevStep: () => void;
  goToNextStep: () => void;
}) {
  return (
    <CreateButtonCommon
      prevText="이전"
      nextText={step === 4 ? '완료' : '다음'}
      onPrevStep={goToPrevStep}
      onNextStep={goToNextStep}
    />
  );
}
