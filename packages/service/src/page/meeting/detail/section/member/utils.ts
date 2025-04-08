import { MeetingAuthority } from '@/entities';

export const isAdminAutority = (autority: MeetingAuthority): autority is 'OWNER' | 'MANAGER' =>
  ['OWNER', 'MANAGER'].includes(autority);
