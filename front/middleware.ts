import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      // Only let the request through if a valid JWT/session token exists
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

// Protect every dashboard route; auth pages and the public landing page
// stay open.
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/analytics/:path*",
    "/feedback/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/profile/:path*",
    "/help/:path*",
  ],
};
