import 'server-only';

import { components } from '@/shared/api/my-schema';
import { stringParser } from '@/shared/utils/utils';

import { CommonFormAction } from '../..';

export type CreateScheduleType = components['schemas']['ScheduleCreateRequest'];

export type ScheduleCreateKeyMap = keyof CreateScheduleType;

export const scheduleModifyAction: CommonFormAction = async (_, formData) => {
  'use server';
  const parsedForm: Partial<CreateScheduleType> = {
    meeting_id: 'G_NOT_IMPLEMENTED',
    name: stringParser(formData.get('name'), { required: true }),
    explanation: stringParser(formData.get('explanation')),
    startDate: stringParser(formData.get('startDate')),
    endDate: stringParser(formData.get('endDate')),
    announcement: stringParser(formData.get('announcement')),
    detailAddress: stringParser(formData.get('detailAddress'), { toBe: true }),
    onlineYn: formData.get('onlineYn') === 'Y',
    reminder: formData.getAll('reminder').map((item) => stringParser(item)),
  };

  console.log(parsedForm);

  // TODO: fetch 이후 로직
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return { type: 'success', message: '성공적으로 전송했습니다.' };
};
