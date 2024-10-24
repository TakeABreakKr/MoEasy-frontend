import { useCallback, useState } from 'react';

export const useOrderToggle = <T = string>(value: T[]) => {
  const [index, setIndex] = useState(0);
  const arrayLength = value.length;

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1 === arrayLength ? 0 : prev + 1));
  }, [arrayLength]);

  return [value[index], nextStep] as const;
};
