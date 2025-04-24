import { z } from "zod";
import { 
    isJSONContent, 
    unsupportedMediaType,
    badRequest, 
    internalServerError,
    okJSON} from "@/lib/api-utils"
import { NextRequest, NextResponse } from "next/server";
import { ERR_USER_NOT_FOUND, ERR_PASSWORD_NOT_MATCH } from './errors'

import { mockAuth } from "./mock-users";
import { generateAccessToken, generateRefreshToken } from "./token";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
})

export type SignInRequest = z.infer<typeof signInSchema>

export async function POST(request: NextRequest): Promise<NextResponse>{
    if (!isJSONContent(request)) {
        return unsupportedMediaType()
    }

    const res = await request.json()
    const parsed = signInSchema.safeParse(res)
    if (!parsed.success) {
        console.warn(`validation error, invalid sign-in parameter, ${parsed.error}`)
        return badRequest()
    }

    const {email, password} = parsed.data
    try {
        const user = await mockAuth({email, password})
        const payload = {
            sub: user.id,
            email: user.email,
            roles: user.role,
            iat: Math.floor(Date.now() /  1000)
        }

        const [accessToken, refreshToken] = await Promise.all([generateAccessToken(payload), generateRefreshToken(payload)])

        return okJSON({
            accessToken, refreshToken
        })

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

