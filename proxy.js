import { NextResponse } from 'next/server';

const protectedRoutes = [];
const loginPath = '/login';

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.has('rudra_session');

  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};