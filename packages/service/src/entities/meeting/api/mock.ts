import { browserClient } from '@/shared/api/browser-client';

import { mockmembers } from '../../member/api/mock';

import { CreateMeetingType, MeetingType } from '.';

export const initializeMeeting = (index: number): MeetingType => {
  return {
    name: `Team ${index + 1}`,
    explanation: `explanation ${index}`,
    meetingId: `G-${String(index).padStart(16, '0')}`,
    authority: 'MANAGER',
    keywords: ['치킨', '햄버거', '탕수육'],
    thumbnail: `https://placehold.co/70/png`,
    limit: 10,
    members: mockmembers,
    canJoin: false,
  };
};

export const initializeMeetingList = (lastIndex = 0): MeetingType[] =>
  Array.from({ length: 20 }, (_, index) => initializeMeeting(lastIndex + index));

export const createMeeting = (body: CreateMeetingType) =>
  browserClient.POST('/meeting/create', {
    body,
    bodySerializer: (body) => {
      const formData = new FormData();
      for (const [key, values] of Object.entries(body)) {
        if (Array.isArray(values)) {
          for (const value of values) {
            formData.append(key, value);
          }
        } else {
          if (typeof values === 'number' || typeof values === 'boolean') {
            formData.append(key, String(values));
          } else {
            formData.append(key, values);
          }
        }
      }
      return formData;
    },
    next: { revalidate: 0 },
  });
