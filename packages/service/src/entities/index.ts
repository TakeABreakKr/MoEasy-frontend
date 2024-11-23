import { components } from '@/shared/api/my-schema';

export type CommonFormActionState =
  | {
      type: 'error';
      message: string;
    }
  | {
      type: 'success' | 'waiting';
      message?: string;
    };

export type CommonFormAction = (_: CommonFormActionState, formData: FormData) => Promise<CommonFormActionState>;

export type MeetingAuthority = components['schemas']['MeetingMemberDto']['authority'];
