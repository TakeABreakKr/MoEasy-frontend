'use server';

import { cookies } from 'next/headers';

import { serverClient } from '@/shared/api/server-client';

export const getUserInfo = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.has('AccessToken');
  if (!accessToken) {
    return null;
  }
  const { data } = await serverClient.GET('/home/header');
  return data?.data || null;
};
