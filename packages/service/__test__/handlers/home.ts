import { http, HttpResponse } from 'msw';

import { components } from '@/shared/api/my-schema';
import { categoryList } from '@/shared/consts/category';

import { successResponse, SuccessResponseType } from '../utils';

import { MOCK_API_BASE } from './const';

const dummyMemberThumbnails = [
  { authority: 'OWNER', thumbnail: 'https://placehold.co/30/png' },
  { authority: 'MANAGER', thumbnail: 'https://placehold.co/30/png' },
  { authority: 'MEMBER', thumbnail: 'https://placehold.co/30/png' },
  { authority: 'MEMBER', thumbnail: 'https://placehold.co/30/png' },
  { authority: 'MEMBER', thumbnail: 'https://placehold.co/30/png' },
  { authority: 'MEMBER', thumbnail: 'https://placehold.co/30/png' },
] satisfies components['schemas']['ActivityParticipantDto'][];

export const homeHandlers = [
  http.get(`${MOCK_API_BASE}/home`, () => {
    return HttpResponse.json<SuccessResponseType<components['schemas']['HomeResponse']>>(
      successResponse({
        popularMeetings: [
          {
            id: '1',
            thumbnail: 'https://placehold.co/30/png',
            name: 'Popular Meeting 1',
            explanation: 'This is a popular meeting',
            memberCount: 10,
            likedYn: true,
          },
          {
            id: '2',
            thumbnail: 'https://placehold.co/30/png',
            name: 'Popular Meeting 2',
            explanation: 'This is another popular meeting',
            memberCount: 15,
            likedYn: false,
          },
        ],
        newMeetings: [
          {
            id: '1',
            name: 'New Meeting 1',
            thumbnail: 'https://placehold.co/30/png',
            explanation: 'This is a new meeting',
            memberCount: 5,
            likedYn: true,
          },
          {
            id: '1',
            name: 'New Meeting 2',
            thumbnail: 'https://placehold.co/30/png',
            explanation: 'This is another new meeting',
            memberCount: 8,
            likedYn: false,
          },
        ],
        closingTimeActivities: [
          {
            id: 1,
            activityName: 'Closing Time Activity 1',
            thumbnail: 'https://placehold.co/30/png',
            meetingName: 'Meeting 1',
            isOnlineYn: true,
            onlineLink: MOCK_API_BASE,
            participantCount: 2,
            participantLimit: 10,
            region: '가평군',
            participants: dummyMemberThumbnails.slice(0, 2),
            time: '2025-02-01T10:00:00Z',
          },
          {
            id: 2,
            activityName: 'Closing Time Activity 2',
            thumbnail: 'https://placehold.co/30/png',
            meetingName: 'Meeting 1',
            isOnlineYn: false,
            onlineLink: MOCK_API_BASE,
            region: '강북구',
            time: '2025-02-03T14:00:00Z',
            participantCount: 20,
            participants: dummyMemberThumbnails,
            participantLimit: 100,
          },
        ],
        upcomingActivities: [
          {
            id: 1,
            activityName: 'Closing Time Activity 1',
            thumbnail: 'https://placehold.co/30/png',
            meetingName: 'Meeting 1',
            isOnlineYn: false,
            onlineLink: MOCK_API_BASE,
            region: '강서구',
            time: '2025-02-10T09:00:00Z',
            participants: dummyMemberThumbnails,
            participantCount: 25,
            participantLimit: 100,
          },
          {
            id: 2,
            activityName: 'Closing Time Activity 1',
            thumbnail: 'https://placehold.co/30/png',
            meetingName: 'Meeting 1',
            isOnlineYn: true,
            onlineLink: MOCK_API_BASE,
            region: '강동구',
            time: '2025-02-15T19:00:00Z',
            participants: dummyMemberThumbnails,
            participantCount: 20,
            participantLimit: 100,
          },
        ],
      }),
    );
  }),
  http.get(`${MOCK_API_BASE}/home/cache`, () => {
    return HttpResponse.json<SuccessResponseType<components['schemas']['HomeCachedResponse']>>(
      successResponse({
        categories: categoryList.map((category) => ({
          name: category.title,
          homeCategoryList: category.category.map((category, index) => ({
            name: category.key,
            order: index + 1,
          })),
        })),
        mostActivatedRegions: [
          {
            name: '강남구',
            activityCount: 50,
            order: 1,
          },
          {
            name: '강동구',
            activityCount: 30,
            order: 2,
          },
          {
            name: '관악구',
            activityCount: 10,
            order: 3,
          },
        ],
      }),
    );
  }),
  http.get(`${MOCK_API_BASE}/home/header`, ({ request }) => {
    const accessToken = request.headers.get('access-token');
    if (!accessToken) {
      return new HttpResponse(null, { status: 401, statusText: 'Unauthorized' });
    }
    return HttpResponse.json<SuccessResponseType<components['schemas']['HeaderResponse']>>(
      successResponse({
        id: 12345,
        thumbnail: 'https://placehold.co/30/png',
      }),
    );
  }),
];
