import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuth = !!token;

  const pathname = request.nextUrl.pathname;
  const isAuthPage =
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/admin/auth/signin");

  if (pathname.startsWith("/admin")) {
    if (!isAuth && !isAuthPage) {
      const url = new URL("/auth/signin", request.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }

    if (isAuth && token.user?.role !== "admin" && !isAuthPage) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/profile")) {
    if (!isAuth) {
      const url = new URL("/auth/signin", request.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  if (isAuth && isAuthPage) {
    const redirectTo =
      token.user?.role === "admin" ? "/admin/dashboard" : "/dashboard";
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/auth/signin",
    "/admin/auth/signin",
  ],
};
