export const MAX_MEMBER_COUNT_LIST = [
  '1명',
  '2명',
  '3명',
  '4명',
  '5명',
  '6명',
  '7명',
  '8명',
  '9명',
  '10명',
  '11명',
  '12명',
  '13명',
  '14명',
  '15명',
  '16명',
  '17명',
  '18명',
  '19명',
  '20명',
  '21명',
  '22명',
  '23명',
  '24명',
  '25명',
  '26명',
  '27명',
  '28명',
  '29명',
  '30명',
] as const;

export const CREATE_CREW_STRINGS = {
  TITLE: '크루 만들기',
  CREW_NAME: '크루 이름을 입력해 주세요!',
  CREW_MEMBER_COUNT: '크루의 최대 인원을 선택해 주세요!',
  CREW_LOCATION: '주로 활동하는 지역을 선택해 주세요!',
  DEFAULT_LOCATION: '지역',
  CREW_DESCRIPTION: '상세설명을 입력해 주세요!',
  CREATE: '만들기',
} as const;

export const CREATE_CREW_ERROR_MESSAGE = {
  MAX_CREW_LIMIT_EXCEEDED: '최대 크루 생성 횟수 3회를 초과했습니다.',
  DUPLICATE_CREW_NAME: '중복된 크루 이름 입니다.',
};
