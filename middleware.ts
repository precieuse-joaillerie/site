// middleware.ts or middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // Allow other requests to proceed as normal
  return NextResponse.next();
}

// Apply middleware for all routes
export const config = {
  matcher: ["/:path*"], // Match all paths
};
