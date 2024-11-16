import { components } from '@/shared/api/my-schema';

export type MeetingType = components['schemas']['MeetingListMeetingDto'];
export type MeetingAuthority = MeetingType['authority'];
export type CardMember = {
  name: string;
  userRole: string;
  avatar?: string;
};
export type MeetingCardPopupState = { popupType: 'MEETING' } | { popupType: 'MEMBER'; member: CardMember } | null;
