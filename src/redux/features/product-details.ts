import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
// import { fetchProductById } from "../product/productThunks";

type InitialState = {
  value: Product;
  // loading: boolean;
  // error: string | null;
};

const initialState = {
  value: {
    title: "",
    price: 0,
    discountedPrice: 0,
    categoryId: 0,
    shopId: 0,
    id: 0,
    description: "",
    createdAt: "",
    imgs: {
      thumbnails: [],
      previews: [],
    },
    productAttrb:{
    productType: "standard", // e.g. eco-friendly/organic
    isEcoFriendly: false,
    isOrganic: false,
    },
    ingredients: [],// only for meal kits
    reviews: [],
  },
} as InitialState;

export const productDetailSlice = createSlice({
  name: "detailprodslice",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetailSlice.actions;
export default productDetailSlice.reducer;
