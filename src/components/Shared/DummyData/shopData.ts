import { Product } from "@/types/product";
import { sayurSopIngredients, sayurAsemIngredients } from "./recipeIngredients";
import { truncate } from "node:fs";


export const shopData: Product[] = [
  
 //staples,1
  {
    title: "Telur Ayam Fresh 1 Krat isi 30pcs",
    reviews: [{
      productId: "1",
      buyerId: "user2", 
      rating: 5, 
      comment: "Telurnya segar, pengemasan sangat rapi dengan aluminium foil dan ice gel. Sampai dalam kondisi baik dan tidak ada yang pecah. Sangat puas dengan kualitasnya!",
      createdAt: new Date().toISOString()},],
    stock: 15,
    price: 59000.0,
    discountedPrice: 57000.0,
    category: ["sembako", "protein", "harga grosir"],
    id: "1",
    description: "Telur Ayam Negeri sayurlokal 100% Tersertifikasi NKV dan berasal dari ayam lokal pilihan.",
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
      isEcoFriendly: true,
      isOrganic: true,
      description: "Kemasan pengiriman menggunakan Aluminium Foil & Ice gel untuk menjaga kualitas produk tetap segar saat diterima oleh customer",
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Topi Koki Beras Setra Ramos 5 kg",
    reviews: [{
      productId: "2", 
      buyerId: "user5", 
      rating: 4.5, 
      comment: "Berasnya putih bersih dan pulen, cocok untuk masakan sehari-hari. Kualitas bagus, hanya sedikit butiran patah tapi tidak masalah. Tetap recommended!",
      createdAt: new Date().toISOString()},],
    stock: 10,
    price: 76000.0,
    discountedPrice: 74000.0,
    category: ["sembako"],
    id: "2",
    description: "Beras putih lokal yang diolah secara modern dan higienis. Bebas pestisida, pengawet, pewarna, dan bahan kimia lain.",
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
      productType: "premium",
      isEcoFriendly: false,
      isOrganic: true,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Ubi Ungu Murasaki Ungu Premium 1 kg",
    reviews: [{
      productId: "3", 
      buyerId: "user1", 
      rating: 4, 
      comment: "Ubinya manis dan segar, tapi ada beberapa yang ukurannya kecil. Cocok buat cemilan sehat!",
      createdAt: new Date().toISOString()},
      {
      productId: "3", 
      buyerId: "user2", 
      rating: 5, 
      comment: "Rasanya enak banget dan teksturnya lembut. Dikemas rapi dan sampai dalam kondisi bagus!",
      createdAt: new Date().toISOString()}],
    price: 28000.0,
    discountedPrice: 26000.0,
    category: ["tanpa kategori"],
    id: "3",
    description: "Dipetik oleh Mitra Petani terbaik dan dikemas secara ekslusif oleh sayurlokal",
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
      isEcoFriendly: true,
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
    title: "Roti Tawar Gandum Bakery Selection",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["sarapan","complement:selai","complement:keju"],
    id: "20",
    description: "Roti tawar gandum yang terbuat dari tepung gandum pilihan dan diproses dengan standar kualitas teknologi Jepang. Teksturnya sangat lembut dan berserat tinggi. Cocok untuk dipadukan dengan berbagai selai, isian atau kreasi hidangan lainnya.",
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
      productType: "premium",
      isEcoFriendly: true,
      isOrganic: true,
    },
    shopId: 1, // Placeholder shopId
    createdAt: "2023-10-26T10:00:00Z", // Placeholder createdAt
  },
  {
    title: "Selai",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["sarapan", "siap saji", "complement:roti","complement:keju"],
    id: "21",
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
    title: "Keju",
    reviews: [],
    price: 18000.0,
    discountedPrice: 16000.0,
    category: ["sarapan", "siap saji", "complement:selai","complement:roti"],
    id: "22",
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
    reviews: [{
      productId: "21", 
      buyerId: "user1", 
      rating: 3.5,
      comment: "Bahan cukup lengkap dan segar, tapi ada satu dua sayur yang sudah agak layu. Perlu ditingkatkan untuk kualitas bahan.",
      createdAt: new Date().toISOString()},
      {
      productId: "21", 
      buyerId: "user2", 
      rating: 4.5,
      comment: "",
      createdAt: new Date().toISOString()}],
    price: 30000.0,
    discountedPrice: 28000.0,
    category: ["paket masak", "siap saji"],
    id: "23",
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
    reviews: [{
      productId: "22", 
      buyerId: "user6", 
      rating: 3.5,
      comment: "Cukup praktis, tapi beberapa potongan sayurnya terlalu besar dan butuh dipotong lagi sebelum dimasak.", 
      createdAt: new Date().toISOString()}],
    price: 25000.0,
    discountedPrice: 23000.0,
    category: ["paket masak", "siap saji"],
    id: "24",
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
];

export function getDummyProductById(id: string) {
  return shopData.find(p => p.id === id);
}

export default shopData;
