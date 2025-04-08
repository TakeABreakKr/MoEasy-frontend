import { homeHandlers } from './home';
import { meetingHandlers } from './meeting';

export const MOCK_API_BASE = 'http://localhost:5000';

export const handlers = [...homeHandlers, ...meetingHandlers];
