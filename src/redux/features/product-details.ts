import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, productSchema } from "@/types/product";
import { getDummyProductById } from "@/components/Shared/DummyData/shopData";

type ProdDetailState ={
  currentProduct: Product | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProdDetailState = {
  currentProduct: null,
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "productDetail/fetchProductDetails",
  async (productId: string) => {
    const product = getDummyProductById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return productSchema.parse(product);
  }
);

const productDetailSlice = createSlice({
  name: "detailprodslice",
  initialState,
  reducers: {
    updateProductDetails: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.currentProduct = action.payload; // Valid product based on Zod schema
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch product details";
      });
},
});

export const { updateProductDetails } = productDetailSlice.actions;
export default productDetailSlice.reducer;
