import { NextRequest, NextResponse } from "next/server";
import { okJSON, unauthorized } from "@/lib/api-utils"
import { decodeAccessToken } from "@/lib/jwt"
import { getMockedUser, getUser } from "@/lib/mock-users"

export async function GET(request: NextRequest): Promise<NextResponse> {
    const accesToken = request.cookies.get('accessToken')?.value
    if (!accesToken) {
        return unauthorized()
    }

    const payload = decodeAccessToken(accesToken)
    if (!payload) {
        return unauthorized()
    }
    
    const sub = payload["sub"]
    if (!sub) {
        return unauthorized()
    }

    const user = await getUser(sub)
    if (!user) {
        const mockedUser = await getMockedUser(sub)
        if (!mockedUser) {
            return unauthorized()
        }

        return okJSON(mockedUser)
    }
    
    return okJSON(user)
}