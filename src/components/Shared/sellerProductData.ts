
import { Product } from "@/types/product";

// Dummy seller products for dashboard view
const sellerProductData: Product[] = [
  {
    title: "Telur Ayam Kampung 1 Krat isi 30 pcs",
    reviews: 12,
    price: 59000.0,
    discountedPrice: 55000.0,
    categoryId: 1, // Staples
    id: 101,
    productType: "standard",
    isOrganic: true,
    isEcoFriendly: false,
    imgs: {
      thumbnails: [
        "/images/products/eggs-thumb.png",
        "/images/products/eggs-thumb-2.png",
      ],
      previews: [
        "/images/products/eggs-preview.png",
        "/images/products/eggs-preview-2.png",
      ],
    },
  },
  {
    title: "Ubi Ungu Organik 1 kg",
    reviews: 8,
    price: 28000.0,
    discountedPrice: 26000.0,
    categoryId: 1, // Staples
    id: 102,
    productType: "premium",
    isOrganic: true,
    isEcoFriendly: true,
    imgs: {
      thumbnails: [
        "/images/products/sweet-potato-thumb.png",
        "/images/products/sweet-potato-thumb-2.png",
      ],
      previews: [
        "/images/products/sweet-potato-preview.png",
        "/images/products/sweet-potato-preview-2.png",
      ],
    },
  },
  {
    title: "Jamur Tiram Segar 500 gr",
    reviews: 5,
    price: 25000.0,
    discountedPrice: 23000.0,
    categoryId: 2, // Vegetables
    id: 103,
    productType: "standard",
    isOrganic: false,
    isEcoFriendly: true,
    imgs: {
      thumbnails: [
        "/images/products/mushroom-thumb.png",
        "/images/products/mushroom-thumb-2.png",
      ],
      previews: [
        "/images/products/mushroom-preview.png",
        "/images/products/mushroom-preview-2.png",
      ],
    },
  },
  {
    title: "Bawang Putih 250 gr",
    reviews: 10,
    price: 22000.0,
    discountedPrice: 21000.0,
    categoryId: 3, // Seasonings
    id: 104,
    productType: "premium",
    isOrganic: true,
    isEcoFriendly: true,
    imgs: {
      thumbnails: [
        "/images/products/garlic-thumb.png",
        "/images/products/garlic-thumb-2.png",
      ],
      previews: [
        "/images/products/garlic-preview.png",
        "/images/products/garlic-preview-2.png",
      ],
    },
  },
];

export default sellerProductData;