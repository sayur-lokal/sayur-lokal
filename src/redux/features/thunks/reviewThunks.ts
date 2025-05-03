import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '@/types/review';

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