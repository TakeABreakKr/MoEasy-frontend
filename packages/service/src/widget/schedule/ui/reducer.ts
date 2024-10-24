import { CreateScheduleType } from '@/entities/schedule/api';

type BaseScheduleReducerAction = {
  [K in Exclude<keyof CreateScheduleType, 'reminder'>]: {
    key: K;
    payload: CreateScheduleType[K];
  };
}[Exclude<keyof CreateScheduleType, 'reminder'>];

type ReminderAction = {
  key: 'reminder';
  payload: string;
};

type ScheduleReducerAction = BaseScheduleReducerAction | ReminderAction;

export const scheduleCreateReducer = (state: CreateScheduleType, action: ScheduleReducerAction) => {
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

export const scheduleCreateInitializer = (value: Partial<CreateScheduleType> = {}): CreateScheduleType => ({
  meeting_id: '',
  name: '',
  explanation: '',
  startDate: '',
  endDate: '',
  reminder: [],
  announcement: '',
  detailAddress: '',
  onlineYn: false,
  ...value,
});
