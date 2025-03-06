import { MemberType } from '.';

export const mockmembers: MemberType[] = [
  {
    username: 'James',
    memberId: 'G-1234123412341234',
    authority: 'MEMBER',
    thumbnail: `https://placehold.co/70/png`,
    explanation: '안녕하세요',
  },
  {
    username: 'James',
    memberId: 'G-2341234123412342',
    authority: 'MEMBER',
    thumbnail: `https://placehold.co/70/png`,
    explanation: '안녕하세요. 두번째 인간입니다.',
  },
];

export const initializeMember = (memberId: string) => mockmembers.find((member) => member.memberId === memberId);
