import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse, NextRequest } from "next/server";

export const isJSONContent = (request: NextRequest): boolean => {
  return request.headers
    .get("content-type")
    .toLowerCase()
    .includes("application/json");
};

export const unsupportedMediaType = (message?: string): NextResponse =>
  new NextResponse(
    JSON.stringify({
      message: message || "Unsupported Media Type",
    }),
    {
      status: 415,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );

export const badRequest = (message?: string): NextResponse =>
  new NextResponse(
    JSON.stringify({
      message: message || "Bad Request",
    }),
    {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );

export const internalServerError = (message?: string): NextResponse =>
  new NextResponse(
    JSON.stringify({
      message: message || "Internal Server Error",
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );

export const okJSON = (data: any): NextResponse =>
  new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

export const redirect = (url: NextURL | URL) => NextResponse.redirect(url);

export const unauthorized = (message?: string): NextResponse =>
  new NextResponse(
    JSON.stringify({
      message: message || "Unauthorized",
    }),
    {
      status: 401,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
