import { DateInput } from '../../type/date';

export type TimeState = {
  hour: number;
  minute: number;
};

export type TimeAction =
  | {
      type: 'ADD_HOUR' | 'MINUS_HOUR' | 'ADD_MINUTE' | 'MINUS_MINUTE';
      min?: TimeState;
      max?: TimeState;
    }
  | {
      type: 'SET';
      payload: TimeState;
      min?: TimeState;
      max?: TimeState;
    };

const compareTime = (timeA: TimeState, timeB: TimeState): number => {
  // 시간 비교
  if (timeA.hour > timeB.hour) {
    return 1;
  } else if (timeA.hour < timeB.hour) {
    return -1;
  }

  // 시간이 같을 경우 분 비교
  if (timeA.minute > timeB.minute) {
    return 1;
  } else if (timeA.minute < timeB.minute) {
    return -1;
  }

  // 시간이 같고 분도 같을 경우
  return 0;
};

export const timeReducer = (state: TimeState, action: TimeAction): TimeState => {
  let newState: TimeState;
  switch (action.type) {
    case 'ADD_HOUR': {
      newState = {
        hour: state.hour > 22 ? 0 : state.hour + 1,
        minute: state.minute,
      };
      break;
    }
    case 'MINUS_HOUR': {
      newState = {
        hour: state.hour === 0 ? 23 : state.hour - 1,
        minute: state.minute,
      };
      break;
    }
    case 'ADD_MINUTE': {
      newState = {
        hour: state.hour,
        minute: state.minute === 59 ? 0 : state.minute + 1,
      };
      break;
    }
    case 'MINUS_MINUTE': {
      newState = {
        hour: state.hour,
        minute: !state.minute ? 59 : state.minute - 1,
      };
      break;
    }
    case 'SET': {
      const { hour, minute } = action.payload;
      const parsedHour = hour > 23 || hour < 0 ? 0 : hour;
      const parsedMinute = minute > 59 || minute < 0 ? 0 : minute;
      newState = {
        hour: parsedHour,
        minute: parsedMinute,
      };
      break;
    }
  }
  const { min, max } = action;
  if ((min && compareTime(newState, min) === -1) || (max && compareTime(newState, max) === 1)) return state;
  return newState;
};

export const valueToTimeState = (value?: DateInput | TimeState | null) => {
  if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
    const tempDate = value instanceof Date ? value : new Date(value);
    return {
      hour: tempDate.getHours(),
      minute: tempDate.getMinutes(),
    };
  } else if (value && typeof value === 'object') {
    return value;
  } else {
    const tempDate = new Date();
    return {
      hour: tempDate.getHours(),
      minute: tempDate.getMinutes(),
    };
  }
};

export const timeInitializer = ({
  value,
  min,
  max,
}: {
  value?: DateInput | TimeState | null;
  min?: TimeState;
  max?: TimeState;
}): TimeState => {
  const currentDate = valueToTimeState(value);
  if (min && compareTime(currentDate, min) === -1) return min;
  if (max && compareTime(currentDate, max) === 1) return max;
  return currentDate;
};
