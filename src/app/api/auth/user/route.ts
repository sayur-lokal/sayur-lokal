import { NextRequest, NextResponse } from "next/server";
import { okJSON, unauthorized } from "@/lib/api-utils"
import { decodeAccessToken } from "@/lib/jwt"
import { getMockedUser } from "@/lib/mock-users"

export async function GET(request: NextRequest): Promise<NextResponse> {
    const accesToken = request.cookies.get('accessToken').value
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

    const user = await getMockedUser(sub)
    if (!user) {
        return unauthorized()
    }

    return okJSON(user)
}