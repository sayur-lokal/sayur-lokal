import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Review } from "@/types/review";
import { addReviewThunk } from "./thunks/reviewThunks";

type ReviewState = {
    reviews: Review[];
  };
  
  const initialState: ReviewState = {
    reviews: [],
  };
  
  const reviewSlice = createSlice({
    name: 'reviewslice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(addReviewThunk.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
    },
  });


export default reviewSlice.reducer;
