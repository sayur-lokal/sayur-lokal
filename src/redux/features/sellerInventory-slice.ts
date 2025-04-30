import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

export const sellerInventory = createSlice({
  name: "sellerInventory",
  initialState,
  reducers: {
    setSellerProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    resetSellerInventory: () => initialState,
  },
});

export const {
  setSellerProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  resetSellerInventory,
} = sellerInventory.actions;

export default sellerInventory.reducer;
