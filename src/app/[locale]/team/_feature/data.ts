import { InputHTMLAttributes } from 'react';

export const keyArr = ['teamname', 'teamcount', 'teammanager', 'thumbnail'] as const;

export type TeamCreateKeyMap = (typeof keyArr)[number];

export const stepKeys = [
  { key: 'teamname', type: 'string', maxLength: 18, required: true },
  { key: 'teamcount', type: 'number', defaultValue: 10, required: true },
  { key: 'teammanager', type: 'string', placeholder: '친구를 선택해주세요' },
  { key: 'thumbnail', type: 'file' },
] satisfies Array<{ key: TeamCreateKeyMap; type: keyof TypeMap } & InputHTMLAttributes<HTMLInputElement>>;

export type TypeMap = {
  number: number;
  string: string;
  file: File;
};

export type ConvertFieldsToObj<F extends readonly { key: string; type: keyof TypeMap }[]> = {
  [K in F[number] as K['key']]: TypeMap[K['type']];
};

export type CreateTeamFormType = ConvertFieldsToObj<typeof stepKeys>;
