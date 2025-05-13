import { setupWorker } from 'msw/browser';

import { createBasehandlers } from './handlers';

export const browserWorker = setupWorker(...createBasehandlers('BROWSER'));
