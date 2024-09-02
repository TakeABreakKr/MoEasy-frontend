export type CheckBoxActionType<T> =
  | {
      type: 'ADD' | 'REMOVE' | 'TOGGLE';
      payload: T;
      predicate?: (item: T) => boolean;
    }
  | {
      type: 'RESET';
    }
  | {
      type: 'ALL';
      payload: T[];
    };

export const checkGroupReducer = <T>(state: T[], action: CheckBoxActionType<T>) => {
  const itemFinder = (value: T, predicate?: (item: T) => boolean) =>
    predicate ? state.find(predicate) : state.find((item) => item === value);
  switch (action.type) {
    case 'ADD': {
      const findItem = itemFinder(action.payload, action.predicate);
      return findItem ? state : [...state, action.payload];
    }
    case 'REMOVE': {
      const findItem = itemFinder(action.payload, action.predicate);
      return state.filter((item) => item !== findItem);
    }
    case 'TOGGLE': {
      const findItem = itemFinder(action.payload, action.predicate);
      return findItem ? state.filter((item) => item !== findItem) : [...state, action.payload];
    }
    case 'RESET':
      return [];
    case 'ALL':
      return action.payload;
    default:
      return state;
  }
};
