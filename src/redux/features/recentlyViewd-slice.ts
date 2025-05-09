import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product"; 

type RecentlyViewdState = {
  items: Product[];
};

const initialState: RecentlyViewdState = {
  items: [],
};

const recentlyViewdSlice = createSlice({
  name: "recentlyviewdslice",
  initialState,
  reducers: {
    addRecentlyViewd(state, action: PayloadAction<Product>) {
      // Avoid duplicates
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.unshift(action.payload);
        if (state.items.length > 10) state.items.pop(); // limit to 10 items
      }
    },
  },
});

export const { addRecentlyViewd } = recentlyViewdSlice.actions;
export default recentlyViewdSlice.reducer;