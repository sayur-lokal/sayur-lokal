import { useMemo } from "react";
import { Product } from "@/types/product"; 

const getComplementaryTags = (product: Product): string[] => {
  if (!product.category) return [];
  return product.category
    .filter(tag => tag.startsWith("complement:"))
    .map(tag => tag.replace("complement:", "").trim().toLowerCase());
};

export const useComplementaryProducts = (
  currentProduct: Product,
  allProducts: Product[]
): Product[] => {
  return useMemo(() => {
    const complements = getComplementaryTags(currentProduct);
    if (!complements.length) return [];

    return allProducts.filter(prod =>
      prod.id !== currentProduct.id &&
      prod.category?.some(tag =>
        complements.includes(tag.toLowerCase().trim())
      )
    );
  }, [currentProduct, allProducts]);
};
