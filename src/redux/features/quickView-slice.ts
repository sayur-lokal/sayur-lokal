import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, defaultProduct } from "@/types/product";

type InitialState = {
  value: Product;
};

const initialState = {
  value: defaultProduct(),
};

export const quickView = createSlice({
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

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
