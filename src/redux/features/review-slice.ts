import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Review } from "@/types/review";

const initialState: Review[] = [];

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
