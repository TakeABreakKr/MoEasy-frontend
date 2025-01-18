import * as CategoryIcon from '@moeasy/storybook/ui/icon/category';

export type CategoryItemType = { key: string; Icon: typeof CategoryIcon.BeautyIcon };
export const categoryList = [
  {
    title: '전체',
    category: [],
  },
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
      { key: '아웃도어/캠핑', Icon: CategoryIcon.OutdoorIcon },
      { key: '건강', Icon: CategoryIcon.HealthIcon },
      { key: '차/오토바이', Icon: CategoryIcon.CarIcon },
      { key: '스포츠관람', Icon: CategoryIcon.SportsWatchIcon },
    ],
  },
  {
    title: '문화/취미',
    category: [
      { key: '독서/인문학', Icon: CategoryIcon.BookIcon },
      { key: '공예/만들기', Icon: CategoryIcon.CraftIcon },
      { key: '음악/악기', Icon: CategoryIcon.MusicIcon },
      { key: '인테리어/가구', Icon: CategoryIcon.InteriorIcon },
      { key: '미용', Icon: CategoryIcon.BeautyIcon },
      { key: '문화/공연/축제', Icon: CategoryIcon.CultureIcon },
      { key: '댄스/무용', Icon: CategoryIcon.DanceIcon },
      { key: '사진/영상', Icon: CategoryIcon.MediaIcon },
      { key: '요리/제조', Icon: CategoryIcon.FoodIcon },
    ],
  },
  {
    title: '커리어/학습',
    category: [
      { key: '재태크', Icon: CategoryIcon.PersonalFinanceIcon },
      { key: '커리어/직장', Icon: CategoryIcon.CareerIcon },
      { key: '자기계발/공부', Icon: CategoryIcon.SelfDevIcon },
      { key: '외국어', Icon: CategoryIcon.ForeignLanguageIcon },
      { key: '취업/창업', Icon: CategoryIcon.EmploymentIcon },
    ],
  },
] as const;
