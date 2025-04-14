import { NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { discordLoginUrl } from './shared/consts/login';

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault',
});

const refreshIfExpired = async (request: NextRequest) => {
  const accessToken = request.cookies.get('AccessToken');
  if (!accessToken) return null;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/home/header`, {
    headers: {
      'access-token': accessToken.value,
    },
  });
  if (response.ok) return null;
  if (response.status === 401) {
    return NextResponse.redirect(new URL(discordLoginUrl, request.url));
  }
  if (response.status === 410) {
    const refreshToken = request.cookies.get('RefreshToken');
    if (!refreshToken) return null;
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshToken.value }),
    });
    if (!refreshResponse.ok) return null;
    const { data } = await refreshResponse.json();
    if (!data) return null;
    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  }
  return null;
};

export async function middleware(request: NextRequest) {
  const i18nResponse = I18nMiddleware(request);
  const tokenData = await refreshIfExpired(request);
  if (tokenData instanceof NextResponse) {
    return tokenData;
  } else if (tokenData) {
    i18nResponse.cookies.set('AccessToken', tokenData.accessToken);
    i18nResponse.cookies.set('RefreshToken', tokenData.refreshToken);
  }
  return i18nResponse;
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|images|mockServiceWorker.js|favicon.ico|robots.txt).*)'],
};
