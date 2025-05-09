import { NextRequest, NextResponse } from "next/server";
import { parseProductQuery, queryProducts } from "@/lib/products/query-products";
import { ValidationError } from "@/types/errors";
import { badRequest, internalServerError } from "@/lib/api-utils";
import shopData from "@/components/Shared/DummyData/shopData";

export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        const params = request.nextUrl.searchParams
        const query = parseProductQuery(params)
        const products = await queryProducts(query)
        return NextResponse.json(products)
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