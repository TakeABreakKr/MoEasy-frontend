import { http, HttpResponse } from 'msw';

import { MeetingType } from '@/entities/meeting/api';
import { initializeMeeting } from '@/entities/meeting/api/mock';

import { MOCK_API_BASE } from './const';

const MEETING_ENDPOINT = `${MOCK_API_BASE}/meeting/get`;

export const meetingHandlers = [
  http.get(MEETING_ENDPOINT, ({ request }) => {
    const url = new URL(request.url);
    const meetingId = url.searchParams.get('meetingId');
    const data = initializeMeeting(Number(meetingId));
    if (meetingId) {
      return HttpResponse.json<MeetingType>(data);
    }
    return new HttpResponse(null, { status: 400, statusText: '잘못된 요청입니다.' });
  }),
];
