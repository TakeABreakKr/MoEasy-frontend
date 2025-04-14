import { homeHandlers } from './home';
import { meetingHandlers } from './meeting';

export const handlers = [...homeHandlers, ...meetingHandlers];
