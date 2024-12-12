import { MeetingAuthority } from '@/entities';
import { components } from '@/shared/api/my-schema';

export type MemberType = Omit<components['schemas']['MemberResponse'], 'authority'> & {
  memberId: string;
  thumbnail: string;
  authority: MeetingAuthority;
};
