import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const { pathname } = req.nextUrl;
  console.log({userId})
  // Redirect unauthenticated users to /login
  if (!userId && pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users to /dashboard
  if (userId && pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  // if (isLogoutRoute(req)) auth().redirectToSignIn();
  if (isProtectedRoute(req)) auth().protect(() => {
    if (!userId) {
      auth().redirectToSignIn();
      return false;
    }
    return true;
  });
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};