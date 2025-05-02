import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: defaultProduct() as Product,
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
