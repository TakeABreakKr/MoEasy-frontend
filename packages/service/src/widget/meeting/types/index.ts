import { components } from '@/shared/api/my-schema';

import { NameTagProps } from '@moeasy/storybook/ui/tag/nametag/nametag';

export type MeetingType = components['schemas']['MeetingListMeetingDto'] & {
  members: Member[];
  limit: number;
};
export type MeetingAuthority = MeetingType['authority'];
export type Member = {
  memberId: string;
  name: string;
  userRole?: NameTagProps['userRole'];
  thumbnail?: string;
};
