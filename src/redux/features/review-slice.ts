import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Review } from "@/types/review";


    type ReviewState={
      reviews: Review[];
    };

      const initialState: ReviewState = {
        reviews: [],
        
      };
    
      //to add a review
      export const addReviewThunk = createAsyncThunk(
        'review/add',
        async (review: Review, thunkAPI) => {
          try {
            const res = await fetch('/api/review', {
              method: 'POST',
              body: JSON.stringify(review),
              headers: { 'Content-Type': 'application/json' },
            });
            if (!res.ok) throw new Error('Failed to add review');
            return await res.json(); // Optionally return created review
          } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
          }
        }
      );

      //to fetch reviews by product
      export const fetchReviewsByProductThunk = createAsyncThunk(
        'review/fetchByProduct',
        async (productId: number, thunkAPI) => {
          try {
            const res = await fetch(`/api/review/${productId}`);
            if (!res.ok) throw new Error('Failed to fetch reviews');
            return await res.json();
          } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
          }
        }
      );

      const reviewSlice = createSlice({
        name: 'reviewslice',
        initialState,
        reducers: {
          // Optional local reducer (for mock/demo)
           addReview: (state, action: PayloadAction<Review>) => {
          state.reviews.push(action.payload);
        },
        },
        extraReducers: (builder) => {
          builder.addCase(addReviewThunk.fulfilled, (state, action) => {
            state.reviews.push(action.payload);
          });
          builder.addCase(fetchReviewsByProductThunk.fulfilled, (state, action) => {
            state.reviews = action.payload;
          });
        },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
