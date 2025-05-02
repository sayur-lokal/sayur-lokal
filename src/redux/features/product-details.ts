import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: defaultProduct(),
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
