import { CreateScheduleType } from '@/entities/schedule/api';

//#region schedule request

type CreateScheduleTypeDateMutated = Omit<CreateScheduleType, 'startDate' | 'endDate' | 'address'> & {
  startDate: Date;
  endDate: Date;
};

type BaseScheduleReducerAction = {
  [K in Exclude<keyof CreateScheduleTypeDateMutated, 'reminder'>]: {
    key: K;
    payload: CreateScheduleTypeDateMutated[K];
  };
}[Exclude<keyof CreateScheduleTypeDateMutated, 'reminder'>];

type ReminderAction = {
  key: 'reminder';
  payload: string;
};

type ScheduleReducerAction = BaseScheduleReducerAction | ReminderAction;

export const scheduleCreateReducer = (state: CreateScheduleTypeDateMutated, action: ScheduleReducerAction) => {
  switch (action.key) {
    case 'reminder': {
      const isExist = state.reminder.some((time) => time === action.payload);
      return {
        ...state,
        reminder: isExist
          ? state.reminder.filter((time) => time !== action.payload)
          : [...state.reminder, action.payload],
      };
    }

    default:
      return {
        ...state,
        [action.key]: action.payload,
      };
  }
};

export const scheduleCreateInitializer = ({
  startDate,
  endDate,
  participants = [],
  ...value
}: Partial<CreateScheduleType> = {}): CreateScheduleTypeDateMutated => ({
  meetingId: '',
  name: '',
  explanation: '',
  startDate: startDate ? new Date(startDate) : new Date(),
  endDate: endDate ? new Date(endDate) : new Date(),
  reminder: [],
  announcement: '',
  detailAddress: '',
  onlineYn: true,
  participants,
  participantLimit: 0,
  ...value,
});

//#endregion

//#region client state

type ScheduleTimeState = { controlTime: boolean; controlEndDate: boolean };

export const scheduleTimeReducer = (state: ScheduleTimeState, action: keyof ScheduleTimeState) => {
  return {
    ...state,
    [action]: !state[action],
  };
};

export const scheduleTimeInitializer = (value: Partial<ScheduleTimeState> = {}): ScheduleTimeState => {
  return {
    controlTime: false,
    controlEndDate: false,
    ...value,
  };
};

//#endregion
