import createClient from 'openapi-fetch';

import { paths } from './test';

const client = createClient<paths>({ baseUrl: 'http:localhost:5000' });

export default client;
