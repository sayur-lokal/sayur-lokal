import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid'

const createShopSchema = z.object({
    uid: z.string().uuid(),
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    phone: z.coerce.number(),
    address: z.string().min(1, "Address is required"),
    isEcoFriendly: z.coerce.boolean().default(false),
})

type CreateShopSchema = z.infer<typeof createShopSchema>


export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.formData();

        const parsed = createShopSchema.safeParse({
            uid: body.get("uid"),
            name: body.get("name"),
            description: body.get("description"),
            phone: body.get("phone"),
            address: body.get("address"),
            isEcoFriendly: body.get("isEcoFriendly"),
        })

        if (!parsed.success) {
            return NextResponse.redirect(new URL(`/signup/shop?error=ERR_INVALID_SHOP_DATA&error_data=${JSON.stringify(parsed.error)}&uid=${body.get("uid")}`, request.url))
        }

        const { name, description, phone, address, isEcoFriendly } = parsed.data

        // TODO: save the shop data to the database

        const id = uuidv4()
        return NextResponse.redirect(new URL(`/shop/${id}`, request.url))
    } catch (e) {
        const uid = uuidv4()
        console.warn({
            error_id: uid,
            message: e instanceof Error ? e.message : `${e}`,
            detail: e,
        })

        return NextResponse.redirect(new URL(`/signup/shop?error=ERR_INTERNAL_SERVER_ERROR&error_id=${uid}`, request.url))
    }
}