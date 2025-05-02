import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: defaultProduct() as Product,
} as InitialState;

export const quickViewSlice = createSlice({
  name: "viewslice",
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

export const { updateQuickView, resetQuickView } = quickViewSlice.actions;
export default quickViewSlice.reducer;
