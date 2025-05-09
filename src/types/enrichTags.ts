import { Product } from "@/types/product";

export const enrichTags = (product: Product): Product => {
  const enrichedTags = new Set(product.category || []);

  if (product.productAttrb?.isOrganic) enrichedTags.add("organic");
  if (product.productAttrb?.isEcoFriendly) enrichedTags.add("eco");
  if (product.productAttrb?.productType === "premium") enrichedTags.add("premium");
  if (product.productAttrb?.productType === "standard") enrichedTags.add("standard");

  return {
    ...product,
    category: Array.from(enrichedTags),
  };
};
