import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),       
    role: z.enum(["buyer", "seller"]),
})

export async function POST(request: NextRequest):Promise<NextResponse> {
    try {
        const body = await request.formData()
    const parsed = signupSchema.safeParse({
        email: body.get("email"),
        password: body.get("password"),
        role: body.get("role"),
    })
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.format() }, { status: 400 })
    }

    const { email, password, role } = parsed.data
    // TODO: hash the password and store it in the database

    const uid = uuidv4()

    if (role === "buyer") {
        return NextResponse.redirect(new URL("/", request.url))
    } else {
        return NextResponse.redirect(new URL(`/signup/shop?uid=${uid}`, request.url))
    }
    } catch (e) {
        const uid = uuidv4()
        console.warn({
            error_id: uid,
            message: e instanceof Error ? e.message : `${e}`,
            detail: e,
        })

        return NextResponse.redirect(new URL(`/signup/seller?error=ERR_INTERNAL_SERVER_ERROR&error_id=${uid}`, request.url))
    }


}