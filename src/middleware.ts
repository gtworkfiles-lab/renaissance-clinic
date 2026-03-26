import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locales = ['ua', 'ru', 'en'];

  // Перевіряємо, чи в URL вже є мова
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Ігноруємо системні файли та картинки
    if (
      pathname.startsWith('/gallery') ||
      pathname.startsWith('/icons') ||
      pathname.startsWith('/api') ||
      pathname.includes('.')
    ) {
      return;
    }

    // Редирект на українську версію за замовчуванням
    return NextResponse.redirect(new URL(`/ua${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};