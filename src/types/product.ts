import { Review } from "./review";

export type Product = {
  title: string;
  reviews: Review[];
  price: number;
  discountedPrice: number;
  categoryId: number; 
  shopId: number;
  id: number;
  description?: string;
  createdAt: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  },
  productAttrb:{
  productType?: "standard" | "premium"; // e.g. eco-friendly/organic
  isEcoFriendly?: boolean;
  isOrganic?: boolean;
  },
  ingredients?: string[]; // only for meal kits
};
