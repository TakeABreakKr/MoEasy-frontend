import { setupServer } from 'msw/node';

import { createBasehandlers } from './handlers';

export const mockServer = setupServer(...createBasehandlers('SERVER'));
