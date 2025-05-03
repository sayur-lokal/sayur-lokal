import { createSlice } from "@reduxjs/toolkit";
import { Product, defaultProduct } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: defaultProduct(),
};

export const productDetails = createSlice({
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

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
