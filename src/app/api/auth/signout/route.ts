import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const response = NextResponse.redirect(new URL("/signin", request.url));
  response.cookies.set({
    name: "accessToken",
    value: "",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
  });

  response.cookies.set({
    name: "refreshToken",
    value: "",
    httpOnly: true,
    path: "/api/auth/refresh",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
  });
  return response;
}
