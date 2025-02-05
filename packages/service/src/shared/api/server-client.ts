import 'server-only';

import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { cookies } from 'next/headers';

const serverClient = createClient<paths>({ baseUrl: 'http:localhost:5000' });

const serverActionMiddleware: Middleware = {
  async onRequest({ request, options }) {
    try {
      const cookie = (await cookies()).get('tokens');
      if (cookie) {
        request.headers.set('tokens', cookie.value);
      }
    } catch (error) {
      console.error('토큰 쿠키 조회 실패:', error);
    }
    return request;
  },
};

serverClient.use(serverActionMiddleware);

export { serverClient };
