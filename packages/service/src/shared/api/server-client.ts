import 'server-only';

import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { discordLoginUrl } from '../consts/login';

const serverClient = createClient<paths>({ baseUrl: 'http:localhost:5000' });

const serverActionMiddleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    try {
      // 로그인/리프레시는 토큰 없이 호출
      if (schemaPath === '/auth/refresh') return request;
      const cookie = (await cookies()).get('AccessToken');
      if (cookie) {
        request.headers.set('access-token', cookie.value);
      }
      return request;
    } catch (error) {
      console.error('토큰 쿠키 조회 실패:', error);
    }
    return request;
  },
  async onResponse({ response, schemaPath }) {
    if (schemaPath === '/home/header') return response;
    if (!response.ok && response.status === 401) {
      const cookieStore = await cookies();
      const refreshTokenCookie = cookieStore.get('RefreshToken');
      if (refreshTokenCookie) {
        // TODO: fix setting AccessToken logic after API Developed!!
        await serverClient.POST('/auth/refresh', {
          body: { refreshToken: refreshTokenCookie.value },
        });
      } else {
        redirect(discordLoginUrl);
      }
    }
  },
};

serverClient.use(serverActionMiddleware);

export { serverClient };
