import { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault',
});

export async function middleware(request: NextRequest) {
  const i18nResponse = I18nMiddleware(request);
  i18nResponse.headers.set('x-moeasy-pathname', request.nextUrl.pathname);
  return i18nResponse;
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|images|mockServiceWorker.js|favicon.ico|robots.txt).*)'],
};
