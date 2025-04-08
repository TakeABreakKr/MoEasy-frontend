import { categoryList } from '@/shared/consts/category';

export const isValidGroupName = (groupName?: string | null): boolean => {
  return !!groupName && categoryList.some((group) => group.title === groupName);
};
