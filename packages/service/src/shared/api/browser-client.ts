import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { discordLoginUrl } from '../consts/login';

export const browserClient = createClient<paths>({ baseUrl: 'http://localhost:5000' });

const tokenCookieParser = (cookie: string = window.document.cookie, tokenName = 'AccessToken') => {
  return cookie
    .split(';')
    .map((char) => char.trim())
    .find((cookie) => cookie.startsWith(`${tokenName}=`))
    ?.split('=')[1];
};

const browserMiddleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    try {
      // 로그인/리프레시는 토큰 없이 호출
      if (schemaPath === '/auth/refresh') return request;
      const accessTokenCookie = tokenCookieParser(window.document.cookie, 'AccessToken');
      if (accessTokenCookie) {
        request.headers.set('access-token', accessTokenCookie);
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
      const refreshTokenCookie = await tokenCookieParser(window.document.cookie, 'RefreshToken');
      if (refreshTokenCookie) {
        // TODO: fix setting AccessToken logic after API Developed!!
        await browserClient.POST('/auth/refresh', {
          body: { refreshToken: refreshTokenCookie },
        });
      } else {
        window.location.href = discordLoginUrl;
      }
    }
  },
};

browserClient.use(browserMiddleware);
