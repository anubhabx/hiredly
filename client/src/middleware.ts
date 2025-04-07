import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the session token from the cookies
  const sessionToken = request.cookies.get("session");
  const isAuthenticated = !!sessionToken;

  // Define public and protected paths
  const isAuthPage = 
    request.nextUrl.pathname === "/signin" || 
    request.nextUrl.pathname === "/signup";
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isPublicRoute = !isProtectedRoute;

  if (isAuthenticated) {
    // If user is authenticated and tries to access auth pages, redirect to dashboard
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    // Authenticated users can access all routes
    return NextResponse.next();
  } else {
    // If user is not authenticated and tries to access protected routes, redirect to signin
    if (isProtectedRoute) {
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("from", request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
    // Unauthenticated users can access public routes
    if (isPublicRoute) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

// Configure matcher to exclude API routes and static assets
export const config = {
  matcher: [
    // Include all routes except those that start with:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ],
};
