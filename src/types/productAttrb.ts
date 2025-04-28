export type ProductAttrb = {
  id: number;
  productType: "standard" | "premium"; // e.g. eco-friendly/organic
  isEcoFriendly?: boolean;
  isOrganic?: boolean,
};