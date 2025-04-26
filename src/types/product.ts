export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  categoryId: number; 
  id: number;
  description?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  productType?: "standard" | "premium"; // e.g. eco-friendly/organic
  ingredients?: string[]; // only for meal kits
  isEcoFriendly?: boolean;
  isOrganic?: boolean,
};
