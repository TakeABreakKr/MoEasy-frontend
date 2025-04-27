import { serverClient } from '@/shared/api/server-client';

export const getMeeting = async (meetingId: string) => {
  const { data } = await serverClient.GET('/meeting/get', {
    params: {
      query: {
        meetingId,
      },
    },
  });
  return data?.data;
};
