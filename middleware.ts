import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "vacei_session";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existing = request.cookies.get(COOKIE_NAME)?.value;
  if (!existing) {
    const token = crypto.randomUUID();
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

