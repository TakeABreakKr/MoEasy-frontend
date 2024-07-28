import 'server-only';
import { InputHTMLAttributes } from 'react';

import client from '@/shared/api/baseApi';
import { components } from '@/shared/api/my-schema';

export type CreateMeetingType = components['schemas']['MeetingCreateRequest'];

export type TeamCreateKeyMap = keyof CreateMeetingType;

export const stepKeys = [
  { key: 'name', type: 'string', label: '모임의 이름은 무엇인가요?', maxLength: 18, required: true },
  { key: 'explanation', type: 'string', label: '모임의 설명은 무엇인가요?', maxLength: 100, required: true },
  { key: 'limit', type: 'number', label: '모임의 인원은 몇명인가요?', defaultValue: 10, required: true },
  { key: 'members', type: 'string', label: '누구와 함께하나요?', placeholder: '#태그해서친구입력가능' },
  { key: 'thumbnail', type: 'file' },
  { key: 'keywords', type: 'string' },
] satisfies Array<
  { key: TeamCreateKeyMap; type: keyof TypeMap; label?: string } & InputHTMLAttributes<HTMLInputElement>
>;

export type TypeMap = {
  number: number;
  string: string;
  file: File;
};

export const createMeeting = (body: CreateMeetingType) =>
  client.POST('/meeting/create', {
    body,
    bodySerializer: (body) => {
      const formData = new FormData();
      for (const [key, values] of Object.entries(body)) {
        if (Array.isArray(values)) {
          for (const value of values) {
            formData.append(key, value);
          }
        } else {
          if (typeof values === 'number') {
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
