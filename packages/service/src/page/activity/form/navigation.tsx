'use client';

import { CreateButtonCommon, CreateButtonCommonProps } from '@moeasy/storybook/ui/create/step-button';

export function ActivityStepNavigation({ step, ...props }: CreateButtonCommonProps & { step: number }) {
  return <CreateButtonCommon prevText="이전" nextText={step === 6 ? '완료' : '다음'} {...props} />;
}
