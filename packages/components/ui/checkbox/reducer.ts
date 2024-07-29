type CheckBoxActionType<T> =
  | {
      type: 'ADD' | 'REMOVE' | 'TOGGLE';
      payload: T;
    }
  | {
      type: 'RESET';
    }
  | {
      type: 'ALL';
      payload: T[];
    };

export const checkGroupReducer = <T>(state: T[], action: CheckBoxActionType<T>) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((item) => item !== action.payload);
    case 'TOGGLE':
      return state.some((item) => item === action.payload)
        ? state.filter((item) => item !== action.payload)
        : [...state, action.payload];
    case 'RESET':
      return [];
    case 'ALL':
      return action.payload;
    default:
      return state;
  }
};
