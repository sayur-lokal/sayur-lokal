import { Product } from "@/types/product";
import { sayurSopIngredients, sayurAsemIngredients } from "./recipeIngredients";


export const shopData: Product[] = [
  
 //staples,1
  {
    title: "Telur Ayam Fresh 1 Krat isi 30pcs",
    reviews: [{productId: "1", buyerId: "user2", rating: 5, createdAt: new Date().toISOString()},],
    price: 59000.0,
    discountedPrice: 57000.0,
    category: ["sembako", "protein", "harga grosir"],
    id: "1",
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
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Topi Koki Beras Setra Ramos 5 kg",
    reviews: [{productId: "2", buyerId: "user5", rating: 4.5, createdAt: new Date().toISOString()},],
    price: 76000.0,
    discountedPrice: 74000.0,
    category: ["sembako"],
    id: "2",
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
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Ubi Ungu 1 kg",
    reviews: [{productId: "3", buyerId: "user1", rating: 4, createdAt: new Date().toISOString()},
      {productId: "3", buyerId: "user2", rating: 5, createdAt: new Date().toISOString()}],
    price: 28000.0,
    discountedPrice: 26000.0,
    category: ["tanpa kategori"],
    id: "3",
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
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Kentang Dieng 250 gr",
    reviews: [{productId: "4", buyerId: "user2", rating: 4.5, createdAt: new Date().toISOString()},],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["sayur", "tanpa kategori"],
    id: "4",
    imgs: {
      thumbnails: [
        "/images/products/kentang_dieng_250gr_thumb_1.png",
        "/images/products/kentang_dieng_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kentang_dieng_250gr_preview_1.png",
        "/images/products/kentang_dieng_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Tepung Kunci Biru 1 kg",
    reviews: [],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["siap saji", "sembako"],
    id: "5",
    imgs: {
      thumbnails: [
        "/images/products/tepung_kunci_biru_1kg_thumb_1.png",
        "/images/products/tepung_kunci_biru_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/tepung_kunci_biru_1kg_preview_1.png",
        "/images/products/tepung_kunci_biru_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  //sayur,2
  {
    title: "Jamur Tiram 500 gr",
    reviews: [],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["sayur", "tanpa kategori"],
    id: "6",
    imgs: {
      thumbnails: [
        "/images/products/jamur_tiram_500gr_thumb_1.png",
        "/images/products/jamur_tiram_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/jamur_tiram_500gr_preview_1.png",
        "/images/products/jamur_tiram_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Terong Ungu 500 gr",
    reviews: [],
    price: 12000.0,
    discountedPrice: 10000.0,
    category: ["sayur"],
    id: "7",
    imgs: {
      thumbnails: [
        "/images/products/terong_ungu_500gr_thumb_1.png",
        "/images/products/terong_ungu_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/terong_ungu_500gr_preview_1.png",
        "/images/products/terong_ungu_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Labu Siam 1pcs, 250 gr",
    reviews: [],
    price: 5000.0,
    discountedPrice: 3000.0,
    category: ["sayur"],
    id: "8",
    imgs: {
      thumbnails: [
        "/images/products/labu_siam_1pcs_250gr_thumb_1.png",
        "/images/products/labu_siam_1pcs_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/labu_siam_1pcs_250gr_preview_1.png",
        "/images/products/labu_siam_1pcs_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Kecambah Kedelai 250 gr",
    reviews: [{productId: "9", buyerId: "user6", rating: 3.5, createdAt: new Date().toISOString()},],
    price: 6000.0,
    discountedPrice: 4000.0,
    category: ["sayur"],
    id: "9",
    imgs: {
      thumbnails: [
        "/images/products/kecambah_kedelai_250gr_thumb_1.png",
        "/images/products/kecambah_kedelai_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kecambah_kedelai_250gr_preview_1.png",
        "/images/products/kecambah_kedelai_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Jagung Acar 250 gr",
    reviews: [],
    price: 13000.0,
    discountedPrice: 11000.0,
    category: ["sayur"],
    id: "10",
    imgs: {
      thumbnails: [
        "/images/products/jagung_acar_250gr_thumb_1.png",
        "/images/products/jagung_acar_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/jagung_acar_250gr_preview_1.png",
        "/images/products/jagung_acar_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
 
  //seasonings,3
  {
    title: "Bawang Merah 250 gr",
    reviews: [],
    price: 17000.0,
    discountedPrice: 15000.0,
    category: ["bumbu dapur"],
    id: "11",
    imgs: {
      thumbnails: [
        "/images/products/bawang_merah_250gr_thumb_1.png",
        "/images/products/bawang_merah_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/bawang_merah_250gr_preview_1.png",
        "/images/products/bawang_merah_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Bawang Putih 250 gr",
    reviews: [],
    price: 22000.0,
    discountedPrice: 20000.0,
    category: ["bumbu dapur"],
    id: "12",
    imgs: {
      thumbnails: [
        "/images/products/bawang_putih_250gr_thumb_1.png",
        "/images/products/bawang_putih_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/bawang_putih_250gr_preview_1.png",
        "/images/products/bawang_putih_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Cabai Rawit Hijau 250 gr",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["bumbu dapur"],
    id: "13",
    imgs: {
      thumbnails: [
        "/images/products/cabai_rawit_hijau_250gr_thumb_1.png",
        "/images/products/cabai_rawit_hijau_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/cabai_rawit_hijau_250gr_preview_1.png",
        "/images/products/cabai_rawit_hijau_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Daun Kemangi Segar 10 gr",
    reviews: [],
    price: 4000.0,
    discountedPrice: 2000.0,
    category: ["bumbu dapur", "sayur"],
    id: "14",
    imgs: {
      thumbnails: [
        "/images/products/daung_kemangi_segar_10gr_thumb_1.png",
        "/images/products/daung_kemangi_segar_10gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daung_kemangi_segar_10gr_preview_1.png",
        "/images/products/daung_kemangi_segar_10gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  //fruits,4
  {
    title: "Pepaya Fresh 1-2 kg/pcs",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["buah", "harga grosir"],
    id: "15",
    imgs: {
      thumbnails: [
        "/images/products/pepaya_fresh_1_2_kg_pcs_thumb_1.png",
        "/images/products/pepaya_fresh_1_2_kg_pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/pepaya_fresh_1_2_kg_pcs_preview_1.png",
        "/images/products/pepaya_fresh_1_2_kg_pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Mangga Madu Fresh 1 kg",
    reviews: [],
    price: 44000.0,
    discountedPrice: 42000.0,
    category: ["buah"],
    id: "16",
    imgs: {
      thumbnails: [
        "/images/products/mangga_madu_fresh_1kg_thumb_1.png",
        "/images/products/mangga_madu_fresh_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/mangga_madu_fresh_1kg_preview_1.png",
        "/images/products/mangga_madu_fresh_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Jeruk Santang 1 kg",
    reviews: [],
    price: 58000.0,
    discountedPrice: 56000.0,
    category: ["buah", "harga grosir"],
    id: "17",
    imgs: {
      thumbnails: [
        "/images/products/jeruk_santang_1kg_preview_1.png",
        "/images/products/jeruk_santang_1kg_preview_1.png",
      ],
      previews: [
        "/images/products/jeruk_santang_1kg_preview_1.png",
        "/images/products/jeruk_santang_1kg_preview_1.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  //uncategorized,6
  {
    title: "Ikan Kembung Segar 500 gr",
    reviews: [{productId: "18", buyerId: "user5", rating: 4.5, createdAt: new Date().toISOString()}],
    price: 34000.0,
    discountedPrice: 32000.0,
    category: ["tanpa kategori", "protein", "harga grosir"],
    id: "18",
    imgs: {
      thumbnails: [
        "/images/products/ikan_kembung_segar_1kg_thumb_1.png",
        "/images/products/ikan_kembung_segar_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ikan_kembung_segar_1kg_preview_1.png",
        "/images/products/ikan_kembung_segar_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Asahi Sarden Saus Tomat 155 gr",
    reviews: [],
    price: 15000.0,
    discountedPrice: 13000.0,
    category: ["siap saji", "protein"],
    id: "19",
    imgs: {
      thumbnails: [
        "/images/products/asahi_sarden_saus_tomat_155gr_thumb_1.png",
        "/images/products/asahi_sarden_saus_tomat_155gr_thumb_2.png",
      ],
      previews: [
        "/images/products/asahi_sarden_saus_tomat_155gr_preview_1.png",
        "/images/products/asahi_sarden_saus_tomat_155gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  //sarapan, 9
  {
    title: "Roti Tawar Bakery Bunda",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["sarapan"],
    id: "20",
    imgs: {
      thumbnails: [
        "/images/products/pepaya_fresh_1_2_kg_pcs_thumb_1.png",
        "/images/products/pepaya_fresh_1_2_kg_pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/pepaya_fresh_1_2_kg_pcs_preview_1.png",
        "/images/products/pepaya_fresh_1_2_kg_pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  //meal kits,5
  {
    title: "Paket Masak Sayur Asem Lengkap(Meal Kits)",
    reviews: [{productId: "21", buyerId: "user1", rating: 3.5, createdAt: new Date().toISOString()},
      {productId: "21", buyerId: "user2", rating: 4.5, createdAt: new Date().toISOString()}],
    price: 30000.0,
    discountedPrice: 28000.0,
    category: ["paket masak", "siap saji"],
    id: "21",
    description: "Ready-to-cook ingredients for 5 portions",
    ingredients: sayurAsemIngredients,
    imgs: {
      thumbnails: [
        "/images/products/paket_masak_sayur_asem_lengkap_thumb_1.png",
        "/images/products/paket_masak_sayur_asem_lengkap_thumb_2.png",
      ],
      previews: [
        "/images/products/paket_masak_sayur_asem_lengkap_preview_1.png",
        "/images/products/paket_masak_sayur_asem_lengkap_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Paket Masak Sayur Sop Lengkap(Meal Kits)",
    reviews: [{productId: "22", buyerId: "user6", rating: 3.5, createdAt: new Date().toISOString()}],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["paket masak", "siap saji"],
    id: "22",
    description: "Ready-to-cook ingredients for 5 portions",
    ingredients: sayurSopIngredients,
    imgs: {
      thumbnails: [
        "/images/products/paket_masak_sayur_sop_lengkap_thumb_1.png",
        "/images/products/paket_masak_sayur_sop_lengkap_thumb_2.png",
      ],
      previews: [
        "/images/products/paket_masak_sayur_sop_lengkap_preview_1.png",
        "/images/products/paket_masak_sayur_sop_lengkap_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
// Buah (Fruits) products
  {
    title: "Pisang Cavendish 1 kg",
    reviews: [],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["buah"],
    id: "53",
    imgs: {
      thumbnails: [
        "/images/products/pisang_cavendish_1kg_thumb_1.png",
        "/images/products/pisang_cavendish_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/pisang_cavendish_1kg_preview_1.png",
        "/images/products/pisang_cavendish_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Apel Fuji 1 kg",
    reviews: [],
    price: 45000.0,
    discountedPrice: 42000.0,
    category: ["buah"],
    id: "54",
    imgs: {
      thumbnails: [
        "/images/products/apel_fuji_1kg_thumb_1.png",
        "/images/products/apel_fuji_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/apel_fuji_1kg_preview_1.png",
        "/images/products/apel_fuji_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Anggur Merah Seedless 500 gr",
    reviews: [],
    price: 55000.0,
    discountedPrice: 52000.0,
    category: ["buah", "harga grosir"],
    id: "55",
    imgs: {
      thumbnails: [
        "/images/products/anggur_merah_500gr_thumb_1.png",
        "/images/products/anggur_merah_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/anggur_merah_500gr_preview_1.png",
        "/images/products/anggur_merah_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Semangka Merah 3-4 kg",
    reviews: [],
    price: 35000.0,
    discountedPrice: 32000.0,
    category: ["buah", "harga grosir"],
    id: "56",
    imgs: {
      thumbnails: [
        "/images/products/semangka_merah_3kg_thumb_1.png",
        "/images/products/semangka_merah_3kg_thumb_2.png",
      ],
      previews: [
        "/images/products/semangka_merah_3kg_preview_1.png",
        "/images/products/semangka_merah_3kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Melon Hijau 1.5-2 kg",
    reviews: [],
    price: 28000.0,
    discountedPrice: 25000.0,
    category: ["buah"],
    id: "57",
    imgs: {
      thumbnails: [
        "/images/products/melon_hijau_2kg_thumb_1.png",
        "/images/products/melon_hijau_2kg_thumb_2.png",
      ],
      previews: [
        "/images/products/melon_hijau_2kg_preview_1.png",
        "/images/products/melon_hijau_2kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Nanas Madu 1 pcs",
    reviews: [],
    price: 22000.0,
    discountedPrice: 20000.0,
    category: ["buah"],
    id: "58",
    imgs: {
      thumbnails: [
        "/images/products/nanas_madu_1pcs_thumb_1.png",
        "/images/products/nanas_madu_1pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/nanas_madu_1pcs_preview_1.png",
        "/images/products/nanas_madu_1pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Jeruk Bali 1 pcs",
    reviews: [],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["buah"],
    id: "59",
    imgs: {
      thumbnails: [
        "/images/products/jeruk_bali_1pcs_thumb_1.png",
        "/images/products/jeruk_bali_1pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/jeruk_bali_1pcs_preview_1.png",
        "/images/products/jeruk_bali_1pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Alpukat Mentega 1 kg",
    reviews: [],
    price: 38000.0,
    discountedPrice: 35000.0,
    category: ["buah"],
    id: "60",
    imgs: {
      thumbnails: [
        "/images/products/alpukat_mentega_1kg_thumb_1.png",
        "/images/products/alpukat_mentega_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/alpukat_mentega_1kg_preview_1.png",
        "/images/products/alpukat_mentega_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Jambu Biji Merah 500 gr",
    reviews: [],
    price: 15000.0,
    discountedPrice: 13000.0,
    category: ["buah"],
    id: "61",
    imgs: {
      thumbnails: [
        "/images/products/jambu_biji_merah_500gr_thumb_1.png",
        "/images/products/jambu_biji_merah_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/jambu_biji_merah_500gr_preview_1.png",
        "/images/products/jambu_biji_merah_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Salak Pondoh 1 kg",
    reviews: [],
    price: 25000.0,
    discountedPrice: 22000.0,
    category: ["buah"],
    id: "62",
    imgs: {
      thumbnails: [
        "/images/products/salak_pondoh_1kg_thumb_1.png",
        "/images/products/salak_pondoh_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/salak_pondoh_1kg_preview_1.png",
        "/images/products/salak_pondoh_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  
  // Protein products
  {
    title: "Ayam Broiler Utuh 1-1.2 kg",
    reviews: [],
    price: 45000.0,
    discountedPrice: 42000.0,
    category: ["protein", "harga grosir"],
    id: "63",
    imgs: {
      thumbnails: [
        "/images/products/ayam_broiler_1kg_thumb_1.png",
        "/images/products/ayam_broiler_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ayam_broiler_1kg_preview_1.png",
        "/images/products/ayam_broiler_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daging Sapi Has Dalam 500 gr",
    reviews: [],
    price: 85000.0,
    discountedPrice: 82000.0,
    category: ["protein", "harga grosir"],
    id: "64",
    imgs: {
      thumbnails: [
        "/images/products/daging_sapi_has_dalam_500gr_thumb_1.png",
        "/images/products/daging_sapi_has_dalam_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daging_sapi_has_dalam_500gr_preview_1.png",
        "/images/products/daging_sapi_has_dalam_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Ikan Nila Segar 1 kg",
    reviews: [],
    price: 38000.0,
    discountedPrice: 35000.0,
    category: ["protein"],
    id: "65",
    imgs: {
      thumbnails: [
        "/images/products/ikan_nila_1kg_thumb_1.png",
        "/images/products/ikan_nila_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ikan_nila_1kg_preview_1.png",
        "/images/products/ikan_nila_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Udang Vannamei 500 gr",
    reviews: [],
    price: 65000.0,
    discountedPrice: 62000.0,
    category: ["protein", "harga grosir"],
    id: "66",
    imgs: {
      thumbnails: [
        "/images/products/udang_vannamei_500gr_thumb_1.png",
        "/images/products/udang_vannamei_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/udang_vannamei_500gr_preview_1.png",
        "/images/products/udang_vannamei_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Ikan Gurame Segar 1 kg",
    reviews: [],
    price: 55000.0,
    discountedPrice: 52000.0,
    category: ["protein"],
    id: "67",
    imgs: {
      thumbnails: [
        "/images/products/ikan_gurame_1kg_thumb_1.png",
        "/images/products/ikan_gurame_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ikan_gurame_1kg_preview_1.png",
        "/images/products/ikan_gurame_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daging Ayam Fillet 500 gr",
    reviews: [],
    price: 35000.0,
    discountedPrice: 32000.0,
    category: ["protein"],
    id: "68",
    imgs: {
      thumbnails: [
        "/images/products/daging_ayam_fillet_500gr_thumb_1.png",
        "/images/products/daging_ayam_fillet_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daging_ayam_fillet_500gr_preview_1.png",
        "/images/products/daging_ayam_fillet_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Ikan Kakap Merah 500 gr",
    reviews: [],
    price: 60000.0,
    discountedPrice: 57000.0,
    category: ["protein", "harga grosir"],
    id: "69",
    imgs: {
      thumbnails: [
        "/images/products/ikan_kakap_merah_500gr_thumb_1.png",
        "/images/products/ikan_kakap_merah_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/ikan_kakap_merah_500gr_preview_1.png",
        "/images/products/ikan_kakap_merah_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Cumi-Cumi Segar 500 gr",
    reviews: [],
    price: 55000.0,
    discountedPrice: 52000.0,
    category: ["protein"],
    id: "70",
    imgs: {
      thumbnails: [
        "/images/products/cumi_cumi_500gr_thumb_1.png",
        "/images/products/cumi_cumi_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/cumi_cumi_500gr_preview_1.png",
        "/images/products/cumi_cumi_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daging Sapi Cincang 500 gr",
    reviews: [],
    price: 75000.0,
    discountedPrice: 72000.0,
    category: ["protein"],
    id: "71",
    imgs: {
      thumbnails: [
        "/images/products/daging_sapi_cincang_500gr_thumb_1.png",
        "/images/products/daging_sapi_cincang_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daging_sapi_cincang_500gr_preview_1.png",
        "/images/products/daging_sapi_cincang_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Ikan Tongkol Segar 1 kg",
    reviews: [],
    price: 45000.0,
    discountedPrice: 42000.0,
    category: ["protein"],
    id: "72",
    imgs: {
      thumbnails: [
        "/images/products/ikan_tongkol_1kg_thumb_1.png",
        "/images/products/ikan_tongkol_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/ikan_tongkol_1kg_preview_1.png",
        "/images/products/ikan_tongkol_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
// Sayur (Vegetables) products
  {
    title: "Bayam Hijau Segar 250 gr",
    reviews: [],
    price: 8000.0,
    discountedPrice: 7000.0,
    category: ["sayur"],
    id: "33",
    imgs: {
      thumbnails: [
        "/images/products/bayam_hijau_250gr_thumb_1.png",
        "/images/products/bayam_hijau_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/bayam_hijau_250gr_preview_1.png",
        "/images/products/bayam_hijau_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: true,
      isOrganic: true,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Kangkung Segar 250 gr",
    reviews: [],
    price: 7000.0,
    discountedPrice: 6000.0,
    category: ["sayur"],
    id: "34",
    imgs: {
      thumbnails: [
        "/images/products/kangkung_250gr_thumb_1.png",
        "/images/products/kangkung_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kangkung_250gr_preview_1.png",
        "/images/products/kangkung_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: true,
      isOrganic: true,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Wortel Lokal 500 gr",
    reviews: [],
    price: 15000.0,
    discountedPrice: 13500.0,
    category: ["sayur"],
    id: "35",
    imgs: {
      thumbnails: [
        "/images/products/wortel_lokal_500gr_thumb_1.png",
        "/images/products/wortel_lokal_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/wortel_lokal_500gr_preview_1.png",
        "/images/products/wortel_lokal_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Brokoli Segar 250 gr",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16500.0,
    category: ["sayur"],
    id: "36",
    imgs: {
      thumbnails: [
        "/images/products/brokoli_250gr_thumb_1.png",
        "/images/products/brokoli_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/brokoli_250gr_preview_1.png",
        "/images/products/brokoli_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Kol Putih 500 gr",
    reviews: [],
    price: 12000.0,
    discountedPrice: 10500.0,
    category: ["sayur"],
    id: "37",
    imgs: {
      thumbnails: [
        "/images/products/kol_putih_500gr_thumb_1.png",
        "/images/products/kol_putih_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kol_putih_500gr_preview_1.png",
        "/images/products/kol_putih_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Sawi Hijau 250 gr",
    reviews: [],
    price: 8500.0,
    discountedPrice: 7500.0,
    category: ["sayur"],
    id: "38",
    imgs: {
      thumbnails: [
        "/images/products/sawi_hijau_250gr_thumb_1.png",
        "/images/products/sawi_hijau_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/sawi_hijau_250gr_preview_1.png",
        "/images/products/sawi_hijau_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: true,
      isOrganic: true,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Tomat Merah 500 gr",
    reviews: [],
    price: 14000.0,
    discountedPrice: 12500.0,
    category: ["sayur", "bumbu dapur"],
    id: "39",
    imgs: {
      thumbnails: [
        "/images/products/tomat_merah_500gr_thumb_1.png",
        "/images/products/tomat_merah_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/tomat_merah_500gr_preview_1.png",
        "/images/products/tomat_merah_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Timun Segar 500 gr",
    reviews: [],
    price: 9000.0,
    discountedPrice: 8000.0,
    category: ["sayur"],
    id: "40",
    imgs: {
      thumbnails: [
        "/images/products/timun_500gr_thumb_1.png",
        "/images/products/timun_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/timun_500gr_preview_1.png",
        "/images/products/timun_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daun Singkong 250 gr",
    reviews: [],
    price: 7500.0,
    discountedPrice: 6500.0,
    category: ["sayur"],
    id: "41",
    imgs: {
      thumbnails: [
        "/images/products/daun_singkong_250gr_thumb_1.png",
        "/images/products/daun_singkong_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daun_singkong_250gr_preview_1.png",
        "/images/products/daun_singkong_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Tauge Segar 250 gr",
    reviews: [],
    price: 6000.0,
    discountedPrice: 5000.0,
    category: ["sayur"],
    id: "42",
    imgs: {
      thumbnails: [
        "/images/products/tauge_250gr_thumb_1.png",
        "/images/products/tauge_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/tauge_250gr_preview_1.png",
        "/images/products/tauge_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  
  // Bumbu Dapur (Kitchen Spices/Seasonings) products
  {
    title: "Cabai Merah Keriting 250 gr",
    reviews: [],
    price: 20000.0,
    discountedPrice: 18500.0,
    category: ["bumbu dapur"],
    id: "43",
    imgs: {
      thumbnails: [
        "/images/products/cabai_merah_keriting_250gr_thumb_1.png",
        "/images/products/cabai_merah_keriting_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/cabai_merah_keriting_250gr_preview_1.png",
        "/images/products/cabai_merah_keriting_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Jahe Merah 250 gr",
    reviews: [],
    price: 15000.0,
    discountedPrice: 13500.0,
    category: ["bumbu dapur"],
    id: "44",
    imgs: {
      thumbnails: [
        "/images/products/jahe_merah_250gr_thumb_1.png",
        "/images/products/jahe_merah_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/jahe_merah_250gr_preview_1.png",
        "/images/products/jahe_merah_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Lengkuas Segar 250 gr",
    reviews: [],
    price: 8000.0,
    discountedPrice: 7000.0,
    category: ["bumbu dapur"],
    id: "45",
    imgs: {
      thumbnails: [
        "/images/products/lengkuas_250gr_thumb_1.png",
        "/images/products/lengkuas_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/lengkuas_250gr_preview_1.png",
        "/images/products/lengkuas_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Kunyit Segar 250 gr",
    reviews: [],
    price: 7500.0,
    discountedPrice: 6500.0,
    category: ["bumbu dapur"],
    id: "46",
    imgs: {
      thumbnails: [
        "/images/products/kunyit_250gr_thumb_1.png",
        "/images/products/kunyit_250gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kunyit_250gr_preview_1.png",
        "/images/products/kunyit_250gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Serai Segar 100 gr",
    reviews: [],
    price: 6000.0,
    discountedPrice: 5000.0,
    category: ["bumbu dapur"],
    id: "47",
    imgs: {
      thumbnails: [
        "/images/products/serai_100gr_thumb_1.png",
        "/images/products/serai_100gr_thumb_2.png",
      ],
      previews: [
        "/images/products/serai_100gr_preview_1.png",
        "/images/products/serai_100gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daun Salam Segar 50 gr",
    reviews: [],
    price: 5000.0,
    discountedPrice: 4000.0,
    category: ["bumbu dapur"],
    id: "48",
    imgs: {
      thumbnails: [
        "/images/products/daun_salam_50gr_thumb_1.png",
        "/images/products/daun_salam_50gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daun_salam_50gr_preview_1.png",
        "/images/products/daun_salam_50gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Daun Jeruk Segar 50 gr",
    reviews: [],
    price: 5500.0,
    discountedPrice: 4500.0,
    category: ["bumbu dapur"],
    id: "49",
    imgs: {
      thumbnails: [
        "/images/products/daun_jeruk_50gr_thumb_1.png",
        "/images/products/daun_jeruk_50gr_thumb_2.png",
      ],
      previews: [
        "/images/products/daun_jeruk_50gr_preview_1.png",
        "/images/products/daun_jeruk_50gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Kemiri Kupas 100 gr",
    reviews: [],
    price: 12000.0,
    discountedPrice: 10500.0,
    category: ["bumbu dapur"],
    id: "50",
    imgs: {
      thumbnails: [
        "/images/products/kemiri_kupas_100gr_thumb_1.png",
        "/images/products/kemiri_kupas_100gr_thumb_2.png",
      ],
      previews: [
        "/images/products/kemiri_kupas_100gr_preview_1.png",
        "/images/products/kemiri_kupas_100gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Ketumbar Bubuk 50 gr",
    reviews: [],
    price: 8000.0,
    discountedPrice: 7000.0,
    category: ["bumbu dapur"],
    id: "51",
    imgs: {
      thumbnails: [
        "/images/products/ketumbar_bubuk_50gr_thumb_1.png",
        "/images/products/ketumbar_bubuk_50gr_thumb_2.png",
      ],
      previews: [
        "/images/products/ketumbar_bubuk_50gr_preview_1.png",
        "/images/products/ketumbar_bubuk_50gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Merica Bubuk 50 gr",
    reviews: [],
    price: 10000.0,
    discountedPrice: 9000.0,
    category: ["bumbu dapur"],
    id: "52",
    imgs: {
      thumbnails: [
        "/images/products/merica_bubuk_50gr_thumb_1.png",
        "/images/products/merica_bubuk_50gr_thumb_2.png",
      ],
      previews: [
        "/images/products/merica_bubuk_50gr_preview_1.png",
        "/images/products/merica_bubuk_50gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
// Additional 100 products
  // Sembako (Staples) products
  {
    title: "Beras Pandan Wangi 10 kg",
    reviews: [],
    price: 135000.0,
    discountedPrice: 132000.0,
    category: ["sembako", "harga grosir"],
    id: "23",
    imgs: {
      thumbnails: [
        "/images/products/beras_pandan_wangi_10kg_thumb_1.png",
        "/images/products/beras_pandan_wangi_10kg_thumb_2.png",
      ],
      previews: [
        "/images/products/beras_pandan_wangi_10kg_preview_1.png",
        "/images/products/beras_pandan_wangi_10kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Minyak Goreng Bimoli 2 Liter",
    reviews: [],
    price: 42000.0,
    discountedPrice: 39500.0,
    category: ["sembako"],
    id: "24",
    imgs: {
      thumbnails: [
        "/images/products/minyak_goreng_bimoli_2l_thumb_1.png",
        "/images/products/minyak_goreng_bimoli_2l_thumb_2.png",
      ],
      previews: [
        "/images/products/minyak_goreng_bimoli_2l_preview_1.png",
        "/images/products/minyak_goreng_bimoli_2l_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Gula Pasir Gulaku 1 kg",
    reviews: [],
    price: 16500.0,
    discountedPrice: 15000.0,
    category: ["sembako", "harga grosir"],
    id: "25",
    imgs: {
      thumbnails: [
        "/images/products/gula_pasir_gulaku_1kg_thumb_1.png",
        "/images/products/gula_pasir_gulaku_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/gula_pasir_gulaku_1kg_preview_1.png",
        "/images/products/gula_pasir_gulaku_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Tepung Terigu Segitiga Biru 1 kg",
    reviews: [],
    price: 15000.0,
    discountedPrice: 13500.0,
    category: ["sembako"],
    id: "26",
    imgs: {
      thumbnails: [
        "/images/products/tepung_segitiga_biru_1kg_thumb_1.png",
        "/images/products/tepung_segitiga_biru_1kg_thumb_2.png",
      ],
      previews: [
        "/images/products/tepung_segitiga_biru_1kg_preview_1.png",
        "/images/products/tepung_segitiga_biru_1kg_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Mie Instan Indomie Goreng 5 pcs",
    reviews: [],
    price: 14500.0,
    discountedPrice: 13000.0,
    category: ["sembako", "siap saji"],
    id: "27",
    imgs: {
      thumbnails: [
        "/images/products/indomie_goreng_5pcs_thumb_1.png",
        "/images/products/indomie_goreng_5pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/indomie_goreng_5pcs_preview_1.png",
        "/images/products/indomie_goreng_5pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Kecap Manis Bango 600 ml",
    reviews: [],
    price: 28000.0,
    discountedPrice: 26500.0,
    category: ["sembako", "bumbu dapur"],
    id: "28",
    imgs: {
      thumbnails: [
        "/images/products/kecap_bango_600ml_thumb_1.png",
        "/images/products/kecap_bango_600ml_thumb_2.png",
      ],
      previews: [
        "/images/products/kecap_bango_600ml_preview_1.png",
        "/images/products/kecap_bango_600ml_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Susu Kental Manis Frisian Flag 370 gr",
    reviews: [],
    price: 12500.0,
    discountedPrice: 11000.0,
    category: ["sembako", "sarapan"],
    id: "29",
    imgs: {
      thumbnails: [
        "/images/products/susu_frisian_flag_370gr_thumb_1.png",
        "/images/products/susu_frisian_flag_370gr_thumb_2.png",
      ],
      previews: [
        "/images/products/susu_frisian_flag_370gr_preview_1.png",
        "/images/products/susu_frisian_flag_370gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Garam Dapur Refina 500 gr",
    reviews: [],
    price: 5000.0,
    discountedPrice: 4500.0,
    category: ["sembako", "bumbu dapur"],
    id: "30",
    imgs: {
      thumbnails: [
        "/images/products/garam_refina_500gr_thumb_1.png",
        "/images/products/garam_refina_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/garam_refina_500gr_preview_1.png",
        "/images/products/garam_refina_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Telur Bebek Fresh 10 pcs",
    reviews: [],
    price: 32000.0,
    discountedPrice: 30000.0,
    category: ["sembako", "protein"],
    id: "31",
    imgs: {
      thumbnails: [
        "/images/products/telur_bebek_10pcs_thumb_1.png",
        "/images/products/telur_bebek_10pcs_thumb_2.png",
      ],
      previews: [
        "/images/products/telur_bebek_10pcs_preview_1.png",
        "/images/products/telur_bebek_10pcs_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
  {
    title: "Tepung Tapioka Rose Brand 500 gr",
    reviews: [],
    price: 9000.0,
    discountedPrice: 8000.0,
    category: ["sembako"],
    id: "32",
    imgs: {
      thumbnails: [
        "/images/products/tepung_tapioka_500gr_thumb_1.png",
        "/images/products/tepung_tapioka_500gr_thumb_2.png",
      ],
      previews: [
        "/images/products/tepung_tapioka_500gr_preview_1.png",
        "/images/products/tepung_tapioka_500gr_preview_2.png",
      ],
    },
    productAttrb: {
      productType: "standard",
      isEcoFriendly: false,
      isOrganic: false,
    },
    shopId: 1,
    createdAt: "2023-10-26T10:00:00Z",
  },
];

export function getDummyProductById(id: string) {
  return shopData.find(p => p.id === id);
}

export default shopData;
