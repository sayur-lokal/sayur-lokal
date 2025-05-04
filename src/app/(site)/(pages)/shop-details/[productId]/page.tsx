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
  params: { productId: string };
 }) {
  const { productId } = await Promise.resolve(params);
  
  return (
    <main>
      <ShopDetails productId={params.productId}/>
    </main>
  );
};

// export default ShopDetailsPage;
