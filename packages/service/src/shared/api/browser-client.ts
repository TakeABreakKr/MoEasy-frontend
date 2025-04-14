import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { discordLoginUrl } from '../consts/login';
import Cookies from 'js-cookie';

export const browserClient = createClient<paths>({ baseUrl: process.env.NEXT_PUBLIC_API_BASE });

const notRequireTokenPaths = new Set<keyof paths>(['/home', '/auth/refresh']);

const browserMiddleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    try {
      // 로그인/리프레시는 토큰 없이 호출
      if (notRequireTokenPaths.has(schemaPath as keyof paths)) return request;
      const accessTokenCookie = Cookies.get('AccessToken');
      if (accessTokenCookie) {
        request.headers.set('access-token', accessTokenCookie);
      }
      return request;
    } catch (error) {
      console.error('토큰 쿠키 조회 실패:', error);
    }
    return request;
  },
  async onResponse({ request, response }) {
    if (response.ok) return response;
    switch (response.status) {
      case 401: {
        window.location.href = discordLoginUrl;
      }
      case 410: {
        const refreshTokenCookie = Cookies.get('RefreshToken');
        if (!refreshTokenCookie) {
          window.location.href = discordLoginUrl;
          return response;
        }
        const { data } = await browserClient.POST('/auth/refresh', {
          body: { refreshToken: refreshTokenCookie },
        });
        if (!data || !data.data) {
          window.location.href = discordLoginUrl;
          return response;
        }
        Cookies.set('AccessToken', data.data.accessToken);
        Cookies.set('RefreshToken', data.data.refreshToken);
        const { url, ...requestOptions } = request;
        requestOptions.headers.set('access-token', data.data.accessToken);
        const newResponse = await fetch(url, requestOptions);
        return newResponse;
      }
      default: {
        return response;
      }
    }
  },
};

browserClient.use(browserMiddleware);
