export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  categoryId: number; 
  shopId: number;
  id: number;
  description?: string;
  ingredients?: string[]; // only for meal kits
  createdAt: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
