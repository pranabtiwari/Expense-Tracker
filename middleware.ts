import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

// Recommended matcher from Clerk for Next.js App Router
// Matches all routes except static files and Next internals, plus API routes.
export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
  ],
};