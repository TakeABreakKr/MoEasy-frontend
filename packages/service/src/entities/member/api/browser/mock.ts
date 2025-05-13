// 예시 api 파일

import { useQuery } from '@tanstack/react-query';

import { MemberType } from '..';

export const useMemberQuery = (memberId: string) => {
  return useQuery<MemberType>({
    queryKey: ['member', memberId],
    queryFn: async () => {
      const response = await fetch(`mock/member/${memberId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      return newData;
    },
  });
};

export const useMemberListQuery = ({ name = '', code = '' }: { name?: string; code?: string }) => {
  const queryString = new URLSearchParams({ name, code }).toString();
  return useQuery<MemberType[]>({
    queryKey: ['member', queryString],
    queryFn: async () => {
      const response = await fetch(`mock/member/list?${queryString}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      return newData;
    },
  });
};
