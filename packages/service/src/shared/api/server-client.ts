import 'server-only';

import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { discordLoginUrl } from '../consts/login';

const serverClient = createClient<paths>({ baseUrl: process.env.NEXT_PUBLIC_API_BASE });

const serverActionMiddleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    // 로그인/리프레시는 토큰 없이 호출
    if (schemaPath === '/auth/refresh') return request;
    let accessToken: string | null = null;
    try {
      const [headerStore, cookieStore] = await Promise.all([headers(), cookies()]);
      const origin = headerStore.get('x-moeasy-pathname') || '/';
      request.headers.set('x-moeasy-pathname', origin);
      const cookie = cookieStore.get('AccessToken');
      if (cookie) {
        accessToken = cookie.value;
      }
    } catch (error) {
      console.error('토큰 쿠키 조회 실패:', error);
    }
    if (accessToken) {
      request.headers.set('access-token', accessToken);
    }
    return request;
  },
  async onResponse({ request, response }) {
    if (response.ok) return response;
    switch (response.status) {
      case 401: {
        redirect(discordLoginUrl);
      }
      case 410: {
        const origin = request.headers.get('x-moeasy-pathname') || '/';
        redirect(`/api/refresh?moeasy-origin=${origin}`);
        // Setting cookies cannot be done directly in a Server Component, even when using a Route Handler or Server Action. This is because cookies are actually stored by the browser, not the server.
        // https://nextjs.org/docs/app/api-reference/functions/cookies#understanding-cookie-behavior-in-server-components
      }
      default: {
        return response;
      }
    }
  },
};

serverClient.use(serverActionMiddleware);

export { serverClient };
