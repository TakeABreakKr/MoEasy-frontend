import { getMockBaseUrl, type URL_ORIGIN_TYPE } from './const';
import { createHomeHandlers } from './home';
import { createMeetingHandlers } from './meeting';

export const createBasehandlers = (baseType: URL_ORIGIN_TYPE) => [
  ...createHomeHandlers(getMockBaseUrl(baseType)),
  ...createMeetingHandlers(getMockBaseUrl(baseType)),
];
