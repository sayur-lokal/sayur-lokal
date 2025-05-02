
import { Product } from "@/types/product";

// Dummy seller products for dashboard view
const sellerProductData: Product[] = [
  {
    title: "Telur Ayam Fresh 1 Krat isi 30pcs",
    reviews: [],
    price: 59000.0,
    discountedPrice: 57000.0,
    categoryId: 1,
    shopId: 1, //"products from Seller A"
    id: 101,
    createdAt: "2025-04-01T08:00:00Z",
    description: "Telur ayam kampung segar, 1 krat isi 30 butir.",
    imgs: {
      thumbnails: [
        "/images/products/telur_1kg_thumb_1.png",
        "/images/products/telur_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/telur_1kg_preview_1.png",
        "/images/products/telur_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "premium",
      isOrganic: true,
      isEcoFriendly: true,
      },
    ingredients:[],
  },
  {
    title: "Topi Koki Beras Setra Ramos 5 kg",
    reviews: [],
    price: 76000.0,
    discountedPrice: 74000.0,
    categoryId: 1,
    shopId: 2, 
    id: 102,
    createdAt: "2025-04-01T08:00:00Z",
    description: "",
    imgs: {
      thumbnails: [
        "/images/products/beras_5kg_thumb_1.png",
        "/images/products/beras_5kg_thumb_2.png",
      ],
      previews: [
        "/images/products/beras_5kg_preview_1.png",
        "/images/products/beras_5kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isOrganic: false,
      isEcoFriendly: false,
      },
    ingredients:[],
  },
  {
    title: "Ubi Ungu 1 kg",
    reviews: [],
    price: 28000.0,
    discountedPrice: 26000.0,
    categoryId: 1,
    shopId: 3, 
    id: 103,
    createdAt: "2025-04-01T08:00:00Z",
    description: "",
    imgs: {
      thumbnails: [
        "/images/products/ubi_ungu_1kg_thumb_1.png",
        "/images/products/ubi_ungu_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ubi_ungu_1kg_preview_1.png",
        "/images/products/ubi_ungu_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "premium",
      isOrganic: true,
      isEcoFriendly: false,
      },
    ingredients:[],
  },
];

export default sellerProductData;