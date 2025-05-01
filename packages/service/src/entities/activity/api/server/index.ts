import { ActivityStepData } from '@/entities/activity/api/type';
import { browserClient } from '@/shared/api/browser-client';

export const createActivityApi = (payload: ActivityStepData) => {
  return browserClient.POST('/activity/create', {
    body: payload,
  });
};
