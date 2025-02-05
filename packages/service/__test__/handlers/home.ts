import { http, HttpResponse } from 'msw';

import { components } from '@/shared/api/my-schema';

export const homeHandlers = [
  http.get('http://localhost:5000/home', () => {
    return HttpResponse.json<components['schemas']['HomeResponse']>({
      categories: [
        {
          name: 'Group 1',
          homeCategoryList: [
            { name: 'Category 1', order: 1 },
            { name: 'Category 2', order: 2 },
          ],
        },
        {
          name: 'Group 2',
          homeCategoryList: [
            { name: 'Category 3', order: 3 },
            { name: 'Category 4', order: 4 },
          ],
        },
      ],
      popularMeetings: [
        {
          name: 'Popular Meeting 1',
          description: 'This is a popular meeting',
          memberCount: 10,
          isLikedYn: true,
        },
        {
          name: 'Popular Meeting 2',
          description: 'This is another popular meeting',
          memberCount: 15,
          isLikedYn: false,
        },
      ],
      newMeetings: [
        {
          name: 'New Meeting 1',
          description: 'This is a new meeting',
          memberCount: 5,
          isLikedYn: true,
        },
        {
          name: 'New Meeting 2',
          description: 'This is another new meeting',
          memberCount: 8,
          isLikedYn: false,
        },
      ],
      closingTimeActivities: [
        {
          name: 'Closing Time Activity 1',
          isOnlineYn: true,
          description: 'This is a closing time activity',
          location: 'Online',
          time: '2025-02-01T10:00:00Z',
          memberCount: 12,
          isLiked: true,
        },
        {
          name: 'Closing Time Activity 2',
          isOnlineYn: false,
          description: 'This is another closing time activity',
          location: 'Seoul',
          time: '2025-02-03T14:00:00Z',
          memberCount: 20,
          isLiked: false,
        },
      ],
      upcomingActivities: [
        {
          name: 'Upcoming Activity 1',
          isOnlineYn: false,
          description: 'This is an upcoming activity',
          location: 'Busan',
          time: '2025-02-10T09:00:00Z',
          memberCount: 25,
          isLiked: true,
        },
        {
          name: 'Upcoming Activity 2',
          isOnlineYn: true,
          description: 'This is another upcoming activity',
          location: 'Online',
          time: '2025-02-15T19:00:00Z',
          memberCount: 18,
          isLiked: false,
        },
      ],
      mostActivatedRegions: [
        {
          name: 'Seoul',
          activityCount: 50,
          order: 1,
        },
        {
          name: 'Busan',
          activityCount: 30,
          order: 2,
        },
      ],
    });
  }),
];
