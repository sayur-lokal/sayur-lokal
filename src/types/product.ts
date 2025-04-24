export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  categoryId: number; 
  id: number;
  description?: string;
  ingredients?: string[]; // only for meal kits
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
