import { SEARCH_AUTOSAVE_OPTION_KEY, SEARCH_RECENT_KEYWORD_OPTION_KEY } from '@/shared/consts/search';
import { createUseLocalStorage, createUseStringLocalStorage } from '@/shared/hooks/use-local-storage';

import { emptyArray } from '@moeasy/storybook/utils/lib/noop';

export const useKeywordAutoSavePrimitive = createUseStringLocalStorage<'ON' | 'OFF'>(SEARCH_AUTOSAVE_OPTION_KEY, 'ON');

export const useKeywordAutoSave = () => {
  const [autoSaveStatus, dispatch] = useKeywordAutoSavePrimitive();
  const toggleAutoSaveState = () => dispatch((prev) => (prev === 'ON' ? 'OFF' : 'ON'));
  return [autoSaveStatus === 'ON', toggleAutoSaveState] as const;
};

export const useRecentKeyword = createUseLocalStorage<string[]>(SEARCH_RECENT_KEYWORD_OPTION_KEY, emptyArray);
