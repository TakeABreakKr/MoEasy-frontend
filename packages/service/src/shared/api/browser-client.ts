import createClient, { Middleware } from 'openapi-fetch';

import { paths } from './my-schema';

const browserClient = createClient<paths>({ baseUrl: 'http:localhost:5000' });

export default browserClient;
