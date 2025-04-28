
import { 
    badRequest, 
    internalServerError,
    redirect} from "@/lib/api-utils"
import { NextRequest, NextResponse } from "next/server";
import { ERR_USER_NOT_FOUND, ERR_PASSWORD_NOT_MATCH } from '@/lib/auth'

import { mockAuth } from "@/lib/mock-users";
import { generateAccessToken, generateRefreshToken,  ACCESS_TOKEN_EXPIRY,REFRSH_TOKEN_EXPIRY } from "@/lib/jwt";
import { NextURL } from "next/dist/server/web/next-url";
import { signInSchema } from "@/lib/sign-in";

export async function POST(request: NextRequest): Promise<NextResponse>{
    const formData = await request.formData()

    const email = formData.get('email')
    const password = formData.get('password')
    const parsed = signInSchema.safeParse({email, password})
    if (!parsed.success) {
        console.warn(`validation error, invalid sign-in parameter, ${parsed.error}`)
        return badRequest()
    }

    try {
        const user = await mockAuth({email: parsed.data.email, password:parsed.data.password})
        const payload = {
            sub: user.id,
            email: user.email,
            roles: user.role,
            iat: Math.floor(Date.now() /  1000)
        }

        const [accessToken, refreshToken] = await Promise.all([generateAccessToken(payload), generateRefreshToken(payload)])

        const response = redirect(new NextURL("/", request.url))
        response.cookies.set({
            name: 'accessToken',
            value: accessToken,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(ACCESS_TOKEN_EXPIRY) * 60
        })

        response.cookies.set({
            name: 'refreshToken',
            value: refreshToken,
            httpOnly: true,
            path: '/api/auth/refresh',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(REFRSH_TOKEN_EXPIRY) * 60 * 60 * 24
        })

        return response

    } catch(e) {
        console.warn("authentication failed", {e})
        if (e instanceof Error) {
            if (e == ERR_PASSWORD_NOT_MATCH || e == ERR_USER_NOT_FOUND) {
                return badRequest(e.message)
            }

        }
        return internalServerError()
    }


}

