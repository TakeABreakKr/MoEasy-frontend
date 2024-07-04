import { InputHTMLAttributes } from 'react';

export const keyArr = ['name', 'explanation', 'limit', 'members', 'thumbnail'] as const;

export type TeamCreateKeyMap = (typeof keyArr)[number];

export const stepKeys = [
  { key: 'name', type: 'string', label: '모임의 이름은 무엇인가요?', maxLength: 18, required: true },
  { key: 'explanation', type: 'string', label: '모임의 설명은 무엇인가요?', maxLength: 100, required: true },
  { key: 'limit', type: 'number', label: '모임의 인원은 몇명인가요?', defaultValue: 10, required: true },
  { key: 'members', type: 'string', label: '누구와 함께하나요?', placeholder: '#태그해서친구입력가능' },
  { key: 'thumbnail', type: 'file' },
] satisfies Array<
  { key: TeamCreateKeyMap; type: keyof TypeMap; label?: string } & InputHTMLAttributes<HTMLInputElement>
>;

export type TypeMap = {
  number: number;
  string: string;
  file: File;
};

export type ConvertFieldsToObj<F extends readonly { key: string; type: keyof TypeMap }[]> = {
  [K in F[number] as K['key']]: TypeMap[K['type']];
};

export type CreateTeamFormType = ConvertFieldsToObj<typeof stepKeys>;
