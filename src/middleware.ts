import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/auth"];
const isPublicRoute = (pathname: string) => {
  return publicRoutes.some((publicPath: string) =>
    pathname.startsWith(publicPath)
  );
};

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  if (token) {
    if (isPublicRoute(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!token && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/minigames/:path*", "/users/:path*"],
};
