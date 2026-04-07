import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  request.cookies.delete("NEXT_LOCALE");
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
