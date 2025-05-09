import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details Page | sayurlokal",
  description: "This is Shop Details Page for sayurlokal",
  // other metadata
};

export default async function ShopDetailsPage({
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
