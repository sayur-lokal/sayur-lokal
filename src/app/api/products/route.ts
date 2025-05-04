import { NextRequest, NextResponse } from "next/server";
import { parseProductQuery } from "@/types/productQuery";
import { ValidationError } from "@/types/errors";
import { badRequest, internalServerError } from "@/lib/api-utils";
import shopData from "@/components/Shared/DummyData/shopData";

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        const params = request.nextUrl.searchParams
        const query = parseProductQuery({
            page: params.get("page") || 1,
            limit: params.get("limit") || 10,
            // category: params.get("category"),
            // name: params.get("name"),
            // price_min: params.get("price_min"),
            // price_max: params.get("price_max")
        })

        let filtered = shopData
        // if (query.category && query.category.length > 0) {
        //     filtered = filtered.filter(product => hasAtleastOne(query.category!, product.category))
        // }

        // if (query.name) {
        //     filtered = filtered.filter(product => product.title.includes(query.name!))
        // }

        // if (query.price_min) {
        //     filtered = filtered.filter(product => product.price >= query.price_min!)
        // }

        // if (query.price_max) {
        //     filtered = filtered.filter(product => product.price <= query.price_max!)
        // }

        const total = filtered.length
        const start = (query.page - 1) * query.limit
        const end = start + query.limit
        const paginated = filtered.slice(start, end)

        return NextResponse.json({
            data: paginated,
            total: total,
            page: query.page,
            limit: query.limit
        })

    } catch(e) {
        console.warn("error getting product list", e)
        if (e instanceof ValidationError) {
            return badRequest(e.message)
        }

        return internalServerError()
    }

}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const newProduct = await request.json();
        // In a real application, you would validate newProduct and save it to a database.
        // For this example, we'll just add it to the in-memory shopData array.
        // This change will not persist across server restarts.
        shopData.push(newProduct);

        return NextResponse.json({ message: "Product added successfully", product: newProduct }, { status: 201 });
    } catch (e) {
        console.error("Error adding new product", e);
        return internalServerError("Failed to add product");
    }
}

const hasAtleastOne = (c1: string[], c2: string[]): boolean => {
    for (const c of c1) {
        for (const b of c2) {
            if (c.trim().toLowerCase() === b.trim().toLowerCase()) {
                return true
            }
        }
    }

    return false
}