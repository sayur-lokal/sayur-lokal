import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    title: "",
    price: 0,
    discountedPrice: 0,
    categoryId: 0,
    shopId: 0,
    id: "0",
    description: "",
    createdAt: "",
    imgs: [{
      thumbnails: [],
      previews: [],
    }],
    productAttrb:{
    productType: "standard", // e.g. eco-friendly/organic
    isEcoFriendly: false,
    isOrganic: false,
    },
    ingredients: [],// only for meal kits
    reviews: [],
    category: [],
  },
} as InitialState;

export const productDetails = createSlice({
  name: "productDetails",
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

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
