import * as CategoryIcon from '@moeasy/storybook/ui/icon/category';

import { components } from '../api/my-schema';

export const MeetingCategoryGroupEnum = {
  ANIMAL_NATURE: '동물/자연',
  ACTIVITY: '액티비티',
  SOCIAL_COMMUNITY: '소셜/커뮤니티',
  CULTURE_HOBBY: '문화/취미',
  CAREER_STUDY: '커리어/학습',
} as const satisfies Record<string, string>;

export const MeetingCategoryEnum = {
  PET: '반려동물',
  PLANT_NATURE: '식물/자연',
  VOLUNTEER: '봉사활동',
  ENVIRONMENT: '환경',

  GAME: '게임/오락',
  SPORTS: '운동/스포츠',
  OUTDOOR_TRAVEL: '아웃도어/여행',
  HEALTH: '건강',
  CAR_BIKE: '자동차/오토바이',
  SPORTS_WATCHING: '스포츠 관람',

  SOCIALIZE: '사교/친목',
  FOOD_DRINK: '음식/음료',
  ALCOHOL: '술',
  RELATIONSHIP: '연애/이성관계',
  FAMILY_PARENTING: '가족/육아',
  PSYCHOLOGY_COUNSELING: '심리/상담',

  BOOK_HUMANITY: '독서/인문학',
  CRAFT: '공예/만들기',
  MUSIC: '악기/음악',
  INTERIOR: '인테리어/가구',
  BEAUTY: '미용',
  CULTURE_PERFORMANCE_FESTIVAL: '문화/공연/축제',
  DANCE: '댄스/무용',
  PICTURE_VIDEO: '사진/영상',
  COOK: '요리',

  FINANCIAL_TECHNIQUE: '재테크',
  STUDY: '자기계발/공부',
  CAREER: '커리어/직장',
  LANGUAGE: '외국/언어',
  STARTUP_BUSINESS: '창업/사업',
} as const satisfies Record<string, components['schemas']['HomeCategoryDto']['name']>;
type CategoryEnumType = (typeof MeetingCategoryEnum)[keyof typeof MeetingCategoryEnum];

export type CategoryItemType = {
  key: CategoryEnumType;
  Icon: typeof CategoryIcon.BeautyIcon;
};
export const categoryList = [
  {
    title: '소셜/커뮤니티',
    category: [
      { key: '사교/친목', Icon: CategoryIcon.SocialIcon },
      { key: '음식/음료', Icon: CategoryIcon.FoodIcon },
      { key: '술', Icon: CategoryIcon.DrinkIcon },
      { key: '연애/이성관계', Icon: CategoryIcon.LoveIcon },
      { key: '가족/육아', Icon: CategoryIcon.FamilyIcon },
      { key: '심리/상담', Icon: CategoryIcon.MindIcon },
    ],
  },
  {
    title: '동물/자연',
    category: [
      { key: '반려동물', Icon: CategoryIcon.PetIcon },
      { key: '식물/자연', Icon: CategoryIcon.PlantIcon },
      { key: '봉사활동', Icon: CategoryIcon.VolunteerIcon },
      { key: '환경', Icon: CategoryIcon.EnvironmentIcon },
    ],
  },
  {
    title: '액티비티',
    category: [
      { key: '게임/오락', Icon: CategoryIcon.GameIcon },
      { key: '운동/스포츠', Icon: CategoryIcon.SportsIcon },
      { key: '아웃도어/여행', Icon: CategoryIcon.OutdoorIcon },
      { key: '건강', Icon: CategoryIcon.HealthIcon },
      { key: '자동차/오토바이', Icon: CategoryIcon.CarIcon },
      { key: '스포츠 관람', Icon: CategoryIcon.SportsWatchIcon },
    ],
  },
  {
    title: '문화/취미',
    category: [
      { key: '독서/인문학', Icon: CategoryIcon.BookIcon },
      { key: '공예/만들기', Icon: CategoryIcon.CraftIcon },
      { key: '악기/음악', Icon: CategoryIcon.MusicIcon },
      { key: '인테리어/가구', Icon: CategoryIcon.InteriorIcon },
      { key: '미용', Icon: CategoryIcon.BeautyIcon },
      { key: '문화/공연/축제', Icon: CategoryIcon.CultureIcon },
      { key: '댄스/무용', Icon: CategoryIcon.DanceIcon },
      { key: '사진/영상', Icon: CategoryIcon.MediaIcon },
      { key: '요리', Icon: CategoryIcon.FoodIcon },
    ],
  },
  {
    title: '커리어/학습',
    category: [
      { key: '재테크', Icon: CategoryIcon.PersonalFinanceIcon },
      { key: '커리어/직장', Icon: CategoryIcon.CareerIcon },
      { key: '자기계발/공부', Icon: CategoryIcon.SelfDevIcon },
      { key: '외국/언어', Icon: CategoryIcon.ForeignLanguageIcon },
      { key: '창업/사업', Icon: CategoryIcon.EmploymentIcon },
    ],
  },
] as const satisfies Array<{
  title: (typeof MeetingCategoryGroupEnum)[keyof typeof MeetingCategoryGroupEnum];
  category: Array<CategoryItemType>;
}>;
