'use client';
import Cookies from 'js-cookie';

import { browserClient } from '@/shared/api/browser-client';

export default function Page() {
  return (
    <>
      <button
        onClick={() => {
          browserClient
            .POST('/auth/refresh', {
              body: {
                refreshToken: Cookies.get('RefreshToken')!,
              },
            })
            .then(({ data }) => {
              if (!data || !data.data) return;
              Cookies.set('AccessToken', data.data.accessToken);
              Cookies.set('RefreshToken', data.data.refreshToken);
            });
        }}
      >
        리프레시
      </button>
      <button
        onClick={() => {
          browserClient.GET('/home/header');
        }}
      >
        유저 정보 요청
      </button>
    </>
  );
}
