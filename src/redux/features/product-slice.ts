
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDummyProductById } from "@/components/Shared/DummyData/shopData";
import { Product } from "@/types/product";

interface ProductState {
    items: Product[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export const fetchProductById = createAsyncThunk(
    "product/fetchById",
    async (productId: string) => {
      // Use dummy data directly
      const product = getDummyProductById(productId);
      if (!product) throw new Error("Product not found");
      return product;
    }
  );
  
  const productSlice = createSlice({
    name: 'productslice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
            state.loading = false;
            // Add or update the product in items array
            const index = state.items.findIndex(p => p.id === action.payload.id);
            if (index === -1) {
              state.items.push(action.payload);
            } else {
              state.items[index] = action.payload;
            }
          })
        .addCase(fetchProductById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch product";
        });
    },
  });
  
  export default productSlice.reducer;