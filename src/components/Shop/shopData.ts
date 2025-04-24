import { Product } from "@/types/product";
import { categories } from "../Shared/Ts/categoryData";
import { sayurAsemIngredients, sayurSopIngredients } from "../Shared/Ts/recipeIngredients";



const shopData: Product[] = [
  
 //staples,1
  {
    title: "Telur Ayam Fresh 1 Krat isi 30pcs",
    reviews: 15,
    price: 59000.0,
    discountedPrice: 29.0,
    categoryId: 1,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Topi Koki Beras Setra Ramos 5 kg",
    reviews: 15,
    price: 76000.0,
    discountedPrice: 29.0,
    categoryId: 1,
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Ubi Ungu 1 kg",
    reviews: 15,
    price: 28000.0,
    discountedPrice: 29.0,
    categoryId: 1,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Kentang Dieng 250 gr",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 29.0,
    categoryId: 1,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Tepung Kunci Biru 1 kg",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 29.0,
    categoryId: 1,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  //sayur,2
  {
    title: "Jamur Tiram 500 gr",
    reviews: 15,
    price: 25000.0,
    discountedPrice: 29.0,
    categoryId: 2,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Terong Ungu 500 gr",
    reviews: 15,
    price: 12000.0,
    discountedPrice: 29.0,
    categoryId: 2,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Labu Siam 1pcs, 250 gr",
    reviews: 5,
    price: 3000.0,
    discountedPrice: 99.0,
    categoryId: 2,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Kecambah Kedelai 250 gr",
    reviews: 5,
    price: 6000.0,
    discountedPrice: 29.0,
    categoryId: 2,
    id: 9,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Jagung Acar 250 gr",
    reviews: 3,
    price: 13000.0,
    discountedPrice: 29.0,
    categoryId: 2,
    id: 10,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
 
  //seasonings,3
  {
    title: "Bawang Merah 250 gr",
    reviews: 15,
    price: 17000.0,
    discountedPrice: 29.0,
    categoryId: 3,
    id: 11,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Bawang Putih 250 gr",
    reviews: 15,
    price: 22000.0,
    discountedPrice: 29.0,
    categoryId: 3,
    id: 12,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Cabai Rawit Hijau 250 gr",
    reviews: 15,
    price: 18000.0,
    discountedPrice: 29.0,
    categoryId: 3,
    id: 13,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Daun Kemangi Segar 10 gr",
    reviews: 15,
    price: 4000.0,
    discountedPrice: 29.0,
    categoryId: 3,
    id: 14,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  //fruits,4
  {
    title: "Pepaya Fresh 1-2 kg/pcs",
    reviews: 15,
    price: 18000.0,
    discountedPrice: 29.0,
    categoryId: 4,
    id: 15,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Mangga Madu Fresh 1 kg",
    reviews: 15,
    price: 44000.0,
    discountedPrice: 29.0,
    categoryId: 4,
    id: 16,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Jeruk Santang 1 kg",
    reviews: 15,
    price: 58000.0,
    discountedPrice: 29.0,
    categoryId: 4,
    id: 17,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  //uncategorized,6
  {
    title: "Ikan Kembung Segar 500 gr",
    reviews: 15,
    price: 34000.0,
    discountedPrice: 29.0,
    categoryId: 6,
    id: 18,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Asahi Sarden Saus Tomat 155 gr",
    reviews: 15,
    price: 14000.0,
    discountedPrice: 29.0,
    categoryId: 6,
    id: 19,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  //meal kits,5
  {
    title: "Paket Masak Sayur Asem Lengkap",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    categoryId: 5,
    id: 20,
    ingredients: sayurAsemIngredients,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
  {
    title: "Paket Masak Sayur Sop Lengkap",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    categoryId: 5,
    id: 21,
    ingredients: sayurSopIngredients,
    imgs: {
      thumbnails: [
        "/images/products/.png",
        "/images/products/.png",
      ],
      previews: [
        "/images/products/.png",
        "/images/products/.png",
      ],
    },
  },
];

export default shopData;
