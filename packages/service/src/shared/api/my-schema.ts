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
  '/auth/callback': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['AuthController_callback'];
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
  '/schedule/create': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ScheduleController_createSchedule'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/schedule/update': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ScheduleController_updateSchedule'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/schedule/get': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['ScheduleController_getSchedule'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/schedule/get/list': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations['ScheduleController_getScheduleList'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/schedule/withdraw': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ScheduleController_withdraw'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/schedule/delete': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations['ScheduleController_delete'];
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
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    Function: Record<string, never>;
    MeetingCreateRequest: {
      name: string;
      explanation: string;
      /** Format: binary */
      thumbnail: File;
      keywords: string[];
      limit: number;
      members: string[];
      canJoin: boolean;
    };
    MeetingUpdateRequest: {
      meeting_id: string;
      name: string;
      explanation: string;
      limit: number;
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
      canJoin: boolean;
    };
    MeetingListMeetingDto: {
      meetingId: string;
      name: string;
      explanation: string;
      /** @enum {string} */
      authority: 'WAITING' | 'MEMBER' | 'MANAGER' | 'OWNER';
      canJoin: boolean;
    };
    MeetingListResponse: {
      meetingList: components['schemas']['MeetingListMeetingDto'][];
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
    ScheduleCreateRequest: {
      meeting_id: string;
      name: string;
      explanation: string;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      reminder: string[];
      announcement: string;
      onlineYn: boolean;
      address: components['schemas']['AddressDto'];
      detailAddress: string;
      participants: string[];
    };
    ScheduleUpdateRequest: {
      meeting_id: string;
      name: string;
      explanation: string;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      reminder: string[];
      announcement: string;
      onlineYn: boolean;
      address: components['schemas']['AddressDto'];
      detailAddress: string;
      participants: string[];
      schedule_id: number;
    };
    ScheduleResponse: {
      name: string;
      explanation: string;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      announcement: string;
      onlineYn: boolean;
      address: components['schemas']['AddressDto'];
    };
    ScheduleListDto: {
      meetingId: string;
      name: string;
      explanation: string;
      onlineYn: boolean;
      /** Format: date-time */
      startDate: string;
      /** Format: date-time */
      endDate: string;
      address: components['schemas']['AddressDto'];
      announcement: string;
      detailAddress: string;
    };
    ScheduleListMeetingListDto: {
      name: string;
      thumbnail: string;
    };
    ScheduleListResponse: {
      scheduleList: components['schemas']['ScheduleListDto'][];
      meetings: components['schemas']['ScheduleListMeetingListDto'][];
    };
    ScheduleWithdrawRequest: {
      meeting_id: string;
      schedule_id: number;
    };
    ScheduleDeleteRequest: {
      meeting_id: string;
      schedule_id: number;
    };
    NotificationResponse: {
      notificationList: string[];
    };
    NotificationCheckRequest: {
      notificationIdList: string[];
    };
    HomeCategoryDto: {
      name: string;
      order: number;
    };
    HomeCategoryGroupDto: {
      name: string;
      homeCategoryList: components['schemas']['HomeCategoryDto'][];
    };
    HomePopularMeetingDto: {
      name: string;
      description: string;
      memberCount: number;
      isLikedYn: boolean;
    };
    HomeNewMeetingDto: {
      name: string;
      description: string;
      memberCount: number;
      isLikedYn: boolean;
    };
    HomeClosingTimeActivityDto: {
      name: string;
      isOnlineYn: boolean;
      description: string;
      location: string;
      /** Format: date-time */
      time: string;
      memberCount: number;
      isLiked: boolean;
    };
    HomeUpcomingActivityDto: {
      name: string;
      isOnlineYn: boolean;
      description: string;
      location: string;
      /** Format: date-time */
      time: string;
      memberCount: number;
      isLiked: boolean;
    };
    HomeMostActivatedRegionDto: {
      name: string;
      activityCount: number;
      order: number;
    };
    HomeResponse: {
      categories: components['schemas']['HomeCategoryGroupDto'][];
      popularMeetings: components['schemas']['HomePopularMeetingDto'][];
      newMeetings: components['schemas']['HomeNewMeetingDto'][];
      closingTimeActivities: components['schemas']['HomeClosingTimeActivityDto'][];
      upcomingActivities: components['schemas']['HomeUpcomingActivityDto'][];
      mostActivatedRegions: components['schemas']['HomeMostActivatedRegionDto'][];
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
  AuthController_callback: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Function'];
      };
    };
    responses: {
      201: {
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
        'application/json': string;
      };
    };
    responses: {
      201: {
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
      /** @description Meeting Entity has been successfully created. */
      200: {
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
      /** @description Meeting Entity has been successfully modified. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
      /** @description Meeting Entity has been successfully modified. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
      /** @description Meeting Entity has been successfully deleted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
      /** @description Meeting retrieved successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['MeetingResponse'];
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
        };
      };
    };
    responses: {
      /** @description Meeting list retrieved successfully. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['MeetingListResponse'];
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
      /** @description Meeting list retrieved successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['MeetingListResponse'];
        };
      };
    };
  };
  ScheduleController_createSchedule: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description info for creating a new schedule. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ScheduleCreateRequest'];
      };
    };
    responses: {
      /** @description Schedule Entity has been created. */
      200: {
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
  ScheduleController_updateSchedule: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to modify schedule. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ScheduleUpdateRequest'];
      };
    };
    responses: {
      /** @description Schedule has been updated. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
  ScheduleController_getSchedule: {
    parameters: {
      query: {
        scheduleId: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description schedule entity retrieved successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ScheduleResponse'];
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
  ScheduleController_getScheduleList: {
    parameters: {
      query: {
        /** @description schedule status: in_progress, upcoming, completed. */
        status: string[];
        /** @description Option to sort scheduleList (LATEST for latest registered, NAME for alphabetical). */
        options: 'LATEST' | 'NAME' | 'OLDEST';
        meetingId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Schedule list retrieved */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ScheduleListResponse'];
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
  ScheduleController_withdraw: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to withdraw schedule. */
    requestBody: {
      content: {
        'application/json': components['schemas']['ScheduleWithdrawRequest'];
      };
    };
    responses: {
      /** @description withdraw successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
  ScheduleController_delete: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description data to delete schedule */
    requestBody: {
      content: {
        'application/json': components['schemas']['ScheduleDeleteRequest'];
      };
    };
    responses: {
      /** @description schedule deleted successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
      /** @description notification list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['NotificationResponse'];
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
      /** @description get home data successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['HomeResponse'];
        };
      };
    };
  };
}
