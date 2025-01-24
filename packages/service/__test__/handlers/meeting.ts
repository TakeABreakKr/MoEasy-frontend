import { http, HttpResponse } from 'msw';

import { MeetingType } from '@/entities/meeting/api';
import { initializeMeeting } from '@/entities/meeting/api/mock';

export const meetingHandlers = [
  http.get('http://localhost:4000/mock/meeting/:meetingId', ({ params }) => {
    if (params.meetingId) {
      return HttpResponse.json<MeetingType>(initializeMeeting(Number(params.meetingId)));
    }
  }),
];
