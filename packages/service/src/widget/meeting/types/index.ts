import { components } from '@/shared/api/my-schema';

import { NameTagProps } from '@moeasy/storybook/ui/tag/nametag/nametag';

export type MeetingType = components['schemas']['MeetingListMeetingDto'];
export type MeetingAuthority = MeetingType['authority'];
export type CardMember = {
  name: string;
  userRole?: NameTagProps['userRole'];
  avatar?: string;
};
export type MeetingCardPopupState =
  | { popupType: 'MEETING'; fromOutside?: boolean }
  | { popupType: 'MEMBER'; fromOutside?: boolean; member: CardMember }
  | null;
