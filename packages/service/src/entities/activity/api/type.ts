import { components } from '@/shared/api/my-schema';

export type ActivityStepData = components['schemas']['ActivityCreateRequest'];

export type ActivityStepData_TEMP = Omit<ActivityStepData, 'address'> & { address?: ActivityStepData['address'] };
