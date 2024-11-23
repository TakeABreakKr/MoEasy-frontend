import { mockmembers } from '../../member/api/mock';
import { MeetingType } from '.';

export const initializeMeeting = (index: number): MeetingType => {
  return {
    name: `Team ${index + 1}`,
    explanation: `explanation ${index}`,
    meetingId: `G-${String(index).padStart(16, '0')}`,
    authority: 'MANAGER',
    keywords: ['치킨', '햄버거', '탕수육'],
    thumbnail: `https://via.placeholder.com/72/${index}`,
    limit: 10,
    members: mockmembers,
  };
};

export const initializeMeetingList = (lastIndex = 0): MeetingType[] =>
  Array.from({ length: 20 }, (_, index) => initializeMeeting(lastIndex + index));
