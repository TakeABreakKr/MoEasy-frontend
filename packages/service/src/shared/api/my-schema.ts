export interface paths {
  '/': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['AppController_healthCheck'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/login': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_login'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/login/url': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['AuthController_getLoginUrl'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/callback': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['AuthController_callback'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/auth/refresh': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_refreshAccessToken'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/create': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MeetingController_createMeeting'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/update': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MeetingController_updateMeeting'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/update/thumbnail': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MeetingController_updateMeetingThumbnail'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/delete': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MeetingController_deleteMeeting'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/get': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MeetingController_getMeeting'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/get/list': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MeetingController_getMeetingList'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/lookAround': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MeetingController_lookAroundMeetingList'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/meeting/like': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MeetingController_likeMeeting'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/search': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MemberController_search'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/get': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MemberController_getMember'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/withdraw': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MemberController_withdraw'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/authority/update': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MemberController_updateAuthority'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/delete': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MemberController_deleteMember'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/join': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MemberController_join'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/waiting/get': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['MemberController_getWaitingList'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/member/manage': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['MemberController_manageMemberJoin'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/create': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ActivityController_createActivity'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/update': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ActivityController_updateActivity'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/get': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['ActivityController_getActivity'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/get/list': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['ActivityController_getActivityList'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/withdraw': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ActivityController_withdraw'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/activity/delete': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ActivityController_delete'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/notification': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['NotificationController_getNotifications'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/notification/check': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['NotificationController_checkNotification'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/home': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['HomeController_getHome'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/home/cache': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['HomeController_getCachedHome'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/home/header': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['HomeController_getHeader'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    RefreshTokenResponse: {
      accessToken: string;
      refreshToken: string;
    };
    RefreshTokenRequest: {
      refreshToken: string;
    };
    MeetingCreateRequest: {
      name: string;
      /**
       * @example 자기계발/공부
       * @enum {string}
       */
      category:
        | '반려동물'
        | '식물/자연'
        | '봉사활동'
        | '환경'
        | '게임/오락'
        | '운동/스포츠'
        | '아웃도어/여행'
        | '건강'
        | '자동차/오토바이'
        | '스포츠 관람'
        | '사교/친목'
        | '음식/음료'
        | '술'
        | '연애/이성관계'
        | '가족/육아'
        | '심리/상담'
        | '독서/인문학'
        | '공예/만들기'
        | '악기/음악'
        | '인테리어/가구'
        | '미용'
        | '문화/공연/축제'
        | '댄스/무용'
        | '사진/영상'
        | '요리'
        | '재테크'
        | '자기계발/공부'
        | '커리어/직장'
        | '외국/언어'
        | '창업/사업';
      explanation: string;
      /** Format: binary */
      thumbnail: File;
      keywords: string[];
      limit: number;
      publicYn: boolean;
      members: string[];
      canJoin: boolean;
    };
    MeetingUpdateRequest: {
      meetingId: string;
      name: string;
      explanation: string;
      limit: number;
      publicYn: boolean;
      canJoin: boolean;
    };
    MeetingThumbnailUpdateRequest: {
      meetingId: string;
      /** Format: binary */
      thumbnail: File;
    };
    MeetingMemberDto: {
      username: string;
      /** @enum {string} */
      authority: 'WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER';
    };
    MeetingResponse: {
      name: string;
      explanation: string;
      limit: number;
      members: components['schemas']['MeetingMemberDto'][];
      thumbnail: string;
      category: string;
      memberCount: number;
      canJoin: boolean;
      likedYn: boolean;
      likeCount: number;
    };
    MeetingListMeetingDto: {
      meetingId: string;
      name: string;
      explanation: string;
      /** @enum {string} */
      authority: 'WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER';
      canJoin: boolean;
      likedYn: boolean;
    };
    MeetingListResponse: {
      meetingList: components['schemas']['MeetingListMeetingDto'][];
    };
    MemberSearchDto: {
      userId: number;
      nickname: string;
    };
    MemberSearchResponse: {
      memberList: components['schemas']['MemberSearchDto'][];
    };
    MemberResponse: {
      username: string;
      explanation: string;
      authority: string;
    };
    MemberAuthorityUpdateRequest: {
      userId: number;
      meetingId: string;
      isManager: boolean;
    };
    MemberDeleteRequest: {
      meetingId: string;
      memberId: number;
    };
    MemberJoinRequest: {
      meetingId: string;
      joinMessage: string;
    };
    MemberWaitingListDto: {
      name: string;
      applicationMessage: string;
    };
    MemberWaitingListMeetingDto: {
      name: string;
      members: components['schemas']['MemberWaitingListDto'][];
    };
    MemberWaitingListResponse: {
      meetings: components['schemas']['MemberWaitingListMeetingDto'][];
    };
    MemberJoinManageRequest: {
      meetingId: string;
      memberId: number;
      isAccepted: boolean;
    };
    AddressDto: {
      zonecode: string;
      address: string;
      addressEnglish: string;
      addressType: string;
      userSelectedType: string;
      noSelected: string;
      userLanguageType: string;
      roadAddress: string;
      roadAddressEnglish: string;
      jibunAddress: string;
      jibunAddressEnglish: string;
      autoRoadAddress: string;
      autoRoadAddressEnglish: string;
      autoJibunAddress: string;
      autoJibunAddressEnglish: string;
      buildingCode: string;
      buildingName: string;
      apartment: string;
      sido: string;
      sidoEnglish: string;
      sigungu: string;
      sigunguEnglish: string;
      sigunguCode: string;
      roadnameCode: string;
      bcode: string;
      roadname: string;
      roadnameEnglish: string;
      bname: string;
      bnameEnglish: string;
      bname1: string;
      bname1English: string;
      bname2: string;
      bname2English: string;
      hname: string;
      query: string;
    };
    ActivityCreateRequest: {
      meetingId: string;
      name: string;
      thumbnail: string;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      reminder: string[];
      announcement: string;
      onlineYn: boolean;
      onlineLink: string;
      address: components['schemas']['AddressDto'];
      detailAddress: string;
      participantLimit: number;
      participants: string[];
    };
    ActivityUpdateRequest: {
      meetingId: string;
      name: string;
      thumbnail: string;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      reminder: string[];
      announcement: string;
      onlineYn: boolean;
      onlineLink: string;
      address: components['schemas']['AddressDto'];
      detailAddress: string;
      participantLimit: number;
      participants: string[];
      activityId: number;
    };
    ActivityMemberDto: {
      username: string;
      /** @enum {string} */
      authority: 'WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER';
    };
    ActivityResponse: {
      name: string;
      /** Format: date-time */
      startDate: string;
      announcement: string;
      onlineYn: boolean;
      /**
       * @example 서초구
       * @enum {string}
       */
      region:
        | '강서구'
        | '양천구'
        | '영등포구'
        | '용산구'
        | '은평구'
        | '종로구'
        | '중구'
        | '중랑구'
        | '동대문구'
        | '동작구'
        | '마포구'
        | '서초구'
        | '서대문구'
        | '성동구'
        | '성북구'
        | '송파구'
        | '강남구'
        | '강동구'
        | '강북구'
        | '관악구'
        | '광진구'
        | '구로구'
        | '금천구'
        | '노원구'
        | '도봉구'
        | '수원시'
        | '성남시'
        | '고양시'
        | '용인시'
        | '부천시'
        | '안산시'
        | '안양시'
        | '남양주시'
        | '화성시'
        | '평택시'
        | '의정부시'
        | '시흥시'
        | '파주시'
        | '김포시'
        | '광명시'
        | '광주시'
        | '구리시'
        | '오산시'
        | '군포시'
        | '의왕시'
        | '하남시'
        | '양주시'
        | '동두천시'
        | '안성시'
        | '여주시'
        | '이천시'
        | '포천시'
        | '가평군'
        | '양평군'
        | '연천군'
        | '부산'
        | '경남'
        | '인천'
        | '경북'
        | '대구'
        | '충남'
        | '전남'
        | '전북'
        | '충북'
        | '강원'
        | '대전'
        | '광주'
        | '울산'
        | '제주'
        | '세종';
      thumbnail: string;
      participantLimit: number;
      participantCount: number;
      onlineLink: string;
      members: components['schemas']['ActivityMemberDto'][];
    };
    ActivityListDto: {
      meetingId: string;
      name: string;
      thumbnail: string;
      onlineYn: boolean;
      /** Format: date-time */
      startDate: string;
      participantCount: number;
      participantLimit: number;
      onlineLink: string;
      /**
       * @example 서초구
       * @enum {string}
       */
      region:
        | '강서구'
        | '양천구'
        | '영등포구'
        | '용산구'
        | '은평구'
        | '종로구'
        | '중구'
        | '중랑구'
        | '동대문구'
        | '동작구'
        | '마포구'
        | '서초구'
        | '서대문구'
        | '성동구'
        | '성북구'
        | '송파구'
        | '강남구'
        | '강동구'
        | '강북구'
        | '관악구'
        | '광진구'
        | '구로구'
        | '금천구'
        | '노원구'
        | '도봉구'
        | '수원시'
        | '성남시'
        | '고양시'
        | '용인시'
        | '부천시'
        | '안산시'
        | '안양시'
        | '남양주시'
        | '화성시'
        | '평택시'
        | '의정부시'
        | '시흥시'
        | '파주시'
        | '김포시'
        | '광명시'
        | '광주시'
        | '구리시'
        | '오산시'
        | '군포시'
        | '의왕시'
        | '하남시'
        | '양주시'
        | '동두천시'
        | '안성시'
        | '여주시'
        | '이천시'
        | '포천시'
        | '가평군'
        | '양평군'
        | '연천군'
        | '부산'
        | '경남'
        | '인천'
        | '경북'
        | '대구'
        | '충남'
        | '전남'
        | '전북'
        | '충북'
        | '강원'
        | '대전'
        | '광주'
        | '울산'
        | '제주'
        | '세종';
    };
    ActivityListMeetingListDto: {
      name: string;
      thumbnail: string;
    };
    ActivityListResponse: {
      activityList: components['schemas']['ActivityListDto'][];
      meetings: components['schemas']['ActivityListMeetingListDto'][];
    };
    ActivityWithdrawRequest: {
      meetingId: string;
      activityId: number;
    };
    ActivityDeleteRequest: {
      meetingId: string;
      activityId: number;
    };
    NotificationResponse: {
      notificationList: string[];
    };
    NotificationCheckRequest: {
      notificationIdList: string[];
    };
    HomeNewMeetingDto: {
      id: string;
      name: string;
      explanation: string;
      memberCount: number;
      thumbnail: string;
      likedYn: boolean;
    };
    ActivityParticipantDto: {
      thumbnail: string;
      /**
       * @example OWNER
       * @enum {string}
       */
      authority: 'WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER';
    };
    HomeClosingTimeActivityDto: {
      id: number;
      activityName: string;
      isOnlineYn: boolean;
      onlineLink: string;
      meetingName: string;
      thumbnail: string;
      /**
       * @example 서초구
       * @enum {string}
       */
      region:
        | '강서구'
        | '양천구'
        | '영등포구'
        | '용산구'
        | '은평구'
        | '종로구'
        | '중구'
        | '중랑구'
        | '동대문구'
        | '동작구'
        | '마포구'
        | '서초구'
        | '서대문구'
        | '성동구'
        | '성북구'
        | '송파구'
        | '강남구'
        | '강동구'
        | '강북구'
        | '관악구'
        | '광진구'
        | '구로구'
        | '금천구'
        | '노원구'
        | '도봉구'
        | '수원시'
        | '성남시'
        | '고양시'
        | '용인시'
        | '부천시'
        | '안산시'
        | '안양시'
        | '남양주시'
        | '화성시'
        | '평택시'
        | '의정부시'
        | '시흥시'
        | '파주시'
        | '김포시'
        | '광명시'
        | '광주시'
        | '구리시'
        | '오산시'
        | '군포시'
        | '의왕시'
        | '하남시'
        | '양주시'
        | '동두천시'
        | '안성시'
        | '여주시'
        | '이천시'
        | '포천시'
        | '가평군'
        | '양평군'
        | '연천군'
        | '부산'
        | '경남'
        | '인천'
        | '경북'
        | '대구'
        | '충남'
        | '전남'
        | '전북'
        | '충북'
        | '강원'
        | '대전'
        | '광주'
        | '울산'
        | '제주'
        | '세종';
      /** Format: date-time */
      time: string;
      participantCount: number;
      participantLimit: number;
      participants: components['schemas']['ActivityParticipantDto'][];
    };
    HomeUpcomingActivityDto: {
      id: number;
      activityName: string;
      thumbnail: string;
      isOnlineYn: boolean;
      onlineLink: string;
      meetingName: string;
      /**
       * @example 서초구
       * @enum {string}
       */
      region:
        | '강서구'
        | '양천구'
        | '영등포구'
        | '용산구'
        | '은평구'
        | '종로구'
        | '중구'
        | '중랑구'
        | '동대문구'
        | '동작구'
        | '마포구'
        | '서초구'
        | '서대문구'
        | '성동구'
        | '성북구'
        | '송파구'
        | '강남구'
        | '강동구'
        | '강북구'
        | '관악구'
        | '광진구'
        | '구로구'
        | '금천구'
        | '노원구'
        | '도봉구'
        | '수원시'
        | '성남시'
        | '고양시'
        | '용인시'
        | '부천시'
        | '안산시'
        | '안양시'
        | '남양주시'
        | '화성시'
        | '평택시'
        | '의정부시'
        | '시흥시'
        | '파주시'
        | '김포시'
        | '광명시'
        | '광주시'
        | '구리시'
        | '오산시'
        | '군포시'
        | '의왕시'
        | '하남시'
        | '양주시'
        | '동두천시'
        | '안성시'
        | '여주시'
        | '이천시'
        | '포천시'
        | '가평군'
        | '양평군'
        | '연천군'
        | '부산'
        | '경남'
        | '인천'
        | '경북'
        | '대구'
        | '충남'
        | '전남'
        | '전북'
        | '충북'
        | '강원'
        | '대전'
        | '광주'
        | '울산'
        | '제주'
        | '세종';
      /** Format: date-time */
      time: string;
      participantCount: number;
      participantLimit: number;
      participants: components['schemas']['ActivityParticipantDto'][];
    };
    HomePopularMeetingDto: {
      id: string;
      name: string;
      thumbnail: string;
      explanation: string;
      memberCount: number;
      likedYn: boolean;
    };
    HomeResponse: {
      newMeetings: components['schemas']['HomeNewMeetingDto'][];
      closingTimeActivities: components['schemas']['HomeClosingTimeActivityDto'][];
      upcomingActivities: components['schemas']['HomeUpcomingActivityDto'][];
      popularMeetings: components['schemas']['HomePopularMeetingDto'][];
    };
    HomeCategoryDto: {
      /**
       * @example 커리어/직장
       * @enum {string}
       */
      name:
        | '반려동물'
        | '식물/자연'
        | '봉사활동'
        | '환경'
        | '게임/오락'
        | '운동/스포츠'
        | '아웃도어/여행'
        | '건강'
        | '자동차/오토바이'
        | '스포츠 관람'
        | '사교/친목'
        | '음식/음료'
        | '술'
        | '연애/이성관계'
        | '가족/육아'
        | '심리/상담'
        | '독서/인문학'
        | '공예/만들기'
        | '악기/음악'
        | '인테리어/가구'
        | '미용'
        | '문화/공연/축제'
        | '댄스/무용'
        | '사진/영상'
        | '요리'
        | '재테크'
        | '자기계발/공부'
        | '커리어/직장'
        | '외국/언어'
        | '창업/사업';
      order: number;
    };
    HomeCategoryGroupDto: {
      /**
       * @example 액티비티
       * @enum {string}
       */
      name: '동물/자연' | '액티비티' | '소셜/커뮤니티' | '문화/취미' | '커리어/학습';
      homeCategoryList: components['schemas']['HomeCategoryDto'][];
    };
    HomeMostActivatedRegionDto: {
      /**
       * @example 서초구
       * @enum {string}
       */
      name:
        | '강서구'
        | '양천구'
        | '영등포구'
        | '용산구'
        | '은평구'
        | '종로구'
        | '중구'
        | '중랑구'
        | '동대문구'
        | '동작구'
        | '마포구'
        | '서초구'
        | '서대문구'
        | '성동구'
        | '성북구'
        | '송파구'
        | '강남구'
        | '강동구'
        | '강북구'
        | '관악구'
        | '광진구'
        | '구로구'
        | '금천구'
        | '노원구'
        | '도봉구'
        | '수원시'
        | '성남시'
        | '고양시'
        | '용인시'
        | '부천시'
        | '안산시'
        | '안양시'
        | '남양주시'
        | '화성시'
        | '평택시'
        | '의정부시'
        | '시흥시'
        | '파주시'
        | '김포시'
        | '광명시'
        | '광주시'
        | '구리시'
        | '오산시'
        | '군포시'
        | '의왕시'
        | '하남시'
        | '양주시'
        | '동두천시'
        | '안성시'
        | '여주시'
        | '이천시'
        | '포천시'
        | '가평군'
        | '양평군'
        | '연천군'
        | '부산'
        | '경남'
        | '인천'
        | '경북'
        | '대구'
        | '충남'
        | '전남'
        | '전북'
        | '충북'
        | '강원'
        | '대전'
        | '광주'
        | '울산'
        | '제주'
        | '세종';
      activityCount: number;
      order: number;
    };
    HomeCachedResponse: {
      categories: components['schemas']['HomeCategoryGroupDto'][];
      mostActivatedRegions: components['schemas']['HomeMostActivatedRegionDto'][];
    };
    HeaderResponse: {
      id: number;
      thumbnail: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  AppController_healthCheck: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_login: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_getLoginUrl: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_callback: {
    parameters: {
      query: {
        code: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_refreshAccessToken: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['RefreshTokenRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['RefreshTokenResponse'];
          };
        };
      };
      /** @description invalid refresh token */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_createMeeting: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data required to create a new meeting */
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['MeetingCreateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_updateMeeting: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Basic values to modify meetings */
    requestBody: {
      content: {
        'application/json': components['schemas']['MeetingUpdateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_updateMeetingThumbnail: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data required to update thumbnail */
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['MeetingThumbnailUpdateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_deleteMeeting: {
    parameters: {
      query: {
        meetingId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_getMeeting: {
    parameters: {
      query: {
        meetingId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MeetingResponse'];
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MeetingController_getMeetingList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Filter meetings by authority and sort by options. */
    requestBody: {
      content: {
        'application/json': {
          /** @description List of authority types to filter meetings. */
          authorities?: ('WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER')[];
          /**
           * @description Option to sort meetingList (LATEST for latest registered, NAME for alphabetical).
           * @enum {string}
           */
          options?: 'LATEST' | 'NAME';
          /** @description If true, return only liked meetings. */
          onlyLiked?: boolean;
        };
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MeetingListResponse'];
          };
        };
      };
    };
  };
  MeetingController_lookAroundMeetingList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MeetingListResponse'];
          };
        };
      };
    };
  };
  MeetingController_likeMeeting: {
    parameters: {
      query: {
        meetingId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_search: {
    parameters: {
      query: {
        keyword: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MemberSearchResponse'];
          };
        };
      };
    };
  };
  MemberController_getMember: {
    parameters: {
      query: {
        meetingId: string;
        userId: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MemberResponse'];
          };
        };
      };
      /** @description 해당 멤버를 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_withdraw: {
    parameters: {
      query: {
        meetingId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_updateAuthority: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to update member authority */
    requestBody: {
      content: {
        'application/json': components['schemas']['MemberAuthorityUpdateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_deleteMember: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description info for deleting a member */
    requestBody: {
      content: {
        'application/json': components['schemas']['MemberDeleteRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_join: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data required to become a meeting member. */
    requestBody: {
      content: {
        'application/json': components['schemas']['MemberJoinRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 모임을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_getWaitingList: {
    parameters: {
      query: {
        meetingId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['MemberWaitingListResponse'];
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MemberController_manageMemberJoin: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data required for member approval */
    requestBody: {
      content: {
        'application/json': components['schemas']['MemberJoinManageRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_createActivity: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description info for creating a new activity. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ActivityCreateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_updateActivity: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to modify activity. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ActivityUpdateRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 일정을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_getActivity: {
    parameters: {
      query: {
        activityId: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['ActivityResponse'];
          };
        };
      };
      /** @description 해당 일정을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_getActivityList: {
    parameters: {
      query: {
        /** @description activity status: in_progress, upcoming, completed. */
        status: string[];
        /** @description Option to sort activityList (LATEST for latest registered, NAME for alphabetical). */
        options: 'LATEST' | 'NAME' | 'OLDEST';
        meetingId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['ActivityListResponse'];
          };
        };
      };
      /** @description 해당 일정을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_withdraw: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to withdraw activity. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ActivityWithdrawRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 일정을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ActivityController_delete: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to delete activity */
    requestBody: {
      content: {
        'application/json': components['schemas']['ActivityDeleteRequest'];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
          };
        };
      };
      /** @description 해당 일정을 찾을 수 없습니다. */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  NotificationController_getNotifications: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['NotificationResponse'];
          };
        };
      };
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 모임 구성원만 초대 요청을 할 수 있습니다. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  NotificationController_checkNotification: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['NotificationCheckRequest'];
      };
    };
    responses: {
      /** @description 존재하지 않는 요청자입니다. */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description 모임 구성원만 초대 요청을 할 수 있습니다. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  HomeController_getHome: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['HomeResponse'];
          };
        };
      };
    };
  };
  HomeController_getCachedHome: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['HomeCachedResponse'];
          };
        };
      };
    };
  };
  HomeController_getHeader: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example 200 */
            statusCode?: number;
            /** @example Success */
            message?: string;
            data?: components['schemas']['HeaderResponse'];
          };
        };
      };
    };
  };
}
