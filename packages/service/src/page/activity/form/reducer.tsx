import { ActivityStepData_TEMP } from '@/entities/activity/api/type';

export const activityStepEnum = ['name', 'date', 'method', 'reminder', 'announcement', 'participants'] as const;

type ActivityStepUnion = (typeof activityStepEnum)[number];

export type ActivityStepMachine = {
  step: ActivityStepUnion;
  data: ActivityStepData_TEMP;
};

export const activityStepInitializer = (meetingId: string): ActivityStepMachine => {
  return {
    step: 'name',
    data: {
      meetingId,
      name: '',
      thumbnail: '',
      startDate: '',
      endDate: '',
      reminder: [],
      announcement: '',
      onlineYn: true,
      onlineLink: '',
      detailAddress: '',
      participantLimit: 10,
      participants: [],
    },
  };
};

const activityStepGuard = (step: ActivityStepUnion, data: ActivityStepMachine['data']): ActivityStepMachine => {
  // first guard: name이 30자 미만이면 1st step으로 이동
  if (!data.name || data.name.length > 30) {
    return { step: 'name', data };
  }
  // second guard: 진행방법 다음단계에서 온라인일 때는 링크가 없거나 오프라인일때는 기본 주소가 없으면 3rd step으로 이동
  if (
    activityStepEnum.indexOf(step) > 2 &&
    ((data.onlineYn && !data.onlineLink) || (!data.onlineYn && !data.address?.address))
  ) {
    return { step: 'method', data };
  }
  return { step, data };
};

type ActivityStepAction =
  | {
      type: 'step-back';
    }
  | {
      type: 'name';
      payload: string;
    }
  | {
      type: 'date';
      payload: { startDate?: string; endDate?: string };
    }
  | {
      type: 'method';
      payload: Partial<Pick<ActivityStepData_TEMP, 'onlineYn' | 'address' | 'detailAddress'>>;
    }
  | {
      type: 'reminder';
      payload: string[];
    }
  | {
      type: 'thumbnail';
      payload: string;
    }
  | {
      type: 'announcement';
      payload: string;
    };

export const activityStepReducer = (state: ActivityStepMachine, action: ActivityStepAction): ActivityStepMachine => {
  switch (action.type) {
    case 'step-back': {
      const currentStepIndex = activityStepEnum.indexOf(state.step);
      if (currentStepIndex <= 0) {
        return state;
      }
      return { ...state, step: activityStepEnum[currentStepIndex - 1] };
    }
    case 'name': {
      return activityStepGuard('date', { ...state.data, name: action.payload });
    }
    case 'date': {
      return activityStepGuard('method', { ...state.data, ...action.payload });
    }
    case 'method': {
      return activityStepGuard('reminder', { ...state.data, ...action.payload });
    }
    case 'reminder': {
      return activityStepGuard('announcement', { ...state.data, reminder: action.payload });
    }
    case 'announcement': {
      return activityStepGuard('participants', { ...state.data, announcement: action.payload });
    }
    default:
      return state;
  }
};
