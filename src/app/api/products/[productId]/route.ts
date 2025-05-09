import { shopData } from "@/components/Shared/DummyData/shopData";
import { Product } from "@/types/product";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ productId: string }> }
  ) {
    const resolvedParams = await context.params;
    const { productId } = resolvedParams;
  
    if (!productId) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }
  

    const product: Product | undefined = shopData.find((p) => p.id === productId);
  
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  
    const relatedProducts = shopData.filter(
        (p) => p.category === product.category && p.id !== product.id
      );

    return NextResponse.json({
        ...product,
        relatedProducts,
    });
  }