import { Product } from "@/types/product";
import { categoryData } from "./categoryData";
import { sayurSopIngredients, sayurAsemIngredients } from "./recipeIngredients";


const shopData: Product[] = [
  
 //staples,1
  {
    title: "Telur Ayam Fresh 1 Krat isi 30pcs",
    reviews: 15,
    price: 59000.0,
    discountedPrice: 57000.0,
    categoryId: 1,
    id: 1,
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
  },
  {
    title: "Topi Koki Beras Setra Ramos 5 kg",
    reviews: 1,
    price: 76000.0,
    discountedPrice: 74000.0,
    categoryId: 1,
    id: 2,
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
  },
  {
    title: "Ubi Ungu 1 kg",
    reviews: 15,
    price: 28000.0,
    discountedPrice: 26000.0,
    categoryId: 1,
    id: 3,
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
  },
  {
    title: "Kentang Dieng 250 gr",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 23000.0,
    categoryId: 1,
    id: 4,
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
  },
  {
    title: "Tepung Kunci Biru 1 kg",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 23000.0,
    categoryId: 1,
    id: 5,
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
  },
  //sayur,2
  {
    title: "Jamur Tiram 500 gr",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 23000.0,
    categoryId: 2,
    id: 6,
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
  },
  {
    title: "Terong Ungu 500 gr",
    reviews: 15,
    price: 12000.0,
    discountedPrice: 10000.0,
    categoryId: 2,
    id: 7,
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
  },
  {
    title: "Labu Siam 1pcs, 250 gr",
    reviews: 5,
    price: 5000.0,
    discountedPrice: 3000.0,
    categoryId: 2,
    id: 8,
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
  },
  {
    title: "Kecambah Kedelai 250 gr",
    reviews: 5,
    price: 6000.0,
    discountedPrice: 4000.0,
    categoryId: 2,
    id: 9,
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
  },
  {
    title: "Jagung Acar 250 gr",
    reviews: 3,
    price: 13000.0,
    discountedPrice: 11000.0,
    categoryId: 2,
    id: 10,
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
  },
 
  //seasonings,3
  {
    title: "Bawang Merah 250 gr",
    reviews: 15,
    price: 17000.0,
    discountedPrice: 15000.0,
    categoryId: 3,
    id: 11,
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
  },
  {
    title: "Bawang Putih 250 gr",
    reviews: 15,
    price: 22000.0,
    discountedPrice: 20000.0,
    categoryId: 3,
    id: 12,
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
  },
  {
    title: "Cabai Rawit Hijau 250 gr",
    reviews: 15,
    price: 18000.0,
    discountedPrice: 16000.0,
    categoryId: 3,
    id: 13,
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
  },
  {
    title: "Daun Kemangi Segar 10 gr",
    reviews: 15,
    price: 4000.0,
    discountedPrice: 2000.0,
    categoryId: 3,
    id: 14,
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
  },
  //fruits,4
  {
    title: "Pepaya Fresh 1-2 kg/pcs",
    reviews: 15,
    price: 18000.0,
    discountedPrice: 16000.0,
    categoryId: 4,
    id: 15,
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
  },
  {
    title: "Mangga Madu Fresh 1 kg",
    reviews: 15,
    price: 44000.0,
    discountedPrice: 42000.0,
    categoryId: 4,
    id: 16,
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
  },
  {
    title: "Jeruk Santang 1 kg",
    reviews: 15,
    price: 58000.0,
    discountedPrice: 56000.0,
    categoryId: 4,
    id: 17,
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
  },
  //uncategorized,6
  {
    title: "Ikan Kembung Segar 500 gr",
    reviews: 15,
    price: 34000.0,
    discountedPrice: 32000.0,
    categoryId: 6,
    id: 18,
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
  },
  {
    title: "Asahi Sarden Saus Tomat 155 gr",
    reviews: 15,
    price: 15000.0,
    discountedPrice: 13000.0,
    categoryId: 6,
    id: 19,
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
  },
  //meal kits,5
  {
    title: "Paket Masak Sayur Asem Lengkap(Meal Kits)",
    reviews: 15,
    price: 30000.0,
    discountedPrice: 28000.0,
    categoryId: 5,
    id: 20,
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
  },
  {
    title: "Paket Masak Sayur Sop Lengkap(Meal Kits)",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 23000.0,
    categoryId: 5,
    id: 21,
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
  },
];

export default shopData;
