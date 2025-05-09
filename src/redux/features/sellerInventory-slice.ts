import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

export const sellerInventorySlice = createSlice({
  name: "sellerslice",
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
    deleteProduct: (state, action: PayloadAction<string>) => {
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
} = sellerInventorySlice.actions;

export default sellerInventorySlice.reducer;
