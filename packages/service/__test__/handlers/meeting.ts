import { http, HttpResponse } from 'msw';

import { MeetingType } from '@/entities/meeting/api';
import { initializeMeeting } from '@/entities/meeting/api/mock';

export const createMeetingHandlers = (baseUrl: string) => [
  http.get(`${baseUrl}/meeting/get`, ({ request }) => {
    const url = new URL(request.url);
    const meetingId = url.searchParams.get('meetingId');
    const data = initializeMeeting(Number(meetingId));
    if (meetingId) {
      return HttpResponse.json<MeetingType>(data);
    }
    return new HttpResponse(null, { status: 400, statusText: '잘못된 요청입니다.' });
  }),
];
