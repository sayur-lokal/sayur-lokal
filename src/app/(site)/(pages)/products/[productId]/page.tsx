import React from "react";
import ShopDetails from "@/components/ShopDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const resolvedParams = await params;
  const { productId } = resolvedParams;

  return (
    <main>
      <ShopDetails productId={productId} />
    </main>
  );
}