export type TimeState = {
  hour: number;
  minute: number;
};

export type TimeAction =
  | {
      type: 'ADD_HOUR' | 'MINUS_HOUR' | 'ADD_MINUTE' | 'MINUS_MINUTE';
    }
  | {
      type: 'SET';
      payload: TimeState;
    };

export const timeReducer = (state: TimeState, action: TimeAction): TimeState => {
  switch (action.type) {
    case 'ADD_HOUR': {
      return {
        hour: state.hour > 22 ? 0 : state.hour + 1,
        minute: state.minute,
      };
    }
    case 'MINUS_HOUR': {
      return {
        hour: state.hour === 0 ? 23 : state.hour - 1,
        minute: state.minute,
      };
    }
    case 'ADD_MINUTE': {
      return {
        hour: state.hour,
        minute: state.minute === 59 ? 0 : state.minute + 1,
      };
    }
    case 'MINUS_MINUTE': {
      return {
        hour: state.hour,
        minute: !state.minute ? 59 : state.minute - 1,
      };
    }
    case 'SET': {
      const { hour, minute } = action.payload;
      const parsedHour = hour > 23 || hour < 0 ? 0 : hour;
      const parsedMinute = minute > 59 || minute < 0 ? 0 : minute;
      return {
        hour: parsedHour,
        minute: parsedMinute,
      };
    }
  }
};

export const timeInitializer = (value?: string | number | Date | null): TimeState => {
  const currentDate = value ? new Date(value) : new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  return {
    hour,
    minute,
  };
};
