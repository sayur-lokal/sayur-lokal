import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

interface Props {
  params: { productId: string };
}

export const metadata: Metadata = {
  title: "Shop Details Page | sayurlokal",
  description: "This is Shop Details Page for sayurlokal",
  // other metadata
};


export default function ShopDetailsPage({ params }: Props) {
  const { productId } = params;

  return (
    <main>
      <ShopDetails productId={productId} />
    </main>
  );
};

// export default ShopDetailsPage;
