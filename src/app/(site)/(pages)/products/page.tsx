import React from "react";

import { Metadata } from "next";
import Products from "@/components/Products";
export const metadata: Metadata = {
  title: "Shop Page | sayurlokal",
  description: "This is Shop Page for sayurlokal",
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <Products />
    </main>
  );
};

export default ShopWithSidebarPage;
