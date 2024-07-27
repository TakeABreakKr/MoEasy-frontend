import 'server-only';

import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';
import { cookies } from 'next/headers';

const client = createClient<paths>({ baseUrl: 'http:localhost:5000' });

const serverActionMiddleware: Middleware = {
  async onRequest(request, options) {
    const cookie = cookies().get('tokens');
    if (cookie) {
      request.headers.set('tokens', cookie.value);
    }
    return request;
  },
};

client.use(serverActionMiddleware);

export default client;
