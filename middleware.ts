// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request : NextRequest) {
  const token = await getToken({ req: request });
  const isAuth = !!token;
  
  const pathname = request.nextUrl.pathname;
  const isAuthPage = pathname.startsWith('/auth/signin') || pathname.startsWith('/admin/auth/signin');
  
  // Admin routes check
  if (pathname.startsWith('/admin')) {
    // Redirect unauthenticated users to login
    if (!isAuth && !isAuthPage) {
      const url = new URL('/auth/signin', request.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }
    
    // Redirect non-admin users away from admin pages
    if (isAuth && token.user?.role !== 'admin' && !isAuthPage) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }
  
  // User routes check - for protected routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    // Redirect unauthenticated users to login
    if (!isAuth) {
      const url = new URL('/auth/signin', request.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }
  }
  
  // Redirect authenticated users away from login pages
  if (isAuth && isAuthPage) {
    const redirectTo = token.user?.role === 'admin' ? '/admin/dashboard' : '/dashboard';
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
    '/auth/signin',
    '/admin/auth/signin',
  ],
};