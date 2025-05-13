import { components } from '@/shared/api/my-schema';

export type CategoryType = components['schemas']['MeetingCreateRequest']['category'];

export type FormDataType = {
  name: string;
  explanation: string;
  category?: CategoryType;
  keywords: string[];
  limit: number | '';
  limitDisabled: boolean;
  thumbnail: File | null;
  members: string[];
  publicYn: boolean;
  canJoin: boolean;
};
