import { MeetingAuthority } from '../types';

export const isManagerAutorized = (authority?: MeetingAuthority) =>
  !!authority && (['MANAGER', 'OWNER'] as Array<MeetingAuthority>).includes(authority);
