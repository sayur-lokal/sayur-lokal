import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultProduct, Product } from "@/types/product";

type InitialState = {
  value: Product;
  // loading: boolean;
  // error: string | null;
};

const initialState: InitialState = {
  value: defaultProduct(),
} as InitialState;


// export const fetchProductDetails = createAsyncThunk(
//   'productDetail/fetchProductDetails',
//   async (productId: string) => {
//     const response = await fetch(`/api/products/${productId}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch product details');
//     }
//     return response.json();
//   }
// );

export const productDetailSlice = createSlice({
  name: "detailprodslice",
  initialState,
  reducers: {
    // updateproductDetails: (_, action) => {
      updateproductDetails: (state, action: PayloadAction<Product>) => {
        state.value = action.payload;
      },
    //   return {
    //     value: {
    //       ...action.payload,
    //     },
    //   };
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
  //     state.value = action.payload;
  //   });
  // },
});

export const { updateproductDetails } = productDetailSlice.actions;
export default productDetailSlice.reducer;
