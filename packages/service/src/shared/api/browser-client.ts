import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';

export const browserClient = createClient<paths>({ baseUrl: 'http:localhost:5000' });
