import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

import { serverClient } from '@/shared/api/server-client';
import { ProviderUrl } from '@/shared/consts/login';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const refreshTokenCookie = cookieStore.get('RefreshToken');
  if (!refreshTokenCookie) {
    redirect(ProviderUrl.DISCORD);
  }
  const { data, error } = await serverClient.POST('/auth/refresh', {
    body: { refreshToken: refreshTokenCookie.value },
  });
  if (error || !data || !data.data) {
    redirect(ProviderUrl.DISCORD);
  }
  cookieStore.set('AccessToken', data.data.accessToken);
  cookieStore.set('RefreshToken', data.data.refreshToken);
  const origin = request.nextUrl.searchParams.get('moeasy-origin');
  if (origin) {
    redirect(origin || '/');
  } else {
    redirect('/');
  }
}
