import 'server-only';

import { MemberType } from '@/entities/member/api';
import { components } from '@/shared/api/my-schema';

import { MeetingAuthority } from '../..';

export type CreateMeetingType = components['schemas']['MeetingCreateRequest'];

export type MeetingType = Omit<components['schemas']['MeetingCreateRequest'], 'members' | 'thumbnail'> & {
  meetingId: string;
  authority: MeetingAuthority;
  members: Array<MemberType>;
  thumbnail: string;
};
