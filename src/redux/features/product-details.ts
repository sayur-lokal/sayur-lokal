import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "@/types/product";

type InitialState = {
  value: Product;
  // loading: boolean;
  // error: string | null;
};

const initialState = {
  value: defaultProduct(),
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
