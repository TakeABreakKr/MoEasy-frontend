'use server';

import { CreateTeamFormType, stepKeys } from './_feature/data';

type TeamCreateActionState =
  | {
      type: 'error';
      message: string;
    }
  | {
      type: 'success' | 'waiting';
      message?: string;
    };

export const teamModifyAction = async (
  _: TeamCreateActionState,
  formData: FormData,
): Promise<TeamCreateActionState> => {
  const form = stepKeys.reduce<Partial<CreateTeamFormType>>(
    (acc, step) => ({ ...acc, [step.key]: formData.get(step.key) }),
    {},
  );

  for (const step of stepKeys) {
    const currentValue = form[step.key];
    // 필수값을 입력하지 않았을때만 검증을 진행
    if (
      step.required &&
      ((typeof currentValue === 'string' && currentValue === '') ||
        (currentValue instanceof File && currentValue.size === 0))
    )
      return { type: 'error', message: `${[step.key]}를 입력하지 않았습니다.` };
  }
  // TODO: fetch 이후 로직
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return { type: 'success', message: '성공적으로 전송했습니다.' };
};
