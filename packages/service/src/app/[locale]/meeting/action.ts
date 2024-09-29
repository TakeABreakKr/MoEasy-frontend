'use server';

import { redirect } from 'next/navigation';

import { fileParser, numberParser, stringParser } from '@/shared/utils/utils';

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
  const parsedForm = {
    name: stringParser(formData.get('name'), { required: true }),
    explanation: stringParser(formData.get('explanation')),
    thumbnail: fileParser(formData.get('thumbnail')),
    keywords: formData.getAll('keywords').map((keyword) => stringParser(keyword)),
    limit: numberParser(formData.get('limit'), { toBe: true }),
    members: formData.getAll('members').map((member) => stringParser(member)),
  };

  // console.log(parsedForm);

  // TODO: fetch 이후 로직
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return { type: 'success', message: '성공적으로 전송했습니다.' };
};

export const gotoTeamList = async () => {
  redirect('/team');
};
