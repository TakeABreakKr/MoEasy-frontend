import { http, HttpResponse } from 'msw';

import { MeetingType } from '@/entities/meeting/api';
import { initializeMeeting } from '@/entities/meeting/api/mock';

const MOCK_API_BASE = 'http://localhost:4000/mock';
const MEETING_ENDPOINT = `${MOCK_API_BASE}/meeting/:meetingId`;

export const meetingHandlers = [
  http.get(MEETING_ENDPOINT, ({ params }) => {
    if (params.meetingId) {
      return HttpResponse.json<MeetingType>(initializeMeeting(Number(params.meetingId)));
    }
    return new HttpResponse(null, { status: 400, statusText: '잘못된 요청입니다.' });
  }),
];
