import 'server-only';

import { components } from '@/shared/api/my-schema';
import { stringParser } from '@/shared/utils/utils';

import { CommonFormAction } from '../..';

export type CreateScheduleType = Omit<components['schemas']['ScheduleCreateRequest'], 'address'>;

export type ScheduleCreateKeyMap = keyof CreateScheduleType;

export const scheduleModifyAction: CommonFormAction = async (_, formData) => {
  'use server';
  const parsedForm: Partial<CreateScheduleType> = {
    meeting_id: stringParser(formData.get('meeting_id')),
    name: stringParser(formData.get('name'), { required: true }),
    explanation: stringParser(formData.get('explanation')),
    startDate: stringParser(formData.get('startDate')),
    endDate: stringParser(formData.get('startDate')),
    announcement: stringParser(formData.get('announcement')),
    detailAddress: stringParser(formData.get('detailAddress')),
    onlineYn: Boolean(formData.get('onlineYn')),
    reminder: [],
  };

  // TODO: fetch 이후 로직
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return { type: 'success', message: '성공적으로 전송했습니다.' };
};
