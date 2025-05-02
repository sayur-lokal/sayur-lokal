import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    category: []
  } as Product,
} as InitialState;

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
