import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details Page | sayurlokal",
  description: "This is Shop Details Page for sayurlokal",
  // other metadata
};

const ShopDetailsPage = ({ params }: { params: { productId: string } }) => {
  return (
    <main>
      <ShopDetails productId={params.productId}/>
    </main>
  );
};

export default ShopDetailsPage;
