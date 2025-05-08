import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details Page | sayurlokal",
  description: "This is Shop Details Page for sayurlokal",
  // other metadata
};

interface Props {
  params: {
    productId: string;
  };
}

export default function ShopDetailsPage({ params }: Props) {
  return (
    <main>
      <ShopDetails />
    </main>
  );
}
