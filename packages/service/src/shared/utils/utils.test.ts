import { returnValueOnCondition } from './utils';

describe('Test function returnValueOnCondition', () => {
  it('Should return 12', () => {
    const result = returnValueOnCondition(12, true);

    expect(result).toBe(12);
  });

  it('Should return undefined on false condition', () => {
    const result = returnValueOnCondition(12, false);

    expect(result).toBeUndefined();
  });
});
