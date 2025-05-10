import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { createUser } from "@/lib/mock-users";
import {
  ACCESS_TOKEN_EXPIRY,
  generateAccessToken,
  generateRefreshToken,
  REFRSH_TOKEN_EXPIRY,
} from "@/lib/jwt";

const signupSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  role: z.enum(["buyer", "seller"]),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.formData();
    const parsed = signupSchema.safeParse({
      email: body.get("email"),
      password: body.get("password"),
      role: body.get("role"),
    });
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }

    const { email, password, role } = parsed.data;

    const user = await createUser({
      name: email,
      email,
      password,
      role,
    });

    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.role,
      iat: Math.floor(Date.now() / 1000),
    };

    const [accessToken, refreshToken] = await Promise.all([
      generateAccessToken(payload),
      generateRefreshToken(payload),
    ]);
    
    
    const response =
      role == "buyer"
        ? NextResponse.redirect(new URL("/", request.url))
        : NextResponse.redirect(
            new URL(`/signup/shop?uid=${user.id}`, request.url)
          );
    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: parseInt(ACCESS_TOKEN_EXPIRY) * 60,
    });

    response.cookies.set({
      name: "refreshToken",
      value: refreshToken,
      httpOnly: true,
      path: "/api/auth/refresh",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: parseInt(REFRSH_TOKEN_EXPIRY) * 60 * 60 * 24,
    });

    return response;
  } catch (e) {
    const uid = uuidv4();
    console.warn({
      error_id: uid,
      message: e instanceof Error ? e.message : `${e}`,
      detail: e,
    });

    return NextResponse.redirect(
      new URL(
        `/signup/seller?error=ERR_INTERNAL_SERVER_ERROR&error_id=${uid}`,
        request.url
      )
    );
  }
}
