export const filterLatestItems = [
  { key: 'join', value: '최신 가입순' },
  { key: 'activity', value: '최신 활동순' },
  { key: 'count', value: '많은 인원순' },
] as const;

export const filterRoleItems = [
  { key: 'OWNER', value: '모임장' },
  { key: 'MANAGER', value: '매니저' },
  { key: 'MEMBER', value: '모임원' },
] as const;
