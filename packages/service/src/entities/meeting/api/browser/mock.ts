// 예시 api 파일: msw 적용 후에 제거될 예정

import { useQuery } from '@tanstack/react-query';

import { MeetingType } from '..';

export const useMeetingQuery = (meetingId: string) => {
  return useQuery<MeetingType>({
    queryKey: ['meeting', meetingId],
    queryFn: async () => {
      const response = await fetch(`mock/meeting/${meetingId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      return newData;
    },
  });
};

export const useMeetingListQuery = ({
  keyword = '',
  name = '',
  code = '',
}: {
  keyword?: string;
  name?: string;
  code?: string;
}) => {
  const queryString = new URLSearchParams({ keyword, name, code }).toString();
  return useQuery<MeetingType[]>({
    queryKey: ['meeting', queryString],
    queryFn: async () => {
      const response = await fetch(`mock/meeting/list?${queryString}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      return newData;
    },
  });
};
